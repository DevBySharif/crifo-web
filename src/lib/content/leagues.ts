import type { League } from "./types";

export const LEAGUES: League[] = [
  // ─────────────────────────── International ───────────────────────────
  {
    slug: "world-cup",
    name: "FIFA World Cup",
    country: "International",
    region: "International",
    flag: "🌍",
    popularity: 100,
    intro:
      "The FIFA World Cup is the most-watched sporting event on the planet, held every four years with 48 national teams competing for the title since the 2026 edition. For fans it is a month of non-stop football across continents, and staying on top of every group-stage shock and knockout drama matters as much as the matches themselves.",
    keyInfo: [
      "Follow all 48 national teams through the group stage, Round of 32, and knockouts in real time.",
      "Live minutes, lineups, and head-to-head history for every fixture, including extra time and penalty shootouts.",
      "Built-in live TV channels let you jump straight from a match centre to a broadcast when a stream is available.",
    ],
    faqs: [
      {
        q: "Does CriFO show World Cup live scores?",
        a: "Yes. CriFO covers the FIFA World Cup with live scores, lineups, stats, and head-to-head history for every match, and links to live TV channels where available.",
      },
      {
        q: "Is the World Cup available for free on CriFO?",
        a: "Yes, every World Cup feature on CriFO is free — live scores, match details, and the built-in TV channels are all unlocked with no subscription.",
      },
    ],
  },
  {
    slug: "euro",
    name: "UEFA European Championship (Euro)",
    country: "International",
    region: "International",
    flag: "🏆",
    popularity: 90,
    intro:
      "The European Championship brings together the continent's best national teams every four years, with 24 nations in the finals since 2016. It is a tournament defined by upsets and late drama, and fans across Europe and beyond follow it match by match.",
    keyInfo: [
      "Live coverage of every group game, knockout round, and final with live minutes and commentary.",
      "Full lineups and head-to-head records for all 24 participating nations.",
      "Follow several matches at once — ideal for a tournament where fixtures overlap.",
    ],
    faqs: [
      {
        q: "Which Euro matches does CriFO cover?",
        a: "CriFO covers every UEFA European Championship match, from the group stage to the final, with live scores, lineups, and match statistics.",
      },
      {
        q: "Can I watch Euro games live on CriFO?",
        a: "CriFO includes 1000+ live TV channels, so when a broadcast of a Euro match is available you can tap straight into it from the match centre.",
      },
    ],
  },
  {
    slug: "copa-america",
    name: "Copa América",
    country: "International",
    region: "International",
    flag: "🏆",
    popularity: 78,
    intro:
      "Copa América is the oldest international football competition in the world, featuring the national teams of South America plus invited guests. It is famous for intense rivalries, passionate crowds, and the flair of continental champions.",
    keyInfo: [
      "Real-time scores for every group and knockout match, with extra-time and shootout tracking.",
      "Lineups and head-to-head history between the continent's biggest rivals.",
      "Compact tournament format means most nights have several simultaneous fixtures to follow.",
    ],
    faqs: [
      {
        q: "Does CriFO have Copa América live scores?",
        a: "Yes, CriFO tracks every Copa América fixture live, including lineups, statistics, and head-to-head history between the national teams.",
      },
      {
        q: "Is Copa América streaming available in CriFO?",
        a: "When a live channel for a Copa América match is available, CriFO shows it inside the app so you can watch without leaving the match centre.",
      },
    ],
  },
  {
    slug: "african-cup-of-nations",
    name: "Africa Cup of Nations",
    country: "International",
    region: "International",
    flag: "🏆",
    popularity: 62,
    intro:
      "The Africa Cup of Nations is the premier national-team competition on the African continent, with 24 nations competing for the title. It is a celebration of African football that draws huge audiences across the continent and the diaspora.",
    keyInfo: [
      "Live coverage of every group-stage match and knockout tie involving all 24 nations.",
      "Follow your country's squad with lineups and head-to-head stats in real time.",
      "Evening kickoffs across time zones make it easy to track matches from anywhere.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Africa Cup of Nations?",
        a: "Yes. Every Africa Cup of Nations match is available on CriFO with live scores, lineups, and statistics from the group stage through the final.",
      },
      {
        q: "How can I watch AFCON live on my Android phone?",
        a: "CriFO bundles 1000+ live TV channels, and when an AFCON broadcast is available it appears in the match centre so you can tap and watch.",
      },
    ],
  },
  {
    slug: "champions-league",
    name: "UEFA Champions League",
    country: "International",
    region: "International",
    flag: "⭐",
    popularity: 97,
    intro:
      "The Champions League is club football's biggest stage, where Europe's elite sides compete for the most coveted trophy in the game. Since 2024 it uses a 36-team league phase before the knockout rounds, meaning more big matches and more drama from the very first matchday.",
    keyInfo: [
      "Track all 36 teams in the league phase, then the Round of 16 to the final.",
      "Live minutes, lineups, and head-to-head history for every European night.",
      "Watch multiple kickoffs at once on matchdays with simultaneous fixtures.",
    ],
    faqs: [
      {
        q: "Does CriFO show Champions League fixtures live?",
        a: "Yes. CriFO covers the full UEFA Champions League, from the league phase to the final, with live scores, lineups, and match statistics.",
      },
      {
        q: "Can I watch Champions League matches on CriFO?",
        a: "CriFO includes 1000+ built-in live TV channels. When a Champions League broadcast is available, it links directly from the match centre.",
      },
    ],
  },
  {
    slug: "europa-league",
    name: "UEFA Europa League",
    country: "International",
    region: "International",
    flag: "⭐",
    popularity: 70,
    intro:
      "The Europa League is Europe's second-tier club competition, a tournament where continental pedigree meets ambitious challengers. Its Thursday-night fixtures have become a fixture of the European football calendar in their own right.",
    keyInfo: [
      "Follow the 36-team league phase and the knockout path to the final.",
      "Live lineups and head-to-head records for every Europa League night.",
      "Thursday fixture slot is ideal for tracking several matches simultaneously.",
    ],
    faqs: [
      {
        q: "Which Europa League matches does CriFO cover?",
        a: "CriFO covers the entire UEFA Europa League — every league-phase fixture and every knockout tie — with live scores and match details.",
      },
      {
        q: "Is the Europa League free to follow on CriFO?",
        a: "Yes, all Europa League coverage on CriFO is free, including live TV channel links when a broadcast is available.",
      },
    ],
  },
  {
    slug: "copa-libertadores",
    name: "Copa Libertadores",
    country: "International",
    region: "South America",
    flag: "🏆",
    popularity: 72,
    intro:
      "The Copa Libertadores is South America's premier club competition, a tournament renowned for its passion, altitude, and unpredictable nights. Winning it is the ultimate achievement for every club in the region.",
    keyInfo: [
      "Live scores from the group stage through the two-legged knockout rounds and the final.",
      "Real-time lineups and head-to-head history between South America's biggest clubs.",
      "Track simultaneous matches on heavy matchday weeks with ease.",
    ],
    faqs: [
      {
        q: "Does CriFO show Copa Libertadores matches live?",
        a: "Yes. CriFO covers every Copa Libertadores fixture with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Libertadores games live on CriFO?",
        a: "When a live channel is available for a Libertadores match, CriFO links it directly from the match centre so you can watch instantly.",
      },
    ],
  },
  // ─────────────────────────────── Europe ───────────────────────────────
  {
    slug: "premier-league",
    name: "Premier League",
    country: "England",
    region: "Europe",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    popularity: 99,
    intro:
      "The Premier League is the world's most-watched domestic football league, with 20 clubs battling across a 38-round season in England. Its mix of world-class talent, fast pace, and relentless weekend-to-weekend drama makes it the default league for fans on every continent.",
    keyInfo: [
      "Follow all 20 clubs and 380 league fixtures in real time, every matchday.",
      "Live lineups, stats, and head-to-head records for derbies like the Manchester and North London clashes.",
      "Multiple simultaneous kickoffs on Saturdays — track them all at once.",
    ],
    faqs: [
      {
        q: "Does CriFO have Premier League live scores?",
        a: "Yes. CriFO covers every Premier League match with live scores, lineups, statistics, and head-to-head history for all 20 clubs.",
      },
      {
        q: "How can I watch Premier League matches live for free?",
        a: "CriFO bundles 1000+ live TV channels, and when a Premier League broadcast is available it appears in the match centre for instant viewing.",
      },
    ],
  },
  {
    slug: "efl-championship",
    name: "EFL Championship",
    country: "England",
    region: "Europe",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    popularity: 55,
    intro:
      "The Championship is England's second tier — a brutally competitive 24-club division where promotion to the Premier League is worth more than any trophy. Its relentless schedule and packed fixture lists make it a favourite of football purists.",
    keyInfo: [
      "All 24 clubs and 552 league matches, plus the promotion play-offs in real time.",
      "Live lineups and head-to-head records for every round.",
      "Midweek rounds are common — keep up when the calendar gets crowded.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the EFL Championship?",
        a: "Yes, every Championship fixture is on CriFO with live scores, lineups, and statistics, including the promotion play-offs.",
      },
      {
        q: "Are Championship matches free on CriFO?",
        a: "Yes — all Championship coverage is free, with live TV channel links shown when a broadcast is available.",
      },
    ],
  },
  {
    slug: "fa-cup",
    name: "FA Cup",
    country: "England",
    region: "Europe",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    popularity: 50,
    intro:
      "The FA Cup is the oldest national football competition in the world, running since 1871. Its magic lies in giant-killings — small clubs knocking out the giants — across rounds that run from late summer to a showpiece final at Wembley.",
    keyInfo: [
      "Follow every round from the early stages to the Wembley final.",
      "Live lineups and head-to-head records, including those famous cup upsets.",
      "Replays and extra-time rounds mean fixtures can change — CriFO updates live.",
    ],
    faqs: [
      {
        q: "Does CriFO show FA Cup matches?",
        a: "Yes, CriFO covers the full FA Cup from the qualifying rounds to the final with live scores and match details.",
      },
      {
        q: "Can I watch the FA Cup live on CriFO?",
        a: "When an FA Cup broadcast is available, CriFO links it from the match centre via its built-in live TV channels.",
      },
    ],
  },
  {
    slug: "la-liga",
    name: "La Liga",
    country: "Spain",
    region: "Europe",
    flag: "🇪🇸",
    popularity: 93,
    intro:
      "La Liga is Spain's top flight, home to the Clásico between Real Madrid and Barcelona and a cast of technical, possession-first teams. With 20 clubs over 38 rounds, it produces some of the most watchable football in Europe.",
    keyInfo: [
      "All 20 clubs and every matchday, including El Clásico and the Madrid derby.",
      "Live lineups, stats, and head-to-head records for Spain's biggest fixtures.",
      "Late-evening kickoffs in Spain suit fans across the Americas and Asia.",
    ],
    faqs: [
      {
        q: "Does CriFO show La Liga live scores?",
        a: "Yes. Every La Liga match is available on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch La Liga live on CriFO?",
        a: "CriFO includes 1000+ live TV channels, and La Liga broadcasts appear in the match centre whenever they are available.",
      },
    ],
  },
  {
    slug: "copa-del-rey",
    name: "Copa del Rey",
    country: "Spain",
    region: "Europe",
    flag: "🇪🇸",
    popularity: 38,
    intro:
      "Spain's Copa del Rey is a knockout competition where lower-division sides can dream of facing the giants of La Liga. Its single-leg rounds and underdog stories make it one of the most unpredictable cup competitions in Europe.",
    keyInfo: [
      "Live coverage of every round, from the early cupsets to the final.",
      "Real-time lineups and head-to-head history for each knockout tie.",
      "Ties are often decided over one leg — follow the drama as it happens.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Copa del Rey?",
        a: "Yes, CriFO covers every round of the Copa del Rey with live scores, lineups, and statistics.",
      },
      {
        q: "Are Copa del Rey matches available on CriFO TV?",
        a: "When a Copa del Rey broadcast is available, CriFO links it from the match centre through its built-in TV channels.",
      },
    ],
  },
  {
    slug: "serie-a",
    name: "Serie A",
    country: "Italy",
    region: "Europe",
    flag: "🇮🇹",
    popularity: 88,
    intro:
      "Serie A is Italy's top division and the league of tactical sophistication, home to Juventus, Inter, and AC Milan. A 20-club, 38-round season with fierce city derbies and a deep pool of Italian coaching talent.",
    keyInfo: [
      "Follow all 20 clubs, including the Derby della Madonnina and Derby d'Italia.",
      "Live lineups, stats, and head-to-head records for every matchday.",
      "Weekend and Monday fixtures give fans games almost every day.",
    ],
    faqs: [
      {
        q: "Does CriFO have Serie A live scores?",
        a: "Yes, every Serie A match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Serie A live on CriFO?",
        a: "When a Serie A broadcast is available, CriFO shows it in the match centre via its built-in live TV channels.",
      },
    ],
  },
  {
    slug: "coppa-italia",
    name: "Coppa Italia",
    country: "Italy",
    region: "Europe",
    flag: "🇮🇹",
    popularity: 33,
    intro:
      "The Coppa Italia is Italy's national cup, a knockout tournament that gives Serie A's biggest clubs a second shot at silverware each season. Its two-legged semi-finals and single-leg final keep the drama tight.",
    keyInfo: [
      "Live scores for every round, including the two-legged semi-finals.",
      "Real-time lineups and head-to-head history for each tie.",
      "Round-by-round coverage from the early stages to the final.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Coppa Italia?",
        a: "Yes, CriFO covers the full Coppa Italia with live scores and match details from every round.",
      },
      {
        q: "Is the Coppa Italia free on CriFO?",
        a: "All Coppa Italia coverage on CriFO is free, including live TV links when broadcasts are available.",
      },
    ],
  },
  {
    slug: "bundesliga",
    name: "Bundesliga",
    country: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    popularity: 89,
    intro:
      "The Bundesliga is Germany's top flight — 18 clubs, 34 rounds, and the highest average attendances in world football. Famous for its fan culture, rapid transitions, and a winter break that resets the title race.",
    keyInfo: [
      "All 18 clubs and every matchday, including the Revierderby in the Ruhr.",
      "Live lineups, stats, and head-to-head records throughout the season.",
      "Friday-night openers plus a full weekend of fixtures to track.",
    ],
    faqs: [
      {
        q: "Does CriFO show Bundesliga live scores?",
        a: "Yes, every Bundesliga match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Bundesliga matches on CriFO?",
        a: "When a Bundesliga broadcast is available, CriFO links it directly from the match centre through its live TV channels.",
      },
    ],
  },
  {
    slug: "dfb-pokal",
    name: "DFB-Pokal",
    country: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    popularity: 32,
    intro:
      "Germany's DFB-Pokal is a knockout cup open to professional and amateur clubs alike. Its two-tiered structure and single-match rounds regularly produce dramatic upsets that reshape the German football season.",
    keyInfo: [
      "Live coverage of every round from the first round to the Berlin final.",
      "Real-time lineups and head-to-head records for each tie.",
      "Single-leg ties mean every match is a knockout — follow them live.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the DFB-Pokal?",
        a: "Yes, CriFO covers every round of the DFB-Pokal with live scores and match details.",
      },
      {
        q: "Can I watch the DFB-Pokal live on CriFO?",
        a: "When a DFB-Pokal broadcast is available, it appears in the CriFO match centre for instant viewing.",
      },
    ],
  },
  {
    slug: "ligue-1",
    name: "Ligue 1",
    country: "France",
    region: "Europe",
    flag: "🇫🇷",
    popularity: 84,
    intro:
      "Ligue 1 is France's top division, a league that combines elite clubs with a conveyor belt of young talent. With 18 clubs and 34 rounds, it is where many of the world's biggest stars take their first steps in European football.",
    keyInfo: [
      "All 18 clubs and every matchday, including Le Classique.",
      "Live lineups, stats, and head-to-head history throughout the season.",
      "Track the title race and the relegation battle as they unfold.",
    ],
    faqs: [
      {
        q: "Does CriFO have Ligue 1 live scores?",
        a: "Yes, every Ligue 1 match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Ligue 1 live on CriFO?",
        a: "CriFO shows Ligue 1 broadcasts in the match centre whenever they are available, via its 1000+ built-in live TV channels.",
      },
    ],
  },
  {
    slug: "coupe-de-france",
    name: "Coupe de France",
    country: "France",
    region: "Europe",
    flag: "🇫🇷",
    popularity: 28,
    intro:
      "The Coupe de France is unique: it is open to every club in the country, from amateur sides to Ligue 1 giants. With more than 7,000 teams entering each year, it is a true David-versus-Goliath competition.",
    keyInfo: [
      "Live coverage from the early rounds through the final at the Stade de France.",
      "Real-time lineups and head-to-head records for each tie.",
      "Single-leg knockout format — every match matters from minute one.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Coupe de France?",
        a: "Yes, CriFO covers the Coupe de France with live scores and match details across all rounds.",
      },
      {
        q: "Is the Coupe de France available on CriFO TV?",
        a: "When a Coupe de France broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "eredivisie",
    name: "Eredivisie",
    country: "Netherlands",
    region: "Europe",
    flag: "🇳🇱",
    popularity: 63,
    intro:
      "The Eredivisie is the Dutch top flight, a league celebrated for its attacking football and academy production lines at Ajax, PSV, and Feyenoord. Eighteen clubs play 34 rounds before European-qualification play-offs.",
    keyInfo: [
      "Follow all 18 clubs, including the De Klassieker between Ajax and Feyenoord.",
      "Live lineups, stats, and head-to-head records for every round.",
      "High-scoring football means live updates matter even more.",
    ],
    faqs: [
      {
        q: "Does CriFO show Eredivisie live scores?",
        a: "Yes, every Eredivisie match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Eredivisie matches on CriFO?",
        a: "When an Eredivisie broadcast is available, CriFO links it from the match centre via its live TV channels.",
      },
    ],
  },
  {
    slug: "primeira-liga",
    name: "Primeira Liga",
    country: "Portugal",
    region: "Europe",
    flag: "🇵🇹",
    popularity: 58,
    intro:
      "Portugal's Primeira Liga is a 18-club league dominated by the Lisbon and Porto giants, with a well-earned reputation for producing world-class wingers and midfielders. Its European nights and weekend fixtures draw fans worldwide.",
    keyInfo: [
      "All 18 clubs and every matchday, including the Lisbon and Porto derbies.",
      "Live lineups, stats, and head-to-head history throughout the season.",
      "Follow the title race and the race for European places in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO have Primeira Liga live scores?",
        a: "Yes, every Primeira Liga match is available on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Primeira Liga live on CriFO?",
        a: "When a Primeira Liga broadcast is available, CriFO shows it in the match centre through its built-in live TV channels.",
      },
    ],
  },
  {
    slug: "scottish-premiership",
    name: "Scottish Premiership",
    country: "Scotland",
    region: "Europe",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    popularity: 45,
    intro:
      "The Scottish Premiership is Scotland's top flight, where the Old Firm rivalry between Celtic and Rangers dominates the calendar. Twelve clubs contest the title before the league splits into top and bottom halves.",
    keyInfo: [
      "All 12 clubs, including the Old Firm derby — one of football's biggest.",
      "Live lineups, stats, and head-to-head records for the full season.",
      "The split adds a unique late-season twist — track every twist live.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Scottish Premiership?",
        a: "Yes, every Scottish Premiership match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Scottish Premiership matches on CriFO?",
        a: "When a Scottish Premiership broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "super-lig",
    name: "Süper Lig",
    country: "Turkey",
    region: "Europe",
    flag: "🇹🇷",
    popularity: 54,
    intro:
      "Turkey's Süper Lig is famous for its hostile, electric atmospheres and title races that routinely go to the wire. With 20 clubs, it is one of Europe's most passionate top divisions.",
    keyInfo: [
      "All 20 clubs and every matchday, including the Istanbul derbies.",
      "Live lineups, stats, and head-to-head records throughout the season.",
      "High-intensity derby weekends — follow every flashpoint live.",
    ],
    faqs: [
      {
        q: "Does CriFO show Süper Lig live scores?",
        a: "Yes, every Süper Lig match is available on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Süper Lig live on CriFO?",
        a: "When a Süper Lig broadcast is available, CriFO links it from the match centre via its live TV channels.",
      },
    ],
  },
  {
    slug: "belgian-pro-league",
    name: "Belgian Pro League",
    country: "Belgium",
    region: "Europe",
    flag: "🇧🇪",
    popularity: 42,
    intro:
      "Belgium's Pro League is a 16-club competition famous for its youth development and unpredictable title races. A play-off system at the end of the regular season decides the champion.",
    keyInfo: [
      "All 16 clubs through the regular season and the championship play-offs.",
      "Live lineups, stats, and head-to-head records for every round.",
      "The play-off format changes the title race — stay on top of it.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Belgian Pro League?",
        a: "Yes, CriFO covers every Belgian Pro League match with live scores and match details, including the play-offs.",
      },
      {
        q: "Is the Belgian Pro League free on CriFO?",
        a: "All Belgian Pro League coverage is free on CriFO, with live TV links shown when broadcasts are available.",
      },
    ],
  },
  {
    slug: "swiss-super-league",
    name: "Swiss Super League",
    country: "Switzerland",
    region: "Europe",
    flag: "🇨🇭",
    popularity: 35,
    intro:
      "The Swiss Super League is a 12-club division where well-run smaller clubs routinely compete with the country's traditional powers. A final championship round keeps the title race alive until the end.",
    keyInfo: [
      "All 12 clubs through the regular season and the championship round.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Compact league — follow every fixture without missing a round.",
    ],
    faqs: [
      {
        q: "Does CriFO have Swiss Super League live scores?",
        a: "Yes, every Swiss Super League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Swiss Super League matches on CriFO?",
        a: "When a Swiss Super League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "austrian-bundesliga",
    name: "Austrian Bundesliga",
    country: "Austria",
    region: "Europe",
    flag: "🇦🇹",
    popularity: 30,
    intro:
      "Austria's Bundesliga is a 12-club league with a strong emphasis on pressing football and developing young players. A championship round after the regular season decides the title.",
    keyInfo: [
      "All 12 clubs through the regular season and championship round.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow Salzburg's rivals and the European race in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Austrian Bundesliga?",
        a: "Yes, every Austrian Bundesliga match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Austrian Bundesliga matches on CriFO?",
        a: "When a broadcast is available, CriFO links Austrian Bundesliga matches from the match centre.",
      },
    ],
  },
  {
    slug: "greek-super-league",
    name: "Greek Super League",
    country: "Greece",
    region: "Europe",
    flag: "🇬🇷",
    popularity: 31,
    intro:
      "Greece's Super League is defined by the fierce rivalry between Olympiacos and Panathinaikos in Athens and PAOK in Thessaloniki. The league's passionate support makes every match an occasion.",
    keyInfo: [
      "All 14 clubs and every matchday, including the Greek derbies.",
      "Live lineups, stats, and head-to-head records throughout the season.",
      "High-stakes derbies — follow the drama as it happens.",
    ],
    faqs: [
      {
        q: "Does CriFO show Greek Super League live scores?",
        a: "Yes, every Greek Super League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Greek Super League matches on CriFO?",
        a: "When a Greek Super League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "danish-superliga",
    name: "Danish Superliga",
    country: "Denmark",
    region: "Europe",
    flag: "🇩🇰",
    popularity: 29,
    intro:
      "Denmark's Superliga is a 12-club league that has grown strongly in recent years, producing international talent and regular European runs. A split-season format keeps interest alive deep into the campaign.",
    keyInfo: [
      "All 12 clubs through the split season and championship round.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the European qualification race in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Danish Superliga?",
        a: "Yes, every Danish Superliga match is available on CriFO with live scores and match details.",
      },
      {
        q: "Is the Danish Superliga free on CriFO?",
        a: "All Danish Superliga coverage on CriFO is free, including live TV links when available.",
      },
    ],
  },
  {
    slug: "norwegian-eliteserien",
    name: "Eliteserien",
    country: "Norway",
    region: "Europe",
    flag: "🇳🇴",
    popularity: 26,
    intro:
      "Norway's Eliteserien is a summer-season league of 16 clubs, played between spring and autumn. Its unusual calendar and open, attacking style make it a favourite among fans seeking something different.",
    keyInfo: [
      "All 16 clubs across a full summer season of football.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Northern kickoffs at unusual hours — follow matches from anywhere.",
    ],
    faqs: [
      {
        q: "Does CriFO show Eliteserien live scores?",
        a: "Yes, every Eliteserien match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Eliteserien matches on CriFO?",
        a: "When an Eliteserien broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "swedish-allsvenskan",
    name: "Allsvenskan",
    country: "Sweden",
    region: "Europe",
    flag: "🇸🇪",
    popularity: 24,
    intro:
      "Sweden's Allsvenskan is the country's top league, played on a summer schedule with 16 clubs. Its mix of established sides and rising talent makes every season a fresh story.",
    keyInfo: [
      "All 16 clubs across the full summer season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Track the title and relegation races as they develop.",
    ],
    faqs: [
      {
        q: "Does CriFO cover Allsvenskan?",
        a: "Yes, every Allsvenskan match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Allsvenskan matches on CriFO?",
        a: "When an Allsvenskan broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "polish-ekstraklasa",
    name: "Ekstraklasa",
    country: "Poland",
    region: "Europe",
    flag: "🇵🇱",
    popularity: 27,
    intro:
      "Poland's Ekstraklasa is an 18-club league with passionate support and a long history. Its title races are frequently decided by the narrowest of margins, keeping fans glued until the final round.",
    keyInfo: [
      "All 18 clubs and every matchday of the season.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Tight title races — follow every twist live.",
    ],
    faqs: [
      {
        q: "Does CriFO show Ekstraklasa live scores?",
        a: "Yes, every Ekstraklasa match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Ekstraklasa matches on CriFO?",
        a: "When an Ekstraklasa broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "czech-first-league",
    name: "Czech First League",
    country: "Czechia",
    region: "Europe",
    flag: "🇨🇿",
    popularity: 23,
    intro:
      "The Czech First League is the top division of Czech football, with a proud record of developing talent and a strong Prague rivalry at its heart. Sixteen clubs compete across the season.",
    keyInfo: [
      "All 16 clubs and every matchday of the season.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Follow the Prague clubs and the European race in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Czech First League?",
        a: "Yes, every Czech First League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Czech First League matches on CriFO?",
        a: "When a broadcast is available, CriFO links Czech First League matches from the match centre.",
      },
    ],
  },
  // ─────────────────────────── South America ───────────────────────────
  {
    slug: "brasileirao",
    name: "Brasileirão Série A",
    country: "Brazil",
    region: "South America",
    flag: "🇧🇷",
    popularity: 85,
    intro:
      "The Brasileirão is Brazil's top flight — a 20-club league famous for flair, ferocious support, and a gruelling 38-round season. It is the deepest talent pool in South American football.",
    keyInfo: [
      "All 20 clubs across the full 38-round season.",
      "Live lineups, stats, and head-to-head records for every matchday.",
      "Late-night kickoffs in Brazil suit fans across the Americas and beyond.",
    ],
    faqs: [
      {
        q: "Does CriFO show Brasileirão live scores?",
        a: "Yes, every Brasileirão match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch Brasileirão matches on CriFO?",
        a: "When a Brasileirão broadcast is available, CriFO links it from the match centre via its live TV channels.",
      },
    ],
  },
  {
    slug: "argentine-primera",
    name: "Argentine Primera División",
    country: "Argentina",
    region: "South America",
    flag: "🇦🇷",
    popularity: 74,
    intro:
      "Argentina's Primera División is home to the Superclásico between River Plate and Boca Juniors, one of the most intense rivalries in sport. The league is a hotbed of tactical football and raw passion.",
    keyInfo: [
      "All 28 clubs, including the Superclásico and other historic derbies.",
      "Live lineups, stats, and head-to-head records throughout the season.",
      "Derby weekends are unmissable — follow every flashpoint live.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Argentine Primera División?",
        a: "Yes, every Argentine Primera División match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Argentine league matches on CriFO?",
        a: "When a broadcast is available, CriFO links Argentine Primera División matches from the match centre.",
      },
    ],
  },
  {
    slug: "uruguayan-primera",
    name: "Uruguayan Primera División",
    country: "Uruguay",
    region: "South America",
    flag: "🇺🇾",
    popularity: 30,
    intro:
      "Uruguay's Primera División is a small but storied league, with a glorious history and the Montevideo derby between Peñarol and Nacional at its core. Its two-season format means a title race almost all year.",
    keyInfo: [
      "Both short seasons of the Uruguayan calendar, plus the championship decider.",
      "Live lineups, stats, and head-to-head records for the Montevideo derby.",
      "Follow the title race in both halves of the season.",
    ],
    faqs: [
      {
        q: "Does CriFO show Uruguayan Primera División live scores?",
        a: "Yes, every Uruguayan Primera División match is on CriFO with live scores and match details.",
      },
      {
        q: "Can I watch Uruguayan league matches on CriFO?",
        a: "When a broadcast is available, CriFO links Uruguayan Primera División matches from the match centre.",
      },
    ],
  },
  {
    slug: "colombian-primera",
    name: "Colombian Primera A",
    country: "Colombia",
    region: "South America",
    flag: "🇨🇴",
    popularity: 44,
    intro:
      "Colombia's Primera A is played across two short seasons each year, with the country's biggest clubs — including Millonarios and Nacional — regularly contesting deep play-off runs. Passionate crowds make it one of South America's most atmospheric leagues.",
    keyInfo: [
      "Both short seasons, including the play-off rounds and finals.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Two title races a year — follow both in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Colombian Primera A?",
        a: "Yes, every Colombian Primera A match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Colombian league matches on CriFO?",
        a: "When a Colombian Primera A broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "chilean-primera",
    name: "Chilean Primera División",
    country: "Chile",
    region: "South America",
    flag: "🇨🇱",
    popularity: 34,
    intro:
      "Chile's Primera División mixes storied clubs like Colo-Colo and Universidad de Chile with a growing pool of young talent. Its matches are known for high tempo and vocal support.",
    keyInfo: [
      "All 16 clubs across the season, including the Clásico Albo.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the title and relegation races in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO show Chilean Primera División live scores?",
        a: "Yes, every Chilean Primera División match is on CriFO with live scores and match details.",
      },
      {
        q: "Can I watch Chilean league matches on CriFO?",
        a: "When a broadcast is available, CriFO links Chilean Primera División matches from the match centre.",
      },
    ],
  },
  // ─────────────────────── North & Central America ───────────────────────
  {
    slug: "mls",
    name: "Major League Soccer (MLS)",
    country: "United States",
    region: "North & Central America",
    flag: "🇺🇸",
    popularity: 68,
    intro:
      "Major League Soccer is the top flight of North American football, with clubs across the United States and Canada. Its play-off structure and mid-season schedule deliver drama from spring to late autumn.",
    keyInfo: [
      "All 30 clubs across the regular season and the MLS Cup play-offs.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Evening kickoffs across time zones — follow matches from anywhere.",
    ],
    faqs: [
      {
        q: "Does CriFO show MLS live scores?",
        a: "Yes, every MLS match is on CriFO with live scores, lineups, statistics, and head-to-head history.",
      },
      {
        q: "Can I watch MLS matches on CriFO?",
        a: "When an MLS broadcast is available, CriFO links it from the match centre via its live TV channels.",
      },
    ],
  },
  {
    slug: "liga-mx",
    name: "Liga MX",
    country: "Mexico",
    region: "North & Central America",
    flag: "🇲🇽",
    popularity: 61,
    intro:
      "Liga MX is the most powerful league in North America, played in two short seasons with an intense play-off (Liguilla) deciding each champion. Its Clásico between América and Guadalajara is one of the most-watched derbies in world football.",
    keyInfo: [
      "Both short seasons (Apertura and Clausura) plus the Liguilla play-offs.",
      "Live lineups, stats, and head-to-head records for the Clásico.",
      "Two championships a year — follow both in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover Liga MX?",
        a: "Yes, every Liga MX match is on CriFO with live scores, lineups, and statistics, including the Liguilla.",
      },
      {
        q: "Can I watch Liga MX matches on CriFO?",
        a: "When a Liga MX broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "costa-rican-primera",
    name: "Costa Rican Primera División",
    country: "Costa Rica",
    region: "North & Central America",
    flag: "🇨🇷",
    popularity: 18,
    intro:
      "Costa Rica's Primera División is a compact league built around the traditional rivalry between Saprissa and Alajuelense. It consistently develops players who move on to Europe and MLS.",
    keyInfo: [
      "Both short seasons of the Costa Rican calendar.",
      "Live lineups, stats, and head-to-head records for the clásico.",
      "Follow the title race in both halves of the year.",
    ],
    faqs: [
      {
        q: "Does CriFO show the Costa Rican Primera División?",
        a: "Yes, every Costa Rican Primera División match is on CriFO with live scores and match details.",
      },
      {
        q: "Can I watch Costa Rican league matches on CriFO?",
        a: "When a broadcast is available, CriFO links Costa Rican Primera División matches from the match centre.",
      },
    ],
  },
  {
    slug: "concacaf-champions-cup",
    name: "CONCACAF Champions Cup",
    country: "International",
    region: "North & Central America",
    flag: "🏆",
    popularity: 25,
    intro:
      "The CONCACAF Champions Cup brings together the top clubs from North America, Central America, and the Caribbean. It is the region's route to the FIFA Club World Cup and a proving ground for its best teams.",
    keyInfo: [
      "Live coverage of every knockout round from the round of 16 to the final.",
      "Real-time lineups and head-to-head records for each two-legged tie.",
      "Clubs from across the region — follow them all from one app.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the CONCACAF Champions Cup?",
        a: "Yes, CriFO covers the CONCACAF Champions Cup with live scores and match details for every round.",
      },
      {
        q: "Can I watch CONCACAF matches on CriFO?",
        a: "When a CONCACAF Champions Cup broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  // ──────────────────────────── Asia & Oceania ────────────────────────────
  {
    slug: "saudi-pro-league",
    name: "Saudi Pro League",
    country: "Saudi Arabia",
    region: "Asia & Oceania",
    flag: "🇸🇦",
    popularity: 67,
    intro:
      "The Saudi Pro League has become one of the most watched leagues in Asia, attracting global superstars since its 2022 investment boom. Eighteen clubs compete for the title in front of some of the continent's biggest crowds.",
    keyInfo: [
      "All 18 clubs, including the Riyadh derby between Al-Hilal and Al-Nassr.",
      "Live lineups, stats, and head-to-head records throughout the season.",
      "Big-name signings draw global attention — follow every match live.",
    ],
    faqs: [
      {
        q: "Does CriFO show Saudi Pro League live scores?",
        a: "Yes, every Saudi Pro League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Saudi Pro League matches on CriFO?",
        a: "When a Saudi Pro League broadcast is available, CriFO links it from the match centre via its live TV channels.",
      },
    ],
  },
  {
    slug: "j1-league",
    name: "J1 League",
    country: "Japan",
    region: "Asia & Oceania",
    flag: "🇯🇵",
    popularity: 52,
    intro:
      "Japan's J1 League is Asia's most technically refined competition, with 20 clubs playing a spring-to-autumn season. Its disciplined, pass-heavy style and packed stadiums make it a favourite among football connoisseurs.",
    keyInfo: [
      "All 20 clubs across the full J1 season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the J-League's young stars as they develop in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the J1 League?",
        a: "Yes, every J1 League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch J1 League matches on CriFO?",
        a: "When a J1 League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "k-league-1",
    name: "K League 1",
    country: "South Korea",
    region: "Asia & Oceania",
    flag: "🇰🇷",
    popularity: 43,
    intro:
      "South Korea's K League 1 is a 12-club league that splits into final and relegation groups late in the season. Its fast, direct football and roaring fan culture make it one of Asia's most exciting divisions.",
    keyInfo: [
      "All 12 clubs through the split into final and relegation rounds.",
      "Live lineups, stats, and head-to-head records throughout.",
      "The split adds high stakes to the run-in — follow it live.",
    ],
    faqs: [
      {
        q: "Does CriFO show K League 1 live scores?",
        a: "Yes, every K League 1 match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch K League 1 matches on CriFO?",
        a: "When a K League 1 broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "indian-super-league",
    name: "Indian Super League (ISL)",
    country: "India",
    region: "Asia & Oceania",
    flag: "🇮🇳",
    popularity: 57,
    intro:
      "The Indian Super League is the flagship of Indian club football, growing rapidly in popularity since its founding in 2014. Its franchise model and passionate support across a cricket-mad nation make it a unique football story.",
    keyInfo: [
      "All 13 clubs across the regular season and the ISL play-offs.",
      "Live lineups, stats, and head-to-head records throughout.",
      "Follow the league's mix of local heroes and international signings.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Indian Super League?",
        a: "Yes, every ISL match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch ISL matches on CriFO?",
        a: "When an ISL broadcast is available, CriFO links it from the match centre via its live TV channels.",
      },
    ],
  },
  {
    slug: "a-league",
    name: "A-League",
    country: "Australia",
    region: "Asia & Oceania",
    flag: "🇦🇺",
    popularity: 36,
    intro:
      "The A-League is Australia and New Zealand's top division, known for its fast, open games and summer-season calendar. The Sydney Derby and the Melbourne derby anchor a growing domestic rivalry culture.",
    keyInfo: [
      "All 13 clubs across the regular season and finals series.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Summer football in the south — follow matches from anywhere.",
    ],
    faqs: [
      {
        q: "Does CriFO show the A-League?",
        a: "Yes, every A-League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch A-League matches on CriFO?",
        a: "When an A-League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "qatar-stars-league",
    name: "Qatar Stars League",
    country: "Qatar",
    region: "Asia & Oceania",
    flag: "🇶🇦",
    popularity: 33,
    intro:
      "Qatar's Stars League has invested heavily in football infrastructure and talent, and the country's post-World Cup momentum has lifted the domestic game. Twelve clubs contest the title.",
    keyInfo: [
      "All 12 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the country's marquee signings in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Qatar Stars League?",
        a: "Yes, every Qatar Stars League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Qatar Stars League matches on CriFO?",
        a: "When a Qatar Stars League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "uae-pro-league",
    name: "UAE Pro League",
    country: "United Arab Emirates",
    region: "Asia & Oceania",
    flag: "🇦🇪",
    popularity: 32,
    intro:
      "The UAE Pro League is one of the Gulf's most established competitions, with a strong local identity and well-supported clubs. Fourteen teams compete across the season.",
    keyInfo: [
      "All 14 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the UAE's top clubs in the Asian continental cups.",
    ],
    faqs: [
      {
        q: "Does CriFO show the UAE Pro League?",
        a: "Yes, every UAE Pro League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch UAE Pro League matches on CriFO?",
        a: "When a UAE Pro League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "chinese-super-league",
    name: "Chinese Super League",
    country: "China",
    region: "Asia & Oceania",
    flag: "🇨🇳",
    popularity: 30,
    intro:
      "China's Super League is the country's top division, played on a spring-to-autumn calendar. After years of heavy investment it remains one of Asia's biggest football markets.",
    keyInfo: [
      "All 16 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the league's star arrivals and the domestic title race.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Chinese Super League?",
        a: "Yes, every Chinese Super League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Chinese Super League matches on CriFO?",
        a: "When a Chinese Super League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "thai-league",
    name: "Thai League 1",
    country: "Thailand",
    region: "Asia & Oceania",
    flag: "🇹🇭",
    popularity: 28,
    intro:
      "Thailand's top division is one of Southeast Asia's most competitive leagues, backed by enormous local support. Sixteen clubs contest a full season with a growing regional audience.",
    keyInfo: [
      "All 16 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow Southeast Asian football's biggest clubs live.",
    ],
    faqs: [
      {
        q: "Does CriFO show the Thai League?",
        a: "Yes, every Thai League 1 match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Thai League matches on CriFO?",
        a: "When a Thai League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "afc-champions-league",
    name: "AFC Champions League Elite",
    country: "International",
    region: "Asia & Oceania",
    flag: "⭐",
    popularity: 40,
    intro:
      "The AFC Champions League Elite is Asia's top club competition, rebranded and expanded in 2024. It brings together the champions of the continent's biggest leagues in a league-plus-knockout format.",
    keyInfo: [
      "Live coverage of every league-phase and knockout match.",
      "Real-time lineups and head-to-head records between Asia's best clubs.",
      "Follow the champions of the J-League, K League, Saudi Pro League, and more.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the AFC Champions League Elite?",
        a: "Yes, CriFO covers the AFC Champions League Elite with live scores, lineups, and statistics for every match.",
      },
      {
        q: "Can I watch AFC Champions League matches on CriFO?",
        a: "When an AFC Champions League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  // ──────────────────────────────── Africa ────────────────────────────────
  {
    slug: "egyptian-premier-league",
    name: "Egyptian Premier League",
    country: "Egypt",
    region: "Africa",
    flag: "🇪🇬",
    popularity: 47,
    intro:
      "The Egyptian Premier League is Africa's most successful domestic competition, home to Cairo giants Al Ahly and Zamalek. With 18 clubs and huge attendances, it sets the standard for African club football.",
    keyInfo: [
      "All 18 clubs, including the Cairo derby between Al Ahly and Zamalek.",
      "Live lineups, stats, and head-to-head records throughout the season.",
      "Follow African football's biggest rivalry in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO show the Egyptian Premier League?",
        a: "Yes, every Egyptian Premier League match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Egyptian Premier League matches on CriFO?",
        a: "When an Egyptian Premier League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "botola-pro",
    name: "Botola Pro",
    country: "Morocco",
    region: "Africa",
    flag: "🇲🇦",
    popularity: 30,
    intro:
      "Morocco's Botola Pro has surged in profile since the country's historic World Cup run in 2022. Its clubs regularly compete deep into the CAF competitions, making it one of Africa's strongest leagues.",
    keyInfo: [
      "All 16 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the Casablanca derby and the CAF contenders in real time.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Botola Pro?",
        a: "Yes, every Botola Pro match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Botola Pro matches on CriFO?",
        a: "When a Botola Pro broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "dstv-premiership",
    name: "DStv Premiership",
    country: "South Africa",
    region: "Africa",
    flag: "🇿🇦",
    popularity: 37,
    intro:
      "South Africa's DStv Premiership is one of Africa's best-organized leagues, with 16 clubs and a professional structure. Mamelodi Sundowns' dominance has defined recent seasons, but the chasing pack is fierce.",
    keyInfo: [
      "All 16 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the championship chase and the relegation battle live.",
    ],
    faqs: [
      {
        q: "Does CriFO show the DStv Premiership?",
        a: "Yes, every DStv Premiership match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch DStv Premiership matches on CriFO?",
        a: "When a DStv Premiership broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "nigerian-premier-league",
    name: "Nigerian Professional Football League",
    country: "Nigeria",
    region: "Africa",
    flag: "🇳🇬",
    popularity: 34,
    intro:
      "Nigeria's professional league is the biggest football market in West Africa, feeding the national team's conveyor belt of talent. Its clubs and crowds make for an intense, physical competition.",
    keyInfo: [
      "All 20 clubs across the full season.",
      "Live lineups, stats, and head-to-head records for every round.",
      "Follow the league's young stars on their way to Europe.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the Nigerian Professional Football League?",
        a: "Yes, every NPFL match is on CriFO with live scores, lineups, and statistics.",
      },
      {
        q: "Can I watch Nigerian league matches on CriFO?",
        a: "When an NPFL broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
  {
    slug: "caf-champions-league",
    name: "CAF Champions League",
    country: "International",
    region: "Africa",
    flag: "⭐",
    popularity: 42,
    intro:
      "The CAF Champions League is Africa's premier club competition, where Al Ahly's record haul meets a growing list of challengers from across the continent. Its two-legged ties and finals are high-stakes affairs.",
    keyInfo: [
      "Live coverage of every group and knockout match to the final.",
      "Real-time lineups and head-to-head records for each two-legged tie.",
      "Follow the continent's biggest clubs in one place.",
    ],
    faqs: [
      {
        q: "Does CriFO cover the CAF Champions League?",
        a: "Yes, CriFO covers the CAF Champions League with live scores, lineups, and statistics for every match.",
      },
      {
        q: "Can I watch CAF Champions League matches on CriFO?",
        a: "When a CAF Champions League broadcast is available, CriFO links it from the match centre.",
      },
    ],
  },
];

export const REGIONS = [
  "International",
  "Europe",
  "South America",
  "North & Central America",
  "Asia & Oceania",
  "Africa",
] as const;
