import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RotateCcw, Keyboard as KeyboardIcon, CheckCircle2, AlertTriangle, Mouse, MousePointerClick } from "lucide-react";
import SEO from "@/components/SEO";
import { cn } from "@/lib/utils";

type KeyDef = { code: string; label: string; sub?: string; w?: number };
type Region = "abnt2" | "ansi";
type OS = "win" | "mac";

const U = 46; // largura base de 1 unidade (px)

const fnRow = (): KeyDef[][] => [
  [{ code: "Escape", label: "Esc" }],
  [
    { code: "F1", label: "F1" }, { code: "F2", label: "F2" }, { code: "F3", label: "F3" }, { code: "F4", label: "F4" },
  ],
  [
    { code: "F5", label: "F5" }, { code: "F6", label: "F6" }, { code: "F7", label: "F7" }, { code: "F8", label: "F8" },
  ],
  [
    { code: "F9", label: "F9" }, { code: "F10", label: "F10" }, { code: "F11", label: "F11" }, { code: "F12", label: "F12" },
  ],
];

function buildMain(region: Region, os: OS): KeyDef[][] {
  const abnt = region === "abnt2";

  const row1: KeyDef[] = [
    abnt ? { code: "Quote", label: "\"", sub: "'" } : { code: "Backquote", label: "~", sub: "`" },
    { code: "Digit1", label: "1", sub: "!" },
    { code: "Digit2", label: "2", sub: abnt ? "@" : "@" },
    { code: "Digit3", label: "3", sub: "#" },
    { code: "Digit4", label: "4", sub: "$" },
    { code: "Digit5", label: "5", sub: "%" },
    { code: "Digit6", label: "6", sub: abnt ? "¨" : "^" },
    { code: "Digit7", label: "7", sub: "&" },
    { code: "Digit8", label: "8", sub: "*" },
    { code: "Digit9", label: "9", sub: "(" },
    { code: "Digit0", label: "0", sub: ")" },
    { code: "Minus", label: "-", sub: "_" },
    { code: "Equal", label: "=", sub: "+" },
    { code: "Backspace", label: os === "mac" ? "⌫" : "Backspace", w: 2 },
  ];

  const letters1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2: KeyDef[] = [
    { code: "Tab", label: "Tab", w: 1.5 },
    ...letters1.map((l) => ({ code: `Key${l}`, label: l })),
    abnt
      ? { code: "BracketLeft", label: "´", sub: "`" }
      : { code: "BracketLeft", label: "[", sub: "{" },
    abnt
      ? { code: "BracketRight", label: "[", sub: "{" }
      : { code: "BracketRight", label: "]", sub: "}" },
    abnt
      ? { code: "Backslash", label: "]", sub: "}", w: 1.5 }
      : { code: "Backslash", label: "\\", sub: "|", w: 1.5 },
  ];

  const letters2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3: KeyDef[] = [
    { code: "CapsLock", label: "Caps Lock", w: 1.75 },
    ...letters2.map((l) => ({ code: `Key${l}`, label: l })),
    abnt ? { code: "Semicolon", label: "Ç" } : { code: "Semicolon", label: ";", sub: ":" },
    abnt ? { code: "Backquote", label: "~", sub: "^" } : { code: "Quote", label: "'", sub: "\"" },
    { code: "Enter", label: os === "mac" ? "return" : "Enter", w: 2.25 },
  ];

  const letters3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const row4: KeyDef[] = [
    { code: "ShiftLeft", label: "Shift", w: abnt ? 1.25 : 2.25 },
    ...(abnt ? [{ code: "IntlBackslash", label: "\\", sub: "|" } as KeyDef] : []),
    ...letters3.map((l) => ({ code: `Key${l}`, label: l })),
    { code: "Comma", label: ",", sub: "<" },
    { code: "Period", label: ".", sub: ">" },
    { code: "Slash", label: ";", sub: ":" },
    ...(abnt ? [{ code: "IntlRo", label: "/", sub: "?" } as KeyDef] : []),
    { code: "ShiftRight", label: "Shift", w: abnt ? 1.75 : 2.75 },
  ];
  if (!abnt) {
    // no ANSI a tecla Slash é / ?
    const s = row4.find((k) => k.code === "Slash");
    if (s) { s.label = "/"; s.sub = "?"; }
  }

  const row5: KeyDef[] =
    os === "mac"
      ? [
          { code: "ControlLeft", label: "control", w: 1.25 },
          { code: "AltLeft", label: "option", w: 1.25 },
          { code: "MetaLeft", label: "⌘ command", w: 1.4 },
          { code: "Space", label: "", w: 6.2 },
          { code: "MetaRight", label: "⌘ command", w: 1.4 },
          { code: "AltRight", label: "option", w: 1.25 },
          { code: "ControlRight", label: "control", w: 1.25 },
        ]
      : [
          { code: "ControlLeft", label: "Ctrl", w: 1.25 },
          { code: "MetaLeft", label: "Win", w: 1.25 },
          { code: "AltLeft", label: "Alt", w: 1.25 },
          { code: "Space", label: "", w: 6.25 },
          { code: "AltRight", label: abnt ? "Alt Gr" : "Alt", w: 1.25 },
          { code: "MetaRight", label: "Win", w: 1.25 },
          { code: "ContextMenu", label: "Menu", w: 1.25 },
          { code: "ControlRight", label: "Ctrl", w: 1.25 },
        ];

  return [row1, row2, row3, row4, row5];
}

