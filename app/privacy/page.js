export const metadata = { title: "Privacy Policy — Full Page Capture" };

export default function Privacy() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono-ui text-[11px] uppercase tracking-widest text-unsettled">
        template — review before publishing
      </p>
      <h1 className="mt-3 font-display text-[32px] font-medium text-text">
        Privacy Policy
      </h1>
      <p className="mt-2 font-mono-ui text-[12px] text-text-faint">
        Last updated: [date]
      </p>

      <div className="prose-content mt-10 space-y-6 text-[14.5px] leading-relaxed text-text-dim">
        <h2 className="font-display text-[19px] text-text">What the Extension does not do</h2>
        <p>
          The Extension does not read, log, or transmit the content of pages
          you browse, and it does not send screenshots anywhere — captured
          images are stitched locally in your browser and saved directly to
          your computer&rsquo;s downloads folder.
        </p>

        <h2 className="font-display text-[19px] text-text">What we do store</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            A local count of how many free Quality-mode captures you&rsquo;ve
            used, stored in Chrome&rsquo;s extension storage on your own
            device — not on our servers.
          </li>
          <li>
            If you purchase Pro, your email and payment status are held by
            our payment processor ([Dodo Payments / Lemon Squeezy]) to
            validate your license. We receive confirmation of payment and a
            license identifier, not your card details.
          </li>
        </ul>

        <h2 className="font-display text-[19px] text-text">Website analytics</h2>
        <p>
          [Describe any analytics tool used on this Site, e.g. Vercel
          Analytics, Plausible, or none. Update this section to match what
          you actually add.]
        </p>

        <h2 className="font-display text-[19px] text-text">Third parties</h2>
        <p>
          Payment processing is handled entirely by our payment processor,
          which has its own privacy policy governing the data it collects
          during checkout.
        </p>

        <h2 className="font-display text-[19px] text-text">Your choices</h2>
        <p>
          You can reset your local free-use count at any time by removing
          and reinstalling the Extension. You can request deletion of any
          purchase records we hold by contacting us.
        </p>

        <h2 className="font-display text-[19px] text-text">Contact</h2>
        <p>Questions about this policy: pheonixtech8@gmail.com</p>
      </div>
    </section>
  );
}
