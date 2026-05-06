import Link from "next/link";

const DISCLAIMER = `Jenta Consulting is an independent introduction and advisory services business. We do not hold an Australian Financial Services Licence and do not provide financial product advice. We operate solely as an introducer. We do not charge fees to businesses seeking funding or advisory introductions - our fees are paid exclusively by the advisory partners within our network. Once an introduction has been made, all due diligence, commercial negotiations and investment decisions are the sole responsibility of the parties involved. Jenta Consulting accepts no liability for the outcome of any introduction. Our recruitment and talent advisory services operate as a separate and independent business line, governed by separate terms of engagement.`;

const NAV_LINKS = [
  { label: "About", href: "/team" },
  { label: "What We Do", href: "/advisory" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Articles", href: "/blog" },
];

function SharedFooter() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-outline-variant/10 py-24">
      <div className="max-w-screen-2xl mx-auto px-12 flex flex-col items-center text-center">
        <span className="text-4xl font-bold tracking-tighter text-white font-headline mb-8">
          JENTA
        </span>
        <div className="max-w-3xl mb-12 space-y-6">
          <p className="text-primary-container font-headline text-xs font-bold tracking-[0.3em] uppercase">
            Disclaimer
          </p>
          <p className="text-on-surface text-[10px] md:text-[11px] leading-relaxed font-body opacity-70 text-center uppercase tracking-wider">
            {DISCLAIMER}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          {NAV_LINKS.map(({ label, href }) => (
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
            <Link href="#" className="text-outline/40 hover:text-primary-container transition-colors font-label text-[10px] tracking-[0.3em] uppercase font-bold">
              Privacy
            </Link>
            <Link href="#" className="text-outline/40 hover:text-primary-container transition-colors font-label text-[10px] tracking-[0.3em] uppercase font-bold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageBottom() {
  return (
    <>
      {/* CTA */}
      <section className="py-48 px-8 relative overflow-hidden bg-background" id="contact">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12">
            Ready to <span className="italic font-light">grow?</span>
          </h2>
          <button className="bg-primary-container text-on-primary-container px-14 py-7 font-headline font-bold text-sm tracking-[0.3em] uppercase primary-glow hover:scale-105 transition-all">
            Initiate Consultation
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full -z-10" />
      </section>

      <SharedFooter />
    </>
  );
}

// Keep HomepageFooter as alias for backwards compat
export function HomepageFooter() {
  return <PageBottom />;
}