function buildNav(os: OS): KeyDef[][] {
  return [
    [
      { code: "PrintScreen", label: os === "mac" ? "F13" : "PrtSc" },
      { code: "ScrollLock", label: "Scroll Lock" },
      { code: "Pause", label: "Pause" },
    ],
    [
      { code: "Insert", label: "Insert" },
      { code: "Home", label: "Home" },
      { code: "PageUp", label: "Page Up" },
    ],
    [
      { code: "Delete", label: "Delete" },
      { code: "End", label: "End" },
      { code: "PageDown", label: "Page Down" },
    ],
  ];
}

const arrows: KeyDef[][] = [
  [{ code: "ArrowUp", label: "↑" }],
  [
    { code: "ArrowLeft", label: "←" },
    { code: "ArrowDown", label: "↓" },
    { code: "ArrowRight", label: "→" },
  ],
];

const numpad: KeyDef[][] = [
  [
    { code: "NumLock", label: "Num Lock" },
    { code: "NumpadDivide", label: "/" },
    { code: "NumpadMultiply", label: "*" },
    { code: "NumpadSubtract", label: "-" },
  ],
  [
    { code: "Numpad7", label: "7" },
    { code: "Numpad8", label: "8" },
    { code: "Numpad9", label: "9" },
    { code: "NumpadAdd", label: "+" },
  ],
  [
    { code: "Numpad4", label: "4" },
    { code: "Numpad5", label: "5" },
    { code: "Numpad6", label: "6" },
    { code: "NumpadComma", label: "," },
  ],
  [
    { code: "Numpad1", label: "1" },
    { code: "Numpad2", label: "2" },
    { code: "Numpad3", label: "3" },
    { code: "NumpadEnter", label: "Enter" },
  ],
  [
    { code: "Numpad0", label: "0", w: 2 },
    { code: "NumpadDecimal", label: "." },
  ],
];

const media: KeyDef[] = [
  { code: "AudioVolumeMute", label: "Mudo", w: 1.6 },
  { code: "AudioVolumeDown", label: "Vol -", w: 1.6 },
  { code: "AudioVolumeUp", label: "Vol +", w: 1.6 },
  { code: "MediaTrackPrevious", label: "⏮", w: 1.6 },
  { code: "MediaPlayPause", label: "⏯", w: 1.6 },
  { code: "MediaTrackNext", label: "⏭", w: 1.6 },
];

