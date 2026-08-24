const MONO = "var(--font-mono)";
const INK = "var(--color-ink)";
const MUTED = "var(--color-muted)";
const FAINT = "var(--color-faint)";
const RULE = "var(--color-rule)";
const RULE_S = "var(--color-rule-strong)";
const ACCENT = "var(--color-accent)";
const ACCENT_D = "var(--color-accent-deep)";

function Pillars() {
  const spots: [number, number, string][] = [
    [70, 70, "FARM"],
    [200, 55, "MILL"],
    [322, 78, "STORE"],
    [88, 180, "HOME"],
    [212, 168, "OFFICE"],
    [318, 190, "PLAZA"],
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Schematic map of the game world with six locations and four competing roles">
      <rect x="24" y="24" width="352" height="196" fill="none" stroke={RULE_S} strokeWidth="1.5" />
      <g stroke={RULE} strokeWidth="1">
        <path d="M136 24V220" strokeDasharray="2 6" />
        <path d="M268 24V220" strokeDasharray="2 6" />
        <path d="M24 122H376" strokeDasharray="2 6" />
      </g>
      {spots.map(([x, y, label]) => (
        <g key={label}>
          <rect x={x - 7} y={y - 7} width="14" height="14" fill="var(--color-raised)" stroke={INK} strokeWidth="1.25" />
          <text x={x + 12} y={y + 4} fill={MUTED} fontSize="10" fontFamily={MONO} letterSpacing="1">
            {label}
          </text>
        </g>
      ))}
      <path d="M77 77C120 60 170 52 193 62" fill="none" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
      <path d="M207 168C250 178 290 186 311 190" fill="none" stroke={ACCENT} strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
      {[
        ["F", 40, 40],
        ["B", 360, 40],
        ["S", 40, 204],
        ["R", 360, 204],
      ].map(([ch, x, y]) => (
        <g key={ch as string}>
          <rect x={(x as number) - 11} y={(y as number) - 11} width="22" height="22" fill="var(--color-accent-ghost)" stroke={ACCENT} strokeWidth="1" />
          <text x={x} y={(y as number) + 4.5} textAnchor="middle" fill={ACCENT} fontSize="11" fontWeight="600" fontFamily={MONO}>
            {ch}
          </text>
        </g>
      ))}
    </svg>
  );
}

function CountedOut() {
  // pixel heart, one cell already lost
  const cells: [number, number, boolean][] = [
    [0, 1, true], [1, 0, true], [2, 0, true], [3, 1, true],
    [0, 2, true], [1, 1, true], [2, 1, true], [3, 2, true],
    [0, 3, true], [1, 2, true], [2, 2, true], [3, 3, true],
    [1, 3, true], [2, 3, true], [1, 4, true], [2, 4, true],
  ];
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Pixel heart, five tally marks and a fan of cards from the card game The Cut">
      <g transform="translate(46 66)">
        {cells.map(([cx, cy], i) =>
          i === 5 ? (
            <rect key={i} x={cx * 18} y={cy * 18} width="16" height="16" fill="none" stroke={FAINT} strokeWidth="1" strokeDasharray="2 2" />
          ) : (
            <rect key={i} x={cx * 18} y={cy * 18} width="16" height="16" fill={ACCENT_D} stroke={ACCENT} strokeWidth="1" />
          ),
        )}
      </g>
      <g transform="translate(160 84)">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={i * 30}
            y={i === 3 ? 14 : 0}
            width="24"
            height="64"
            rx="2"
            fill="var(--color-raised)"
            stroke={i === 3 ? ACCENT : RULE_S}
            strokeWidth="1.25"
            transform={`rotate(${(i - 1.5) * 9} ${12 + i * 30} 32)`}
          />
        ))}
        <text x="36" y="100" textAnchor="middle" fill={ACCENT} fontSize="11" fontFamily={MONO} letterSpacing="2">
          THE CUT
        </text>
      </g>
      <g transform="translate(300 92)">
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={i * 16} y1="0" x2={i * 16} y2="56" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity={i > 2 ? 0.35 : 1} />
        ))}
        <line x1="-6" y1="28" x2="54" y2="28" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        <text x="20" y="82" textAnchor="middle" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          LIVES 4/5
        </text>
      </g>
    </svg>
  );
}

