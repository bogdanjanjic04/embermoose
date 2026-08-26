export const SITE = {
  name: "Ember Moose",
  owner: "Bogdan Janjić",
  handle: "ToShamara",
  location: "Užice, Serbia",
  github: { label: "GitHub", href: "https://github.com/bogdanjanjic04", handle: "bogdanjanjic04" },
  itch: { label: "itch.io", href: "https://toshamara.itch.io", handle: "ToShamara" },
  x: { label: "X", href: "https://x.com/ToShamara", handle: "@ToShamara" },
};

export type Category =
  | "games"
  | "android"
  | "software"
  | "modding"
  | "systems"
  | "ai"
  | "experiments";

export const FILTERS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "games", label: "Games" },
  { id: "android", label: "Android" },
  { id: "software", label: "Software" },
  { id: "modding", label: "Modding" },
  { id: "systems", label: "Systems" },
  { id: "ai", label: "AI / Local LLM" },
  { id: "experiments", label: "Experiments" },
];

export const CATEGORY_LABELS: Record<Category, string> = {
  games: "Games",
  android: "Android",
  software: "Software",
  modding: "Modding",
  systems: "Systems",
  ai: "AI / Local LLM",
  experiments: "Experiments",
};

// Which mod notes / lab entries belong to which filter category.
// Keys are "note:<id>" or "lab:<id>".
export const NOTE_CATEGORIES: Record<string, Category[]> = {
  "note:renameanimal": ["modding"],
  "note:chat-commands-16": ["modding"],
  "note:serbian-pipeline": ["modding", "ai"],
  "lab:local-llm": ["ai", "experiments"],
  "lab:samp-research": ["systems"],
  "lab:system-tools": ["systems", "software"],
  "lab:papers-analysis": ["experiments"],
  "lab:media-lab": ["experiments"],
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "play" | "code";
};