const TesteTeclado = () => {
  const [region, setRegion] = useState<Region>("abnt2");
  const [os, setOS] = useState<OS>("win");
  const [includeMedia, setIncludeMedia] = useState(false);
  const [pressed, setPressed] = useState<Set<string>>(new Set());
  const [tested, setTested] = useState<Set<string>>(new Set());
  const [locks, setLocks] = useState({ caps: false, num: false, scroll: false });
  const [mousePressed, setMousePressed] = useState<Set<number>>(new Set());
  const [mouseTested, setMouseTested] = useState<Set<number>>(new Set());
  const [mouseCount, setMouseCount] = useState(0);
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  const mainRows = useMemo(() => buildMain(region, os), [region, os]);
  const navRows = useMemo(() => buildNav(os), [os]);
  const fn = useMemo(() => fnRow(), []);

  const allCodes = useMemo(() => {
    const codes = new Set<string>();
    [...fn, ...mainRows, ...navRows, ...arrows, ...numpad].flat().forEach((k) => codes.add(k.code));
    if (includeMedia) media.forEach((k) => codes.add(k.code));
    return codes;
  }, [fn, mainRows, navRows, includeMedia]);

  const reset = useCallback(() => {
    setPressed(new Set());
    setTested(new Set());
    setMousePressed(new Set());
    setMouseTested(new Set());
    setMouseCount(0);
    setCount(0);
    setLog([]);
  }, []);

  const onMouseBtnDown = useCallback((btn: number) => {
    setMousePressed((p) => new Set(p).add(btn));
    setMouseTested((t) => new Set(t).add(btn));
    setMouseCount((c) => c + 1);
    setLog((l) => [...l.slice(-199), btn === 0 ? "[Clique Esquerdo]" : "[Clique Direito]"]);
  }, []);

  const onMouseBtnUp = useCallback((btn: number) => {
    setMousePressed((p) => {
      const n = new Set(p);
      n.delete(btn);
      return n;
    });
  }, []);

  useEffect(() => {
    reset();
  }, [region, os, includeMedia, reset]);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      e.preventDefault();
      setLocks({
        caps: e.getModifierState("CapsLock"),
        num: e.getModifierState("NumLock"),
        scroll: e.getModifierState("ScrollLock"),
      });
      setPressed((p) => new Set(p).add(e.code));
      setTested((t) => new Set(t).add(e.code));
      if (!e.repeat) {
        setCount((c) => c + 1);
        setLog((l) => [...l.slice(-199), e.key === " " ? "Space" : e.key.length === 1 ? e.key : e.key]);
      }
    };
    const onUp = (e: KeyboardEvent) => {
      e.preventDefault();
      setPressed((p) => {
        const n = new Set(p);
        n.delete(e.code);
        return n;
      });
    };
    const onBlur = () => setPressed(new Set());
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const testedInLayout = [...tested].filter((c) => allCodes.has(c)).length;
  const total = allCodes.size;
  const progress = total ? Math.round((testedInLayout / total) * 100) : 0;
  const untested = [...allCodes].filter((c) => !tested.has(c));

  const Key = ({ k }: { k: KeyDef }) => {
    const isPressed = pressed.has(k.code);
    const isTested = tested.has(k.code);
    const lockOn =
      (k.code === "CapsLock" && locks.caps) ||
      (k.code === "NumLock" && locks.num) ||
      (k.code === "ScrollLock" && locks.scroll);
    return (
      <div
        style={{ width: (k.w ?? 1) * U }}
        className={cn(
          "relative h-[46px] shrink-0 rounded-lg border flex flex-col items-center justify-center select-none transition-all duration-75",
          "text-[11px] font-medium leading-none px-1 text-center",
          isPressed
            ? "border-[#FBC523] bg-[#FBC523] text-[#0A0A0A] scale-95 shadow-[0_0_18px_rgba(251,197,35,0.55)]"
            : isTested
              ? "border-[#FBC523]/50 bg-[#FBC523]/20 text-[#FBC523]"
              : "border-white/10 bg-white/[0.04] text-white/55",
        )}
      >
        {k.sub && <span className="text-[9px] opacity-70">{k.sub}</span>}
        <span className={cn(k.label.length > 6 && "text-[9px]")}>{k.label}</span>
        {lockOn && <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#FBC523] shadow-[0_0_8px_#FBC523]" />}
      </div>
    );
  };

  const Row = ({ keys, className }: { keys: KeyDef[]; className?: string }) => (
    <div className={cn("flex gap-1.5", className)}>
      {keys.map((k) => (
        <Key key={k.code} k={k} />
      ))}
    </div>
  );

  const modeBtn = (active: boolean) =>
    cn(
      "px-4 py-2 rounded-full text-xs font-semibold transition-colors border",
      active
        ? "bg-[#FBC523] text-[#0A0A0A] border-[#FBC523]"
        : "bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/10",
    );

  return (
    <>
      <SEO
        title="Teste seu Teclado - Keyboard Tester"
        description="Teste online e gratuito do seu teclado: layouts ABNT2 e ANSI, Windows e macOS, teclado numérico, setas, Caps/Num/Scroll Lock, progresso e relatório de teclas que não respondem."
        url="/teste-seu-teclado"
      />
      <main className="pt-32 pb-20">
        <section className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent-foreground bg-accent px-3 py-1 rounded-full">
              Suporte
            </span>
            <h1 className="mt-6 font-display text-4xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Teste seu <span className="italic text-muted-foreground">Teclado</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Pressione cada tecla do seu teclado. As teclas testadas ficam destacadas e o relatório mostra
              quais não responderam.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-[#0A0A0A] border border-white/10 p-5 md:p-8 shadow-elevate">
            {/* Controles */}
            <div className="flex flex-wrap items-center gap-6 justify-between">
              <div className="flex flex-wrap gap-2">
                <button className={modeBtn(region === "abnt2")} onClick={() => setRegion("abnt2")}>
                  ABNT2 (Brasil)
                </button>
                <button className={modeBtn(region === "ansi")} onClick={() => setRegion("ansi")}>
                  English ANSI (US)
                </button>
                <span className="w-px bg-white/10 mx-1" />
                <button className={modeBtn(os === "win")} onClick={() => setOS("win")}>
                  Windows
                </button>
                <button className={modeBtn(os === "mac")} onClick={() => setOS("mac")}>
                  macOS (Apple)
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className={modeBtn(includeMedia)} onClick={() => setIncludeMedia((v) => !v)}>
                  Teclas multimídia
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-[#0A0A0A] hover:bg-[#FBC523] transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reiniciar teste
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { label: "Teclas testadas", value: `${testedInLayout}/${total}` },
                { label: "Pressionamentos", value: count },
                { label: "Cliques", value: mouseCount },
                { label: "Não respondidas", value: untested.length },
                { label: "Progresso", value: `${progress}%` },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[10px] uppercase tracking-wider text-white/45">{s.label}</div>
                  <div className="mt-1 font-display text-xl font-bold text-[#FBC523]">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#FBC523] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Locks */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { label: "Caps Lock", on: locks.caps },
                { label: "Num Lock", on: locks.num },
                { label: "Scroll Lock", on: locks.scroll },
              ].map((l) => (
                <span
                  key={l.label}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold border",
                    l.on
                      ? "border-[#FBC523] bg-[#FBC523]/15 text-[#FBC523]"
                      : "border-white/10 bg-white/[0.03] text-white/45",
                  )}
                >
                  <span className={cn("h-2 w-2 rounded-full", l.on ? "bg-[#FBC523]" : "bg-white/25")} />
                  {l.label} {l.on ? "ON" : "OFF"}
                </span>
              ))}
            </div>

            {/* Touchpad (botões esquerdo/direito) */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider mb-3">
                <Mouse className="h-4 w-4 text-[#FBC523]" /> Touchpad — botões esquerdo e direito
              </div>
              <div
                className="grid grid-cols-2 gap-1.5 select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                {[
                  { btn: 0, label: "Botão Esquerdo" },
                  { btn: 2, label: "Botão Direito" },
                ].map(({ btn, label }) => {
                  const isPressed = mousePressed.has(btn);
                  const isTested = mouseTested.has(btn);
                  return (
                    <button
                      key={btn}
                      type="button"
                      onMouseDown={(e) => e.button === btn && onMouseBtnDown(btn)}
                      onMouseUp={(e) => e.button === btn && onMouseBtnUp(btn)}
                      onMouseLeave={() => onMouseBtnUp(btn)}
                      onContextMenu={(e) => e.preventDefault()}
                      className={cn(
                        "h-24 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-75",
                        "text-xs font-semibold",
                        isPressed
                          ? "border-[#FBC523] bg-[#FBC523] text-[#0A0A0A] scale-[0.98] shadow-[0_0_18px_rgba(251,197,35,0.55)]"
                          : isTested
                            ? "border-[#FBC523]/50 bg-[#FBC523]/20 text-[#FBC523]"
                            : "border-white/10 bg-white/[0.04] text-white/55",
                      )}
                    >
                      <MousePointerClick className="h-5 w-5" />
                      {label}
                      <span className="text-[10px] font-normal opacity-70">
                        {isTested ? "Testado ✓" : "Clique aqui com o " + label.toLowerCase()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Teclado */}
            <div className="mt-8 overflow-x-auto pb-2">
              <div className="min-w-[1080px] space-y-4">
                {/* Linha de função + cluster superior */}
                <div className="flex gap-1.5 items-start">
                  <div className="flex gap-5">
                    {fn.map((group, i) => (
                      <Row key={i} keys={group} />
                    ))}
                  </div>
                  <div className="ml-5">
                    <Row keys={navRows[0]} />
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="space-y-1.5">
                    {mainRows.map((row, i) => (
                      <Row key={i} keys={row} />
                    ))}
                  </div>

                  {/* Navegação + setas */}
                  <div className="space-y-1.5">
                    <Row keys={navRows[1]} />
                    <Row keys={navRows[2]} />
                    <div className="pt-[52px] flex flex-col items-center gap-1.5">
                      <Row keys={arrows[0]} />
                      <Row keys={arrows[1]} />
                    </div>
                  </div>

                  {/* Numérico */}
                  <div className="space-y-1.5">
                    {numpad.map((row, i) => (
                      <Row key={i} keys={row} />
                    ))}
                  </div>
                </div>

                {includeMedia && (
                  <div className="pt-2">
                    <div className="text-[10px] uppercase tracking-wider text-white/45 mb-2">Multimídia</div>
                    <Row keys={media} />
                  </div>
                )}
              </div>
            </div>

            {/* Registro + relatório */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <KeyboardIcon className="h-4 w-4 text-[#FBC523]" /> Teclas digitadas
                </div>
                <div
                  ref={logRef}
                  className="mt-3 h-32 overflow-y-auto font-mono text-sm text-white/80 break-all leading-relaxed"
                >
                  {log.length ? log.join(" ") : <span className="text-white/35">Comece a digitar…</span>}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  {untested.length ? (
                    <AlertTriangle className="h-4 w-4 text-[#FBC523]" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 text-[#FBC523]" />
                  )}
                  Relatório de teclas não respondidas
                </div>
                <div className="mt-3 h-32 overflow-y-auto">
                  {untested.length === 0 ? (
                    <p className="text-sm text-[#FBC523]">
                      Todas as teclas do layout responderam corretamente.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {untested.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-1 rounded-md border border-white/10 bg-white/[0.04] text-[10px] font-mono text-white/60"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-white/40">
              Dica: algumas teclas (como Print Screen, teclas multimídia e atalhos do sistema) podem ser
              capturadas pelo sistema operacional e não chegar ao navegador.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default TesteTeclado;