function Forge() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Dice expression being parsed into an evaluation tree and a result">
      <text x="34" y="58" fill={INK} fontSize="21" fontWeight="500" fontFamily={MONO} letterSpacing="1">
        4d6<tspan fill={ACCENT}>kh3</tspan>+2
      </text>
      <g stroke={RULE_S} strokeWidth="1" fill="none">
        <path d="M34 74v18h56v-14" />
        <path d="M90 92v14" />
        <circle cx="34" cy="96" r="3" fill="var(--color-raised)" />
        <circle cx="90" cy="110" r="3" fill="var(--color-raised)" />
      </g>
      <text x="48" y="112" fill={FAINT} fontSize="10" fontFamily={MONO}>
        keep highest 3 of 4d6
      </text>
      <g transform="translate(240 44)">
        <rect width="126" height="44" fill="none" stroke={ACCENT} strokeWidth="1.25" />
        <text x="63" y="29" textAnchor="middle" fill={ACCENT} fontSize="19" fontWeight="500" fontFamily={MONO}>
          = 12
        </text>
        <text x="63" y="62" textAnchor="middle" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          EVAL · UNDO-STACKED
        </text>
      </g>
      <g stroke={RULE} strokeWidth="1">
        {[150, 172, 194, 216].map((y) => (
          <g key={y}>
            <line x1="34" y1={y} x2="230" y2={y} />
            <circle cx="238" cy={y} r="2.5" fill="var(--color-raised)" />
            <line x1="252" y1={y} x2="366" y2={y} strokeDasharray="1 5" />
          </g>
        ))}
      </g>
      <rect x="34" y="228" width="332" height="1.5" fill={RULE} />
      <text x="34" y="222" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
        SQLITE · WAL · FTS5
      </text>
    </svg>
  );
}

function Pomodoro() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Pomodoro ring at 68 percent with foreground service lifecycle markers">
      <g transform="translate(96 130)">
        <circle r="72" fill="none" stroke={RULE} strokeWidth="6" />
        <circle
          r="72"
          fill="none"
          stroke={ACCENT}
          strokeWidth="6"
          strokeDasharray="308 452"
          strokeLinecap="round"
          transform="rotate(-90)"
        />
        {[0, 90, 180, 270].map((deg) => (
          <line key={deg} x1="80" y1="0" x2="86" y2="0" stroke={FAINT} strokeWidth="1.5" transform={`rotate(${deg})`} />
        ))}
        <text textAnchor="middle" y="6" fill={INK} fontSize="20" fontWeight="500" fontFamily={MONO}>
          17:04
        </text>
        <text textAnchor="middle" y="26" fill={FAINT} fontSize="9.5" fontFamily={MONO} letterSpacing="1.5">
          FOCUS · FG SERVICE
        </text>
      </g>
      <g transform="translate(262 76)">
        {[
          ["onStartCommand", 0],
          ["wakelock.acquire", 26],
          ["tick → state", 52],
          ["onDestroy", 78],
        ].map(([label, dy]) => (
          <g key={label as string} transform={`translate(0 ${dy})`}>
            <rect width="104" height="18" fill="var(--color-raised)" stroke={RULE_S} strokeWidth="1" />
            <text x="8" y="12.5" fill={MUTED} fontSize="9.5" fontFamily={MONO}>
              {label}
            </text>
          </g>
        ))}
        <path d="M52 94v14" stroke={ACCENT} strokeWidth="1.25" strokeDasharray="2 3" />
        <text x="0" y="126" fill={ACCENT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          CRED MANAGER · SIGNED IN ✓
        </text>
      </g>
    </svg>
  );
}

function Streaks() {
  const filled = (r: number, c: number) => (r * 7 + c) % 5 !== 3;
  const hot = (r: number, c: number) => (r * 7 + c) % 9 === 2;
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Habit streak grid with shimmer loading band and confetti dots">
      {[
        [70, 40],
        [128, 26],
        [176, 52],
        [232, 34],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={ACCENT} opacity="0.75" />
      ))}
      <g transform="translate(64 78)">
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 7 }, (_, c) => (
            <rect
              key={`${r}-${c}`}
              x={c * 42}
              y={r * 30}
              width="30"
              height="18"
              rx="2"
              fill={filled(r, c) ? (hot(r, c) ? ACCENT : ACCENT_D) : "transparent"}
              stroke={filled(r, c) ? ACCENT : RULE_S}
              strokeWidth="1"
              opacity={filled(r, c) ? (hot(r, c) ? 1 : 0.75) : 1}
            />
          )),
        )}
      </g>
      <g transform="translate(64 236)">
        <rect width="274" height="8" fill="var(--color-lifted)" />
        <polygon points="0,8 16,0 34,0 10,8" fill="var(--color-paper)" opacity="0.65" />
      </g>
      <text x="352" y="244" textAnchor="end" fill={FAINT} fontSize="10" fontFamily={MONO}>
        MVI
      </text>
    </svg>
  );
}

