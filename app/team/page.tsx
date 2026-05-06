import InnerNav from "@/components/InnerNav";
import { InnerFooter } from "@/components/Footer";

export default function TeamPage() {
  return (
    <div className="bg-[#0F2A1E] text-white font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <InnerNav />

      <main className="min-h-screen pt-40 pb-24 px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 flex-1">
        {/* Left: Silhouette */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c1ffcb]/5 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-full aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden ghost-border glow-ambient flex items-end justify-center">
            <img
              className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              alt="Sami Wareeth - Founder of Jenta"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7rf9GtFBU2SEF5nHVUbM0-sEK5OPK9pY46TsshPu5gqMp-hJ19N4lg0DFVEqGbM44ohnGAriw2Cai0f462UfNGSF6cdu7N-uqe-AWAfzlAOP4Ck_eDnQ7nd9iX7uQ0z7dRrL9YntYf8JfoOS4x5bibLgCxi1QSdvLnKswbVdXClJDZQ6nQSsdzR6qa51-ScldHBVu1px9uj66PEY6rZDrHf0fO7-rJM5hkP0md0FDYqyV1cYixtTYQYzAGD4C5glrYIVS-n7RacQp"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <header>
            <div className="text-primary-container font-display uppercase tracking-[0.2em] text-sm mb-4">Leadership</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white leading-[1.1]">
              Our Founder, <br />
              <span className="italic font-light">Sami Wareeth</span>
            </h1>
          </header>
          <div className="space-y-6 text-white/80 leading-relaxed text-lg max-w-xl">
            <p>
              Sami Wareeth founded Jenta with a singular vision: to bridge the gap between speculative investment and clinical intelligence. With over two decades of navigating high-stakes global markets, Sami has developed a proprietary methodology that prioritizes structural resilience over short-term volatility.
            </p>
            <p>
              Under his direction, the consultancy operates as a digital laboratory where strategies are not merely proposed but synthesized through rigorous stress testing and geopolitical analysis. His approach combines the ruthless precision of technical data with an intuitive grasp of the human elements that drive market shifts.
            </p>
            <p>
              Today, Jenta serves as the primary sovereign alchemist for a select circle of global institutions, transforming complex market signals into actionable, high-velocity intelligence that secures generational prosperity.
            </p>
          </div>
        </div>
      </main>

      <InnerFooter />
    </div>
  );
}
