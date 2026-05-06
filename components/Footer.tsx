import Link from "next/link";

const DISCLAIMER = `Jenta Consulting is an independent introduction and advisory services business. We do not hold an Australian Financial Services Licence and do not provide financial product advice. We operate solely as an introducer. We do not charge fees to businesses seeking funding or advisory introductions - our fees are paid exclusively by the advisory partners within our network. Once an introduction has been made, all due diligence, commercial negotiations and investment decisions are the sole responsibility of the parties involved. Jenta Consulting accepts no liability for the outcome of any introduction. Our recruitment and talent advisory services operate as a separate and independent business line, governed by separate terms of engagement.`;

export function HomepageFooter() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/10 py-24">
      <div className="max-w-screen-2xl mx-auto px-12 flex flex-col items-center text-center">
        <span className="text-4xl font-bold tracking-tighter text-white font-headline mb-8">
          JENTA
        </span>
        <div className="max-w-3xl mb-12">
          <div className="space-y-6">
            <p className="text-primary-container font-headline text-xs font-bold tracking-[0.3em] uppercase">
              Disclaimer
            </p>
            <p className="text-on-surface text-[10px] md:text-[11px] leading-relaxed font-body opacity-70 text-center uppercase tracking-wider">
              {DISCLAIMER}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {[
            { label: "About", href: "/team" },
            { label: "What We Do", href: "/advisory" },
            { label: "Sectors", href: "/#sectors" },
            { label: "Articles", href: "/blog" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-primary-container hover:text-white transition-colors font-headline text-xs font-bold tracking-[0.2em] uppercase"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="w-full border-t border-outline-variant/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-outline/40 font-label text-[10px] tracking-[0.3em] uppercase font-bold">
            &copy; 2024 JENTA. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-10">
            <Link
              href="#"
              className="text-outline/40 hover:text-primary-container transition-colors font-label text-[10px] tracking-[0.3em] uppercase font-bold"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-outline/40 hover:text-primary-container transition-colors font-label text-[10px] tracking-[0.3em] uppercase font-bold"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function InnerFooter() {
  return (
    <footer className="bg-[#0F2A1E] border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-6">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-white font-display">JENTA</div>
        <p className="text-white/50 font-label text-sm tracking-wide">
          &copy; 2024 Jenta Consulting. All rights reserved.
        </p>
      </div>
      <div className="flex gap-8">
        <Link
          href="#"
          className="text-white/50 hover:text-white font-label text-sm tracking-wide transition-colors"
        >
          Privacy Protocol
        </Link>
        <Link
          href="#"
          className="text-white/50 hover:text-white font-label text-sm tracking-wide transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-white/50 hover:text-white font-label text-sm tracking-wide transition-colors"
        >
          Regulatory Disclaimer
        </Link>
      </div>
    </footer>
  );
}

export function BlogFooter() {
  return (
    <footer className="bg-zinc-950/50 w-full py-12 px-8 mt-auto border-t border-emerald-900/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-screen-2xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-white uppercase font-headline">
          JENTA
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest">
          {["Legal", "Privacy Policy", "Terms of Service", "Investment Disclosure"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-zinc-500 hover:text-emerald-200 hover:italic transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="text-zinc-500 font-label text-xs uppercase tracking-widest">
          &copy; 2024 Jenta Consulting. Precision Intelligence.
        </div>
      </div>
    </footer>
  );
}