export type ProjectSection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  name: string;
  formerName?: string;
  tagline?: string;
  categories: Category[];
  meta: string;
  status?: string;
  stack: string[];
  summary: string;
  points: string[];
  art:
    | "pillars"
    | "countedout"
    | "forge"
    | "pomodoro"
    | "streaks"
    | "notation"
    | "screen"
    | "debt"
    | "handoff";
  caption: string;
  shot?: { src: string; alt: string };
  links?: ProjectLink[];
  sections?: ProjectSection[];
  relatedNoteIds?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "pillars-of-control",
    name: "Pillars of Control",
    formerName: "Stonebrook",
    categories: ["games"],
    meta: "Godot 4.7 · GDScript · top-down",
    status: "In development",
    stack: ["Godot 4.7", "GDScript"],
    summary:
      "A social strategy game about four roles competing for control of one town, designed as a four-player multiplayer match of cooperation, deception and structural dominance.",
    points: [
      "Designed around four competing roles, each a different kind of power: Farmer as supply controller, Businessman as capital controller, Store Manager as information controller, Regulator as legal controller",
      "Walkable top-down world with six explorable locations",
      "Interlocking economy, reputation and espionage systems: a visible public reputation score runs alongside a hidden actual-conduct score, and the two are not the same",
      "Dynamic policy layer: food standards, tax rates, surveillance legality and contract enforcement can all change mid-game through the Regulator’s tools",
      "Black market options for every role: off-the-books sales, fake invoices, forged documents, planted bugs, sting operations; lawsuits run on evidence that can be real, fake, incomplete or misleading",
      "Code-driven UI and custom game-logic systems instead of off-the-shelf templates; placeholder asset pipeline kept deliberately swappable; ongoing static-analysis and bug-fixing passes",
    ],
    art: "pillars",
    caption: "fig. 01 · role selection: in-game capture",
    shot: { src: "/images/projects/pillars-of-control-roles.webp", alt: "Pillars of Control role selection: Farmer, Businessman, Store Manager and Regulator" },
    relatedNoteIds: [],
    sections: [
      {
        heading: "One town, four kinds of power",
        body: [
          "The design document frames the four roles as controllers of different systems: the Farmer controls supply, the Businessman controls capital and market access, the Store Manager controls information and financial records, the Regulator controls the rules themselves.",
          "Nobody wins by scoring points. Each role has its own Power Victory condition, from controlling the food routes to owning the legal system and the public narrative, and the endgame adds Power Plays: corporate takeover, political coup, supply monopoly, engineered financial collapse.",
        ],
      },
      {
        heading: "Perception as a game system",
        body: [
          "Every player carries a visible reputation score and a hidden conduct score, and the gap between them is where the game lives: smear campaigns, anonymous tips, loyalty tests, staged events and sold reputation services all push the visible number around.",
          "Market events (shortages, health scares, festivals, crime waves) bend the economy so each role has moments of leverage, and the evidence system makes lawsuits a gamble: real, fake, incomplete and misleading evidence all exist, and a failed lawsuit can bankrupt the plaintiff.",
        ],
      },
      {
        heading: "Engineered like software, not like a demo",
        body: [
          "The UI is code-driven and the game logic runs through custom systems written for this game specifically, so behavior stays inspectable while the design changes.",
          "Art is deliberately placeholder-grade behind a swappable pipeline; static analysis passes and bug fixing are part of the current development loop.",
        ],
      },
    ],
  },
  {
    slug: "ante-zero",
    name: "ANTE ZERO",
    tagline: "Count down to nothing",
    categories: ["games"],
    meta: "Godot 4.7.1 · GDScript · 3D",
    stack: ["Godot 4.7.1", "GDScript"],
    summary:
      "A dark 3D card-table duel where your remaining lives are counted on the fingers of one hand.",
    points: [
      "Tension structure borrowed from Buckshot Roulette; the central mechanic is entirely different: a custom poker-inspired card game called The Cut",
      "Five lives represented by fingers; lose a hand of cards, lose a digit",
      "Four difficulty modes, Easy, Normal, Hard and Extreme, each with distinct opponent behavior and configuration",
      "Configurable opponent AI, dialogue system and async match flow",
      "Persistent economy/save system; Extreme mode adds its own money-based progression",
      "The 3D props (knife, opponent, the hand itself) are built procedurally: Python scripts assemble the models in Blender instead of hand-placing vertices",
      "Packaged for Windows and Android alongside the browser build; audio pooling and a complete test suite behind the scenes; dark blocky pixel-art assets organized in clearly named directories for future swapping",
    ],
    art: "countedout",
    caption: "fig. 02 · The Cut at COUNT 29: in-game capture",
    shot: { src: "/images/projects/ante-zero-gameplay.webp", alt: "ANTE ZERO in play: the card table at COUNT 29, five fingers on each side, three cards left to choose" },
    links: [{ label: "Play in browser", href: "https://toshamara.itch.io/ante-zero", kind: "play" }],
    relatedNoteIds: [],
    sections: [
      {
        heading: "The Cut",
        body: [
          "The Cut looks familiar on purpose: hands, counts and pattern bonuses speak the language of poker. Everything around the table is where it stops being familiar.",
          "Your stake in the match is physical. Five lives are represented by five fingers, and every lost hand takes one off the table with you.",
        ],
      },
      {
        heading: "Four opponents, four pressures",
        body: [
          "Easy through Extreme are not stat swaps. Each difficulty configures distinct opponent behavior, and Extreme adds its own money-based progression on top of the persistent save system.",
          "Under the table sits the engineering: configurable opponent AI, a dialogue system, async match flow, pooled audio and a complete test suite keeping the rules honest.",
        ],
      },
    ],
  },
  {
    slug: "campaignforge",
    name: "CampaignForge",
    categories: ["software"],
    meta: "C# · .NET 8 · WPF · SQLite",
    status: "Offline by design",
    stack: ["C#", ".NET 8", "WPF", "SQLite", "WAL", "FTS5", "Dapper"],
    summary:
      "An offline desktop toolkit for tabletop RPG game masters: dice math, linked lore and encounter tracking with no network in sight.",
    points: [
      "Recursive dice-expression parser: nested modifiers and keep/drop arithmetic evaluated as a proper expression tree",
      "Bidirectional entity linking: NPCs, locations and items point at each other from both ends",
      "Encounter tracker with an undo stack deep enough to trust mid-session",
      "Random table engine backed by SQLite FTS5 full-text search; WAL journal mode for safe concurrent reads",
      "Dapper for thin, explicit data access; fully offline architecture",
    ],
    art: "forge",
    caption: "fig. 03 · dice-expression evaluation, parse sketch (representation)",
    relatedNoteIds: [],
    sections: [
      {
        heading: "Dice math as a real parser",
        body: [
          "Expressions like 4d6kh3+2 are tokenized into an expression tree and evaluated recursively, which keeps nested modifiers honest instead of hard-coding special cases.",
          "Results land in the encounter tracker, where every action can be undone without corrupting state.",
        ],
      },
      {
        heading: "A database that behaves at the table",
        body: [
          "SQLite in WAL mode lets lookups happen while writes settle; FTS5 powers the random-table engine so finding “that one rumor table” is a search, not a scroll.",
          "Everything runs offline by design: no accounts, no sync, no surprises mid-session. Dapper keeps data access explicit and thin.",
        ],
      },
    ],
  },
  {
    slug: "akademskipratilac",
    name: "AkademskiPratilac",
    categories: ["android"],
    meta: "Kotlin · Jetpack Compose · Firebase · MVVM",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "MVVM"],
    summary:
      "An Android study tracker built from scratch: timer, sign-in and sync working as one foreground service.",
    points: [
      "Pomodoro timer running on a Foreground Service so sessions survive backgrounding",
      "WakeLock management to keep focus sessions honest through doze",
      "Google Sign-In wired through the Credential Manager API",
      "Firestore-backed sync under a strict MVVM split",
      "Built from scratch, including the debugging that comes with service lifecycle edge cases",
    ],
    art: "pomodoro",
    caption: "fig. 04 · focus session, foreground-service lifecycle sketch (representation)",
    relatedNoteIds: [],
    sections: [
      {
        heading: "A timer that must not die",
        body: [
          "A study timer that dies when the screen turns off is useless, so the Pomodoro engine lives in a Foreground Service with WakeLock discipline tuned against Android’s doze behavior.",
          "Sign-in goes through the Credential Manager API rather than legacy flows, and session state syncs to Firestore under MVVM.",
        ],
      },
    ],
  },
  {
    slug: "graditelj-navika",
    name: "Graditelj Navika",
    categories: ["android"],
    meta: "Kotlin · Compose · Hilt · MVI",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "Hilt", "MVI / Clean Architecture"],
    summary:
      "An Android habit builder in Kotlin and Compose, and a practical lesson in what Firestore’s cache actually does.",
    points: [
      "MVI / Clean Architecture with Hilt-managed injection across feature modules",
      "Save-button hang traced to a memory-only Firestore cache configuration: fixed at the settings level, not papered over in UI",
      "Compose recomposition debugging on the streak screens",
      "Shimmer loading states, confetti animations and Coil profile-image support",
    ],
    art: "streaks",
    caption: "fig. 05 · habit streak grid, recomposition sketch (representation)",
    links: [{ label: "Source on GitHub", href: "https://github.com/bogdanjanjic04/graditelj-navika", kind: "code" }],
    relatedNoteIds: [],
    sections: [
      {
        heading: "The hang that wasn’t in the UI",
        body: [
          "Saving a habit froze the button indefinitely. The cause was architectural: Firestore configured with a memory-only cache never resolves reads the way disk-backed persistence does, and the UI was waiting on a write path that behaved differently than assumed.",
          "The fix landed in the cache configuration itself. Debugging Compose recomposition on the streak screens came after, once saves stopped hanging.",
        ],
      },
      {
        heading: "Architecture as insurance",
        body: [
          "MVI with Clean Architecture boundaries and Hilt injection kept state transitions predictable enough to debug methodically instead of by guesswork.",
          "The polish layer: shimmer loading states, confetti when streaks land, Coil-managed profile images.",
        ],
      },
    ],
  },
  {
    slug: "passpolish",
    name: "PassPolish",
    categories: ["software"],
    meta: "Polish notation · real-time evaluation",
    stack: ["Polish notation", "Real-time scoring"],
    summary:
      "Real-time password-strength evaluation built around Polish-notation evaluation: compact, algorithmic, security-minded.",
    points: [
      "Strength rules expressed and evaluated as notation expressions rather than chained if-statements",
      "Scores re-evaluated live while typing, cheap enough to run on every keystroke",
      "A deliberate exercise in parsing and evaluation order, not presented as an industry-standard security product",
    ],
    art: "notation",
    caption: "fig. 06 · rule tokens → notation evaluation sketch (representation)",
    relatedNoteIds: [],
    sections: [
      {
        heading: "Rules as expressions, not branches",
        body: [
          "Instead of a ladder of if-statements, strength rules are expressed as notation expressions evaluated against the live input, which makes the scoring logic declarative and cheap enough to run on every keystroke.",
          "It is a compact algorithmic project: parsing, evaluation order and security-oriented thinking in one small package.",
        ],
      },
    ],
  },
  {
    slug: "screenwatcher",
    name: "ScreenWatcher",
    categories: ["android", "systems"],
    meta: "Android · MediaProjection API · Kotlin",
    status: "Open source (MIT) on GitHub",
    stack: ["Android", "MediaProjection API", "Kotlin"],
    summary:
      "Watches a screen region for pixel changes and triggers an alarm when movement is detected.",
    points: [
      "Region-based pixel-change detection built on MediaProjection’s virtual-display surface",
      "Alarm trigger when movement crosses the threshold inside the watched region",
      "Kept deliberately small: a focused systems/API experiment, published open source under MIT",
    ],
    art: "screen",
    caption: "fig. 07 · virtual display diff regions sketch (representation)",
    links: [
      { label: "Source on GitHub", href: "https://github.com/bogdanjanjic04/ScreenWatcher", kind: "code" },
    ],
    relatedNoteIds: [],
    sections: [
      {
        heading: "One API, done properly",
        body: [
          "MediaProjection grants access to the screen through a consent flow and a virtual display; ScreenWatcher samples a chosen region of that surface and raises an alarm when pixels move past the detection threshold.",
          "The project stays intentionally narrow: one API, one job, published under MIT so the implementation details are readable.",
        ],
      },
    ],
  },
  {
    slug: "kinetidebt",
    name: "KinetiDebt",
    categories: ["android"],
    meta: "Android · payments · overlays",
    stack: ["Android", "PayPal API", "Crypto verification", "SMS"],
    summary:
      "A fitness debt tracker that makes skipped workouts cost something verifiable.",
    points: [
      "PayPal and cryptocurrency payment verification for settled debts",
      "Screen-overlay consequences when a debt goes unpaid",
      "Accountability SMS sent to a contact of the user’s choosing",
    ],
    art: "debt",
    caption: "fig. 08 · debt state machine sketch (representation)",
    relatedNoteIds: [],
    sections: [
      {
        heading: "Consequences you cannot swipe away",
        body: [
          "Debts are verified through PayPal or cryptocurrency payments, so settlement is a fact rather than a promise.",
          "Unpaid debts escalate: a screen overlay keeps the consequence visible, and an accountability SMS goes to a contact the user chose themselves.",
        ],
      },
    ],
  },
  {
    slug: "headless-samp",
    name: "headless-samp",
    categories: ["systems"],
    meta: "Python · curses · RakNet · MinGW · Wine",
    status: "v0.2.0 experimental",
    stack: ["Python", "curses", "RakNet", "MinGW", "Wine"],
    summary:
      "A protocol-only SA-MP client: the RakSAMP backend becomes a stationary 0.3.7 player driven entirely from a curses terminal. No GTA process, no renderer, no game files.",
    points: [
      "Connects as a normal player slot through the SA-MP RakNet protocol, optionally requests a class and spawns, then holds stationary synchronization",
      "Color-coded chat and server messages with a monochrome fallback; plain text sends chat, / sends server commands, and a small allowlist of ! commands runs locally (players, reconnect, spawn)",
      "Full dialog handling in the terminal: single-button message-boxes auto-accept, while input, password, list, tab-list and two-button dialogs render as modals and answer through RPC_DialogResponse",
      "install.sh pins RakSAMP to one exact commit, applies a Python source transformation, aliases the Windows-era RakNet include names for case-sensitive Linux, and cross-compiles the 32-bit console backend with MinGW",
      "The patcher deliberately disables upstream flood, lag, fake-kill, forged-event and teleport commands, and fails loudly if the pinned source drifts",
      "Runs the Win32 backend under a dedicated Wine prefix on Linux, or natively on Windows through run.bat with windows-curses",
    ],
    art: "handoff",
    caption: "fig. 09 · the terminal client driving the RakSAMP backend: live capture",
    shot: { src: "/images/projects/headless-samp-tui.webp", alt: "The headless-samp terminal UI: backend ready, reconnect loop against 127.0.0.1:7777 and the keybind footer" },
    links: [{ label: "Source on GitHub", href: "https://github.com/bogdanjanjic04/headless-samp-tui", kind: "code" }],
    sections: [
      {
        heading: "No game, just the protocol",
        body: [
          "RakSAMP is old Win32 C++ tied to its SA-MP-compatible RakNet implementation. Instead of loading GTA SA, headless-samp patches that backend into a console-only client and wraps it in a Python curses interface: stationary synchronization keeps the player on the server while chat, commands and dialogs happen in the terminal.",
          "Wine still shows up on Linux, but only to initialize a dedicated prefix and run one small console executable, which is a much narrower surface than booting the actual game.",
        ],
      },
      {
        heading: "Dialogs as terminal modals",
        body: [
          "SA-MP servers drive login and interaction through dialogs, so the terminal speaks that language: one-button message-boxes auto-accept, everything else renders as a modal where 1/2 pick buttons, Tab toggles, arrows move list selections, Enter submits and Escape takes the second button. Answers go back through RPC_DialogResponse.",
          "The upstream backend ships commands nobody needs in a stationary client, so the patch removes flood, lag, fake-kill, forged-event and teleport paths outright.",
        ],
      },
      {
        heading: "Pinned, patched, honest",
        body: [
          "The installer clones exactly one RakSAMP commit and rewrites it with a Python transformer that requires every replacement to match exactly once: upstream drift breaks the build instead of the session.",
          "The README states the limits plainly: this is a nonstandard protocol client, servers can detect or reject it, and it ships no anti-detection or bypass behavior. Use it where the server owner permits it.",
        ],
      },
    ],
  },
];