function Notation() {
  const segs = [true, true, true, false, false, false];
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Password characters flowing into notation tokens and a strength meter">
      <g transform="translate(40 44)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x={i * 26} width="16" height="22" fill={i < 6 ? "var(--color-lifted)" : "transparent"} stroke={RULE_S} strokeWidth="1" />
        ))}
        <text x="13" y="15" textAnchor="middle" fill={INK} fontSize="11" fontFamily={MONO}>
          •
        </text>
        <text x="91" y="15" textAnchor="middle" fill={FAINT} fontSize="11" fontFamily={MONO}>
          ?
        </text>
        <text x="117" y="15" textAnchor="middle" fill={FAINT} fontSize="11" fontFamily={MONO}>
          ?
        </text>
        <text x="216" y="15" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          LIVE INPUT
        </text>
      </g>
      <path d="M120 74v22" stroke={ACCENT} strokeWidth="1.25" strokeDasharray="3 3" />
      <g transform="translate(40 104)">
        {["+len", "+set", "-seq", "!dict"].map((t, i) => (
          <g key={t} transform={`translate(${i * 84} 0)`}>
            <rect width="70" height="26" fill="none" stroke={i === 3 ? ACCENT : RULE_S} strokeWidth="1.25" />
            <text x="35" y="17" textAnchor="middle" fill={i === 3 ? ACCENT : MUTED} fontSize="11" fontFamily={MONO}>
              {t}
            </text>
          </g>
        ))}
        <text x="0" y="46" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          EVALUATED PREFIX → SCORE, EVERY KEYSTROKE
        </text>
      </g>
      <g transform="translate(40 182)">
        {segs.map((on, i) => (
          <rect key={i} x={i * 50} width="38" height="14" fill={on ? ACCENT : "transparent"} stroke={on ? ACCENT : RULE_S} strokeWidth="1" />
        ))}
        <text x="310" y="12" fill={MUTED} fontSize="11" fontFamily={MONO}>
          3/6
        </text>
      </g>
    </svg>
  );
}

function Screen() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Two virtual display frames with a diff region highlighted between them">
      <defs>
        <pattern id="sw-hatch" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="7" stroke={ACCENT} strokeWidth="1.5" opacity="0.55" />
        </pattern>
      </defs>
      <rect x="42" y="46" width="188" height="130" fill="none" stroke={RULE_S} strokeWidth="1.25" />
      <text x="42" y="38" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
        FRAME N
      </text>
      <rect x="118" y="96" width="188" height="130" fill="var(--color-raised)" stroke={ACCENT} strokeWidth="1.25" />
      <text x="306" y="88" textAnchor="end" fill={ACCENT} fontSize="10" fontFamily={MONO} letterSpacing="1">
        FRAME N+1
      </text>
      <rect x="150" y="118" width="86" height="52" fill="url(#sw-hatch)" stroke={ACCENT} strokeWidth="1" />
      <g stroke={RULE} strokeWidth="1">
        <line x1="58" y1="70" x2="140" y2="70" />
        <line x1="58" y1="88" x2="118" y2="88" />
        <line x1="134" y1="164" x2="210" y2="164" strokeDasharray="1 5" />
        <line x1="134" y1="184" x2="188" y2="184" strokeDasharray="1 5" />
      </g>
      <text x="118" y="248" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
        MEDIAProjection · VIRTUAL DISPLAY · DIFF
      </text>
    </svg>
  );
}

