// Minimal Firestore access via the REST API instead of the full JS SDK.
// Both paths are UNAUTHENTICATED (the site never signs a user in), so REST and
// the SDK evaluate the exact same security rules (request.auth == null) and are
// behaviorally identical — while saving ~580 KB of Firebase SDK on the homepage.
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "crifo-official";
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

export const FIREBASE_ENABLED = Boolean(API_KEY);

const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

type RestValue =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { nullValue: null };

function encodeFields(fields: Record<string, string | number | boolean>): Record<string, RestValue> {
  const out: Record<string, RestValue> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === "boolean") out[key] = { booleanValue: value };
    else if (typeof value === "number") {
      out[key] = Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
    } else out[key] = { stringValue: String(value) };
  }
  return out;
}

function decodeFields(fields: Record<string, RestValue>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(fields ?? {})) {
    if ("stringValue" in value) out[key] = value.stringValue;
    else if ("booleanValue" in value) out[key] = value.booleanValue;
    else if ("integerValue" in value) out[key] = Number(value.integerValue);
    else if ("doubleValue" in value) out[key] = value.doubleValue;
    else out[key] = null;
  }
  return out;
}

export async function getDocument(path: string): Promise<Record<string, unknown> | null> {
  if (!API_KEY) return null;
  try {
    const url = `${BASE_URL}/${path}?key=${encodeURIComponent(API_KEY)}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = (await res.json()) as { fields?: Record<string, RestValue> };
    return decodeFields(data.fields ?? {});
  } catch {
    return null;
  }
}

export async function createDocument(
  collectionPath: string,
  id: string,
  fields: Record<string, string | number | boolean>
): Promise<void> {
  if (!API_KEY) return;
  try {
    const url = `${BASE_URL}/${collectionPath}?documentId=${encodeURIComponent(id)}&key=${encodeURIComponent(API_KEY)}`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields: encodeFields(fields) }),
    });
  } catch {
    // Fire-and-forget telemetry: never break the page on tracking failures.
  }
}
