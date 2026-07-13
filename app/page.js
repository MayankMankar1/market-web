import SettlePanel from "./components/SettlePanel";

const DODO_CHECKOUT_URL = process.env.NEXT_PUBLIC_DODO_CHECKOUT_URL || "#";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 pb-20 pt-14 lg:flex-row lg:items-center lg:pt-24">
        <div className="flex-1">
          <p className="font-mono-ui text-[12px] uppercase tracking-widest text-text-faint">
            a Chrome extension
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[40px] font-medium leading-[1.1] tracking-tight text-text sm:text-[52px]">
            Screenshots shouldn&rsquo;t capture a page that&rsquo;s still loading.
          </h1>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-text-dim">
            Most full-page screenshot tools scroll and shoot on a fixed timer.
            This one watches the page&rsquo;s layout, network requests, and
            animations, and only takes the picture once they&rsquo;ve actually
            gone still.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#install"
              className="rounded-full bg-settled px-6 py-3 text-[14px] font-medium text-[#06201c] transition hover:brightness-110"
            >
              Add to Chrome — free
            </a>
            <a
              href="#how-it-works"
              className="font-mono-ui text-[13px] text-text-dim underline decoration-border underline-offset-4 hover:text-text"
            >
              see how it decides
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <SettlePanel />
        </div>
      </section>

      {/* ---------- The problem ---------- */}
      <section className="border-t border-border-soft bg-bg-raised/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="max-w-xl font-display text-[28px] font-medium leading-tight text-text">
            A fixed delay doesn&rsquo;t know if the page is ready. Only the page knows that.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-unsettled/25 bg-unsettled-dim/30 p-6">
              <p className="font-mono-ui text-[11px] uppercase tracking-widest text-unsettled">
                timer-based capture
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-text-dim">
                <li>— scrolls, waits ~200ms, shoots</li>
                <li>— catches CSS transitions mid-motion</li>
                <li>— lazy images still show placeholders</li>
                <li>— sticky headers repeat down the page</li>
              </ul>
            </div>
            <div className="rounded-xl border border-settled/25 bg-settled-dim/40 p-6">
              <p className="font-mono-ui text-[11px] uppercase tracking-widest text-settled">
                settle-detection capture
              </p>
              <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-text-dim">
                <li>— scrolls, watches three live signals</li>
                <li>— waits for animations to finish</li>
                <li>— waits for images and fetches to land</li>
                <li>— hides sticky headers after the first frame</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-[28px] font-medium text-text">How it decides</h2>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-text-dim">
          Three checks run in parallel at every scroll position. Capture only
          fires once all three agree — or a max-wait timeout is hit, so a page
          with a permanent spinner can&rsquo;t stall the whole thing.
        </p>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              n: "01",
              title: "Scroll",
              body: "Jumps to the next section instantly — no smooth-scroll animation to wait out.",
            },
            {
              n: "02",
              title: "Watch",
              body: "A mutation observer, wrapped fetch/XHR calls, and the Web Animations API all report back until they've stayed quiet for a full beat.",
            },
            {
              n: "03",
              title: "Capture",
              body: "Only then does it screenshot that section — then stitches every section into one image, accounting for device pixel ratio.",
            },
          ].map((step) => (
            <li key={step.n}>
              <span className="font-mono-ui text-[13px] text-settled">{step.n}</span>
              <h3 className="mt-2 font-display text-[19px] text-text">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-dim">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Modes ---------- */}
      <section className="border-t border-border-soft bg-bg-raised/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-[28px] font-medium text-text">Two modes, your call</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg p-6">
              <h3 className="font-display text-[18px] text-text">Quality</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-dim">
                Full settle-detection on every section. Slower, but it&rsquo;s
                the mode built to actually catch a fully-loaded page.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg p-6">
              <h3 className="font-display text-[18px] text-text">Fast</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-dim">
                A fixed, adjustable delay between scrolls — for when you
                already know the page loads quickly and just want speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="pricing" className="border-t border-border-soft">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="font-mono-ui text-[12px] uppercase tracking-widest text-text-faint">
            pricing
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[32px] font-medium leading-tight text-text">
            Try the slow, careful mode. Pay only if it&rsquo;s worth it to you.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-text-dim">
            Fast mode and area selection are free forever — no account, no
            limit. Quality mode, the settle-detection capture, is free for
            your first three uses so you can see what it actually catches.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-bg-raised p-8">
              <h3 className="font-display text-[20px] text-text">Free</h3>
              <p className="mt-1 font-mono-ui text-[13px] text-text-faint">$0</p>
              <ul className="mt-6 space-y-3 text-[14px] leading-relaxed text-text-dim">
                {[
                  "Fast mode — unlimited full-page captures",
                  "Area selection — unlimited",
                  "Quality mode (settle-detection) — first 3 captures",
                  "Sticky header hiding, DPR-aware stitching",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-text-faint" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-settled/40 bg-settled-dim/30 p-8">
              <h3 className="font-display text-[20px] text-text">Pro</h3>
              <p className="mt-1 font-mono-ui text-[13px] text-settled">
                $5 / 3 months
              </p>
              <ul className="mt-6 space-y-3 text-[14px] leading-relaxed text-text-dim">
                {[
                  "Everything in Free",
                  "Quality mode — unlimited",
                  "Priority fixes and new capture features",
                  "Supports continued development",
                ].map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-settled" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={DODO_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-full bg-settled px-5 py-3 text-center text-[14px] font-medium text-[#06201c] transition hover:brightness-110"
              >
                Get Pro
              </a>
              {DODO_CHECKOUT_URL === "#" && (
                <p className="mt-3 font-mono-ui text-[11px] text-unsettled">
                  checkout link not configured — set NEXT_PUBLIC_DODO_CHECKOUT_URL
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Install ---------- */}
      <section id="install" className="border-t border-border-soft">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="font-display text-[28px] font-medium text-text">
            Stop shipping half-loaded screenshots.
          </h2>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-settled px-7 py-3.5 text-[14px] font-medium text-[#06201c] transition hover:brightness-110"
          >
            Add to Chrome — free
          </a>
          <p className="mt-3 font-mono-ui text-[11px] text-text-faint">
            Chrome, Edge, and other Chromium browsers · Manifest V3
          </p>
        </div>
      </section>
    </>
  );
}