export type WorkArea = {
  slug: string;
  name: string;
  intro: string;
  note: string;
  items: string[];
  categories: Category[];
};

export const AREAS: WorkArea[] = [
  {
    slug: "app-dev",
    name: "Application development",
    intro: "Desktop tools built to run fully offline.",
    note: "Desktop tools built to run fully offline.",
    items: ["C# / .NET", "WPF", "Dapper"],
    categories: ["software"],
  },
  {
    slug: "android",
    name: "Android",
    intro: "Kotlin-first, Compose-native, service-aware.",
    note: "Kotlin-first, Compose-native, service-aware.",
    items: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase", "Firestore", "Room"],
    categories: ["android"],
  },
  {
    slug: "game-dev",
    name: "Game development",
    intro: "Systems-heavy games, code-driven UI, custom logic.",
    note: "Systems-heavy games, code-driven UI, custom logic.",
    items: ["Godot", "GDScript", "Game systems", "UI", "Gameplay logic"],
    categories: ["games"],
  },
  {
    slug: "systems-linux",
    name: "Systems & Linux",
    intro: "Arch as the daily driver; the terminal is home.",
    note: "Arch as the daily driver; the terminal is home.",
    items: ["Arch Linux", "Bash", "Git", "Wine", "Networking", "System tooling"],
    categories: ["systems", "experiments"],
  },
  {
    slug: "ai-local-tooling",
    name: "AI & local tooling",
    intro: "Inference on my own hardware, templates included.",
    note: "Inference on my own hardware, templates included.",
    items: ["Ollama", "GGUF models", "Claude Code", "Local inference workflows"],
    categories: ["ai"],
  },
  {
    slug: "modding-reverse-engineering",
    name: "Modding & reverse engineering",
    intro: "Breaking things just enough to understand them.",
    note: "Breaking things just enough to understand them.",
    items: ["SMAPI", "XNB workflows", "Reflection", "Save repair", "Binary investigation"],
    categories: ["modding"],
  },
];

