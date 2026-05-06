import Link from "next/link";

export default function InnerNav() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="relative flex flex-row justify-between items-center px-4 md:px-8 py-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="relative flex items-center gap-2 text-white hover:text-primary transition-all duration-200 active:scale-95 group order-1"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span className="font-headline uppercase tracking-[0.05em] text-xs md:text-sm">
            Back
          </span>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 order-2">
          <Link
            href="/"
            className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-white uppercase"
          >
            JENTA
          </Link>
        </div>

        <Link
          href="#contact"
          className="relative bg-primary-container text-on-primary-container px-3 md:px-6 py-1.5 md:py-2 font-headline font-bold text-[10px] md:text-sm tracking-wide transition-all active:scale-95 hover:brightness-110 shadow-lg order-3"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}
