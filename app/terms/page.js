export const metadata = { title: "Terms of Service — Full Page Capture" };

export default function Terms() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono-ui text-[11px] uppercase tracking-widest text-unsettled">
        Full Page Capture
      </p>
      <h1 className="mt-3 font-display text-[32px] font-medium text-text">
        Terms of Service
      </h1>
      <p className="mt-2 font-mono-ui text-[12px] text-text-faint">
        Last updated: 14-july 2026
      </p>

      <div className="prose-content mt-10 space-y-6 text-[14.5px] leading-relaxed text-text-dim">
        <p>
          These Terms govern your use of the Full Page Capture browser
          extension (&ldquo;the Extension&rdquo;) and this website
          (&ldquo;the Site&rdquo;), operated by [Your Name / Business Name]
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By installing the Extension or
          using the Site, you agree to these Terms.
        </p>

        <h2 className="font-display text-[19px] text-text">1. What the Extension does</h2>
        <p>
          The Extension captures full-page and area screenshots of web pages
          you visit, using scroll automation and page-state detection running
          locally in your browser. It does not transmit the content of
          screenshots to us or any third party except as needed to save the
          file to your device.
        </p>

        <h2 className="font-display text-[19px] text-text">2. Free and paid features</h2>
        <p>
          Fast-mode capture and area-selection capture are free and
          unlimited. Quality-mode capture (settle-detection) is free for a
          limited number of uses, after which continued use requires a paid
          license, purchased through our payment processor. See{" "}
          <a href="/pricing" className="text-settled underline underline-offset-2">
            Pricing
          </a>{" "}
          for current terms.
        </p>

        <h2 className="font-display text-[19px] text-text">3. Payments</h2>
        <p>
          Payments are processed by [Dodo Payments / Lemon Squeezy], acting as
          merchant of record. We do not receive or store your card details.
          By purchasing a license you also agree to that processor&rsquo;s own
          terms of service.
        </p>

        <h2 className="font-display text-[19px] text-text">4. Acceptable use</h2>
        <p>
          You agree not to use the Extension to capture content you do not
          have the right to capture, or in a way that violates the terms of
          service of the websites you visit. You are responsible for how you
          use captured screenshots.
        </p>

        <h2 className="font-display text-[19px] text-text">5. No warranty</h2>
        <p>
          The Extension and Site are provided &ldquo;as is&rdquo;, without
          warranty of any kind. We do not guarantee that every capture will
          be pixel-perfect or that the settle-detection logic will catch
          every possible loading state on every website.
        </p>

        <h2 className="font-display text-[19px] text-text">6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any
          indirect, incidental, or consequential damages arising from your
          use of the Extension or Site.
        </p>

        <h2 className="font-display text-[19px] text-text">7. Changes</h2>
        <p>
          We may update these Terms from time to time. Continued use after a
          change constitutes acceptance of the updated Terms.
        </p>

        <h2 className="font-display text-[19px] text-text">8. Contact</h2>
        <p>
          Questions about these Terms: pheonixtech8@gmail.com
        </p>
      </div>
    </section>
  );
}