export type ModLink = {
  label: string;
  href: string;
};

export type ModNote = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  link?: ModLink;
};

export const MOD_NOTES: ModNote[] = [
  {
    id: "renameanimal",
    title: "RenameAnimal",
    body: "SMAPI mod for renaming animals without fighting the game’s input handling: quote-aware argument parsing so multi-word names survive intact, plus keybind configuration through GMCM.",
    tags: ["C#", "SMAPI", "GMCM"],
  },
  {
    id: "chat-commands-16",
    title: "Chat Commands, ported to Stardew Valley 1.6",
    body: "Ported Chat Commands to SDV 1.6: run console commands straight from the in-game chat box, with scrollable history, console mirroring and whisper/reply support. SMAPI removed ICommandHelper.Trigger along the way, solved by reflecting into SMAPI’s private CommandManager: the public API lost the capability, not the runtime.",
    tags: ["C#", "Reflection", "SDV 1.6"],
    link: { label: "ChatCommands on GitHub", href: "https://github.com/bogdanjanjic04/ChatCommands" },
  },
  {
    id: "serbian-pipeline",
    title: "Serbian localization pipeline",
    body: "A large Ollama-powered pipeline for localizing Stardew Valley’s JSON files into Serbian, paired with the manual grind: one mod’s 62 JSON files translated by hand into Serbian Latin.",
    tags: ["Ollama", "JSON", "Localization"],
  },
];

