import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-border-soft">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="settle-dot settle-dot--delay-1 h-2.5 w-2.5 rounded-full" />
          </span>
          <span className="font-display text-[17px] tracking-tight text-text">
            Full Page Capture
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-mono-ui text-[13px] text-text-dim">
          <Link href="/#how-it-works" className="hidden hover:text-text sm:inline">
            how it works
          </Link>
          <Link href="/#pricing" className="hover:text-text">
            pricing
          </Link>
          <Link
            href="/#install"
            className="rounded-full border border-settled/40 bg-settled/10 px-3.5 py-1.5 text-settled hover:bg-settled/15"
          >
            add to chrome
          </Link>
        </nav>
      </div>
    </header>
  );
}