function Debt() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Debt gauge, warning overlay stripes and an accountability message bubble">
      <defs>
        <pattern id="kd-stripes" width="12" height="12" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill="var(--color-accent-ghost)" />
          <line x1="0" y1="0" x2="0" y2="12" stroke={ACCENT_D} strokeWidth="5" />
        </pattern>
      </defs>
      <text x="40" y="52" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
        OUTSTANDING
      </text>
      <g transform="translate(40 62)">
        <rect width="240" height="14" fill="none" stroke={RULE_S} strokeWidth="1" />
        <rect width="156" height="14" fill={ACCENT_D} />
        {[60, 120, 180].map((x) => (
          <line key={x} x1={x} y1="-4" x2={x} y2="18" stroke={RULE} strokeWidth="1" />
        ))}
        <text x="252" y="12" fill={ACCENT} fontSize="12" fontFamily={MONO}>
          2 sessions
        </text>
      </g>
      <rect x="40" y="106" width="150" height="58" fill="url(#kd-stripes)" stroke={ACCENT} strokeWidth="1" />
      <text x="46" y="98" fill={ACCENT} fontSize="10" fontFamily={MONO} letterSpacing="1">
        OVERLAY CONSEQUENCE
      </text>
      <g transform="translate(226 108)">
        <rect width="132" height="54" rx="8" fill="none" stroke={RULE_S} strokeWidth="1.25" />
        <path d="M18 54l6 12 8-12" fill="none" stroke={RULE_S} strokeWidth="1.25" />
        {[26, 46, 66].map((x) => (
          <circle key={x} cx={x} cy="27" r="3" fill={MUTED} />
        ))}
        <text x="0" y="84" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          SMS SENT
        </text>
      </g>
      <g transform="translate(40 208)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 64} 0)`}>
            <circle cx="12" cy="12" r="11" fill="none" stroke={RULE_S} strokeWidth="1.25" />
            <text x="12" y="16" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily={MONO}>
              {["₽", "$", "Ξ"][i]}
            </text>
          </g>
        ))}
        <text x="360" y="16" textAnchor="end" fill={FAINT} fontSize="10" fontFamily={MONO} letterSpacing="1">
          VERIFY · PAYPAL / CRYPTO
        </text>
      </g>
    </svg>
  );
}

function Handoff() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Schematic of the terminal client: the RakSAMP backend owning the RakNet connection while the curses TUI renders chat, dialogs and commands">
      <rect x="40" y="46" width="140" height="52" fill="none" stroke={RULE_S} strokeWidth="1.25" />
      <text x="110" y="68" textAnchor="middle" fill={MUTED} fontSize="10.5" fontFamily={MONO}>
        RakSAMP backend
      </text>
      <text x="110" y="84" textAnchor="middle" fill={FAINT} fontSize="9" fontFamily={MONO}>
        stationary player · 0.3.7
      </text>

      <path d="M180 72H246" stroke={INK} strokeWidth="1.25" />
      <path d="M246 68l8 4-8 4" fill="none" stroke={INK} strokeWidth="1.25" />
      <path d="M246 76l8-4-8 4" fill="none" stroke={INK} strokeWidth="1.25" transform="translate(-8 0)" />
      <text x="213" y="62" textAnchor="middle" fill={FAINT} fontSize="9" fontFamily={MONO}>
        RakNet UDP
      </text>
      <rect x="254" y="46" width="106" height="52" fill="none" stroke={RULE_S} strokeWidth="1.25" />
      <text x="307" y="76" textAnchor="middle" fill={MUTED} fontSize="10.5" fontFamily={MONO}>
        SA-MP server
      </text>

      <path d="M110 98v34" stroke={ACCENT} strokeWidth="1.25" strokeDasharray="3 3" />
      <text x="122" y="120" fill={ACCENT} fontSize="9.5" fontFamily={MONO}>
        stdio bridge
      </text>
      <rect x="40" y="132" width="320" height="76" fill="var(--color-accent-ghost)" stroke={ACCENT} strokeWidth="1.25" />
      <text x="56" y="156" fill={ACCENT} fontSize="10.5" fontFamily={MONO}>
        curses TUI
      </text>
      <text x="56" y="174" fill={MUTED} fontSize="9.5" fontFamily={MONO}>
        chat · /commands · !locals · dialogs as modals
      </text>
      <text x="56" y="192" fill={FAINT} fontSize="9" fontFamily={MONO}>
        F2 players · F5 reconnect · F8 auto-OK · PgUp/PgDn scroll
      </text>

      <text x="40" y="236" fill={FAINT} fontSize="9.5" fontFamily={MONO} letterSpacing="1">
        NO GTA PROCESS · NO RENDERER · PATCHED FROM ONE PINNED COMMIT
      </text>
    </svg>
  )

}

export default function ProjectArt({ variant }: { variant: string }) {
  switch (variant) {
    case "pillars":
      return <Pillars />;
    case "countedout":
      return <CountedOut />;
    case "forge":
      return <Forge />;
    case "pomodoro":
      return <Pomodoro />;
    case "streaks":
      return <Streaks />;
    case "notation":
      return <Notation />;
    case "screen":
      return <Screen />;
    case "handoff":
      return <Handoff />;
    default:
      return <Debt />;
  }
}