export type LabLink = {
  label: string;
  href: string;
};

export type LabEntry = {
  id: string;
  title: string;
  intro: string;
  items: { text: string; link?: LabLink }[];
};

export const LAB_ENTRIES: LabEntry[] = [
  {
    id: "local-llm",
    title: "Local LLM workbench",
    intro: "Running inference on my own hardware and bending it until it behaves.",
    items: [
      { text: "Ollama + GGUF model workflows" },
      { text: "Custom model templates and Modelfile overrides" },
      { text: "Jinja template debugging when templates silently mangle prompts" },
      { text: "Docker-based local inference setups" },
      { text: "Claude Code as a daily driver" },
      { text: "mmap-based binary patching experiments on model files" },
    ],
  },
  {
    id: "samp-research",
    title: "SA-MP RNG research",
    intro: "Technical research into the SA-MP server’s random number generator: analysis, tooling and disclosure support.",
    items: [
      { text: "Reverse engineering and statistical analysis of the server RNG" },
      { text: "Seed recovery tooling written in Python and C" },
      { text: "Cross-validation tooling to confirm recovered seeds against observed output" },
      { text: "Headless SA-MP client runs under Wine / proot / i686 environments" },
      { text: "Termux TUI frontend for driving the client from a phone" },
      { text: "Investigation of a bundled BASS audio library vulnerability" },
      { text: "Validation harness built for the security disclosure process" },
    ],
  },
  {
    id: "system-tools",
    title: "Small Linux systems tools",
    intro: "Three small Python tools for watching machines behave badly. Source and binaries live on GitHub.",
    items: [
      {
        text: "system-monitor: reads CPU, memory and disk metrics directly from /proc and /sys on Linux, logging structured JSON at configurable intervals",
        link: { label: "system-monitor on GitHub", href: "https://github.com/bogdanjanjic04/system-monitor" },
      },
      {
        text: "log-analyzer: parses log files, counts event frequency by type, extracts error lines and generates a structured report",
        link: { label: "log-analyzer on GitHub", href: "https://github.com/bogdanjanjic04/log-analyzer" },
      },
      {
        text: "health-checker: HTTP endpoint monitor that pings a list of URLs, records response times and status codes, keeps a history file and alerts on failures",
        link: { label: "health-checker on GitHub", href: "https://github.com/bogdanjanjic04/health-checker" },
      },
    ],
  },
  {
    id: "papers-analysis",
    title: "Papers & analysis",
    intro: "Write-ups and data work that never got a repo, kept because the thinking was the exercise.",
    items: [
      { text: "Steganography: techniques and tooling write-up" },
      { text: "Air-quality data analysis in Excel: descriptive statistics over PM2.5, PM10 and NOx measurements from Serbian monitoring stations" },
      { text: "Raspberry Pi platform overview paper: history, hardware and configurations" },
      { text: "Short video piece assembled in Premiere Pro from raw drone footage, cut and sound-passed end to end" },
    ],
  },
  {
    id: "media-lab",
    title: "Media & graphics experiments",
    intro: "Scripts that exist because the effect was funnier than the reason.",
    items: [
      { text: "Video processing pipelines and deep-fry effect scripts" },
      { text: "GIF extension experiments" },
      { text: "2D-to-3D tube rendering" },
      { text: "Pixel art and general image-processing experiments" },
    ],
  },
];

