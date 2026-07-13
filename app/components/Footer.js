import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-[15px] text-text">Full Page Capture</p>
            <p className="mt-1 max-w-xs font-mono-ui text-[12px] leading-relaxed text-text-faint">
              Waits for layout, network, and animation to go quiet. Then shoots.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono-ui text-[13px] text-text-dim sm:grid-cols-3">
            <Link href="/#pricing" className="hover:text-text">
              pricing
            </Link>
            <Link href="/terms" className="hover:text-text">
              terms
            </Link>
            <Link href="/privacy" className="hover:text-text">
              privacy
            </Link>
            <a href="mailto:pheonixtech8@gmail.com" className="hover:text-text">
              contact
            </a>
          </div>
        </div>
        <p className="mt-10 font-mono-ui text-[11px] text-text-faint">
          © {new Date().getFullYear()} Full Page Capture. Not affiliated with Google.
        </p>
      </div>
    </footer>
  );
}
