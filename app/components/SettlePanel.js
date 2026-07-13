const signals = [
  { label: "Layout", note: "DOM mutations" },
  { label: "Network", note: "fetch · XHR · resources" },
  { label: "Animation", note: "Web Animations API" },
];

export default function SettlePanel() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border bg-bg-raised p-5 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]">
      <div className="flex items-center justify-between border-b border-border-soft pb-4">
        <span className="font-mono-ui text-[11px] uppercase tracking-widest text-text-faint">
          watching the page
        </span>
        <span className="font-mono-ui text-[11px] text-text-faint">7s loop</span>
      </div>

      <ul className="mt-4 flex flex-col gap-3.5">
        {signals.map((signal, i) => (
          <li key={signal.label} className="flex items-center gap-3">
            <span
              className={`settle-dot settle-dot--delay-${i + 1} h-2 w-2 shrink-0 rounded-full`}
            />
            <span
              className={`settle-label--delay-${i + 1} font-mono-ui text-[13px]`}
            >
              {signal.label}
            </span>
            <span className="font-mono-ui text-[11px] text-text-faint">
              {signal.note}
            </span>
          </li>
        ))}
      </ul>

      <div className="relative mt-5 overflow-hidden rounded-xl border border-border-soft">
        <div className="frame-reveal grid grid-cols-3 gap-1 bg-[#0a0908] p-3">
          <div className="col-span-3 h-3 rounded-sm bg-white/10" />
          <div className="col-span-2 h-14 rounded-sm bg-white/[0.06]" />
          <div className="h-14 rounded-sm bg-settled/20" />
          <div className="col-span-3 h-3 w-2/3 rounded-sm bg-white/10" />
          <div className="col-span-1 h-3 rounded-sm bg-white/10" />
        </div>
        <div className="shutter-flash pointer-events-none absolute inset-0 bg-white" />
      </div>

      <p className="mt-4 font-mono-ui text-[11px] leading-relaxed text-text-faint">
        capture fires only when all three go quiet — or after the max-wait
        timeout, whichever comes first
      </p>
    </div>
  );
}