export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  dek: string;
  tags: string[];
  sections: PostSection[];
  related?: { href: string; label: string };
};

// Devlog-style write-ups grounded strictly in shipped work. Intentionally undated.
export const POSTS: Post[] = [
  {
    slug: "chat-commands-smapi-commandmanager-reflection",
    title: "Porting Chat Commands to Stardew Valley 1.6",
    dek: "When the public API loses a capability but the runtime doesn’t, reflection is the honest middle ground.",
    tags: ["SMAPI", "Reflection", "SDV 1.6"],
    related: { href: "/modding/#chat-commands-16", label: "Field note: Chat Commands port" },
    sections: [
      {
        heading: "What broke",
        paragraphs: [
          "Stardew Valley 1.6 moved modding infrastructure forward, and SMAPI removed ICommandHelper.Trigger in the process. Any mod that fired console commands programmatically lost its mechanism overnight.",
          "Chat Commands let players run console commands from the in-game chat box, with scrollable history, console mirroring and whisper/reply support. The port had to preserve all of it on the new base.",
        ],
      },
      {
        heading: "The reflection route",
        paragraphs: [
          "SMAPI’s CommandManager still exists internally; only the public helper surface changed. Reflecting into the private CommandManager restored command execution without patching SMAPI itself or shipping a forked build.",
          "It is the kind of fix worth writing down because it generalizes: before rewriting a feature, check whether the capability moved rather than disappeared.",
        ],
      },
    ],
  },
    {
    slug: "samp-server-rng-seed-recovery",
    title: "Recovering seeds from the SA-MP server RNG",
    dek: "Reverse engineering research, seed recovery tooling and a validation harness: how a disclosure gets supported by evidence.",
    tags: ["Research", "Python", "C"],
    related: { href: "/lab/#samp-research", label: "Lab: SA-MP RNG recovery tooling" },
    sections: [
      {
        heading: "The question",
        paragraphs: [
          "Is the SA-MP server’s random number generator predictable from observed output? Answering that honestly requires statistics first and claims second.",
          "The toolchain: reverse engineering and statistical analysis of the server RNG, then seed recovery tooling written twice, in Python for speed of iteration and C for precision, cross-checked against each other.",
        ],
      },
      {
        heading: "Evidence over anecdote",
        paragraphs: [
          "Recovered seeds were confirmed with cross-validation tooling against observed output. The client ran headless under Wine, proot and i686 environments, driven by a Termux TUI frontend from a phone.",
          "Investigating a bundled BASS audio library vulnerability fed the same discipline: findings went through a validation harness built specifically to support the security disclosure process. Research and validation, stated exactly as far as the evidence goes.",
        ],
      },
    ],
  },
  ];

export type Faq = {
  question: string;
  answer: string[];
};

export const FAQS: Faq[] = [
  {
    question: "Who is behind Ember Moose?",
    answer: [
      "Bogdan Janjić. The About page carries the full background for anyone who wants it; this site itself is the short version.",
    ],
  },
  {
    question: "Are the games actually playable?",
    answer: [
      "ANTE ZERO is playable in the browser on itch.io right now. Pillars of Control is in active development. Everything else documented here varies between shipped tools, open-source repositories and ongoing builds.",
    ],
  },
  {
    question: "Are you available for hire?",
    answer: [
      "Yes: pursuing software development work including internships and more advanced development roles. The projects on this site are the portfolio; reach out through any channel on the contact page.",
    ],
  },
  {
    question: "Where do I find your mods?",
    answer: [
      "Mod sources live on GitHub: Chat Commands, alongside the other repositories. Releases and downloads are published through GitHub as well.",
    ],
  },
  {
    question: "What environment do you work in?",
    answer: [
      "Arch Linux has been the daily driver operating system for about five years. Local LLM work runs through Ollama on personal hardware, desktop tooling is C#/.NET and WPF, mobile work is Kotlin and Jetpack Compose, and games are built in Godot.",
    ],
  },
];
