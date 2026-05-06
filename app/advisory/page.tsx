import InnerNav from "@/components/InnerNav";
import { InnerFooter } from "@/components/Footer";
import AdvisoryMaps from "@/components/AdvisoryMaps";

const PROBLEM_CARDS = [
  { icon: "payments", title: "Capital", back: "Not all capital is equal. The wrong investor can hold a business back. The right one opens doors that money alone cannot buy." },
  { icon: "schedule", title: "Time", back: "Growth-stage businesses are deep in operations, sales and management. Finding and pitching investors is a full time job on its own." },
  { icon: "hub", title: "Networks", back: "Breaking into a foreign market takes local knowledge and trusted relationships. Most businesses simply do not have them." },
  { icon: "psychology", title: "Knowledge", back: "Capital structuring, debt versus equity, valuations and raise mechanics is a specialist discipline. Most founders are not financiers, nor should they be." },
];

const SOLUTION_CARDS = [
  { icon: "track_changes", title: "The Right Investor", back: "An advisory has spent decades building networks of institutional investors, family offices and VCs. They guide businesses to the right capital, not just any capital." },
  { icon: "bolt", title: "Speed", back: "The next six to twelve months are critical. The right advisory gets businesses to the right investor faster than any cold outreach ever could." },
  { icon: "public", title: "Markets", back: "Each advisory in the Jenta network has deep regional expertise. They take products to their home market, opening doors that would otherwise stay closed." },
  { icon: "insights", title: "Advisory", back: "Many advisories are former hedge fund managers. They know capital structuring, valuations and raise mechanics, and will say so when expectations need adjusting." },
];

const ADVISORY_QUALITIES = [
  { icon: "favorite", title: "Character first.", desc: "Genuine people who understand the founder journey. Empathy is not a soft skill, it is the foundation of every introduction we make." },
  { icon: "work", title: "Decades of craft.", desc: "Our advisories have spent careers, not years, building financial expertise and institutional networks across Asia Pacific, the Gulf and beyond." },
  { icon: "query_stats", title: "Modern thinking.", desc: "Valuation is not only about current financials. Our advisories understand that future demand, market positioning and strategic optionality drive real worth." },
];

function FlipCard({ icon, title, back }: { icon: string; title: string; back: string }) {
  return (
    <div className="flex-none w-[280px] lg:w-full h-[400px] snap-center" style={{ perspective: "1000px" }}>
      <div className="card-flip relative w-full h-full">
        <div className="card-flip-inner relative w-full h-full">
          <div className="card-front absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-4 border border-primary/10 rounded-xl bg-surface-container-lowest overflow-hidden">
            <span className="material-symbols-outlined text-primary-container mb-3" style={{ fontSize: "8rem" }}>{icon}</span>
            <h3 className="font-headline text-xl font-bold text-white">{title}</h3>
          </div>
          <div className="card-back absolute inset-0 w-full h-full flex items-center justify-center text-center p-8 border border-primary/20 rounded-xl bg-surface-container-high">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 block" style={{ fontSize: "2.5rem" }}>{icon}</span>
              <h3 className="font-headline text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{back}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlipSection({ id, title, cards }: { id: string; title: string; cards: typeof PROBLEM_CARDS }) {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-8 relative">
        <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tighter text-white text-left mb-4">
          THE <span className="text-primary-container italic">{title}</span>
        </h2>
        <p className="lg:hidden text-on-surface-variant/50 text-xs font-label uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          Tap & scroll right
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </p>
        <div className="relative">
          <div className="carousel-container flex lg:grid lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-6 px-4 py-8" id={id}>
            {cards.map((card) => (
              <FlipCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AdvisoryPage() {
  return (
    <div className="bg-background text-on-background">
      <InnerNav />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="https://res.cloudinary.com/dp7duapaz/video/upload/q_auto/f_auto/v1775733399/15224037_1920_1080_60fps_1_kig5ag.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="relative z-10 pt-32 md:pt-48 pb-12 px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-white max-w-5xl mx-auto leading-[1.1] text-glow">
                Access New <span className="text-primary-container italic">Funding Streams & Markets.</span>
              </h1>
              <p className="mt-8 md:mt-10 font-body text-base md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                We connect growth-stage businesses with the right advisory partners to unlock new markets and strategic investment.
              </p>
            </div>
          </div>
          {/* How It Works */}
          <div className="relative z-10 py-12 md:py-16 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  { n: "01", title: "We get to know your business.", body: "We take time to understand your stage, your sector, your ambitions and the markets you want to enter. No generic matchmaking." },
                  { n: "02", title: "We make the right introduction.", body: "We introduce you to the advisory partner within our network best placed to support your raise or market entry. We do not charge you for this. Our fee is paid by the advisory." },
                  { n: "03", title: "The advisory takes it from here.", body: "Once introduced, the advisory and your business conduct all due diligence, negotiations and commercial arrangements independently. Jenta steps back." },
                ].map(({ n, title, body }) => (
                  <div key={n} className="bg-surface-container/60 backdrop-blur-md p-8 md:p-10 rounded-xl border border-white/10 relative overflow-hidden group hover:bg-surface-container-high/80 hover:-translate-y-2 transition-all duration-300">
                    <span className="font-headline text-4xl md:text-5xl font-bold text-primary-container/20 absolute -right-4 -top-4 select-none">{n}</span>
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 pr-8">{title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <FlipSection id="problem-carousel" title="PROBLEM." cards={PROBLEM_CARDS} />

        {/* Solution */}
        <FlipSection id="solution-carousel" title="SOLUTION." cards={SOLUTION_CARDS} />

        {/* Advisories */}
        <section className="py-24 bg-background border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-8">
              <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tighter text-white text-left mb-2">
                OUR <span className="text-primary-container italic">ADVISORIES.</span>
              </h2>
              <span className="font-label text-sm uppercase tracking-[0.2em] text-primary-container/80 mb-8 block">
                How we pick which advisories we work with.
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {ADVISORY_QUALITIES.map(({ icon, title, desc }) => (
                <div key={title} className="p-8 border border-white/10 bg-surface-container-lowest rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,243,128,0.15)] hover:border-primary-container/30">
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">{icon}</span>
                  <h3 className="font-headline text-xl font-bold text-white mb-4">{title}</h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mx-auto space-y-12 mt-20">
              <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
                Capital for such projects have been secured from sources such as: GCC Sovereign Wealth Funds, the EU Development Commission, Australian Superannuation Funds and leading Investment Banks. Their institutional relationships span Macquarie, UBS, Blackrock, Brookfield, Temasek and beyond.
              </p>
              <p className="font-body text-white/90 text-lg md:text-xl leading-relaxed">
                Our partners comprise entire teams and solo operators. Their careers span leading hedge funds, retirement funds, venture capital and the C-suites of major financial institutions. All of them understand what it takes to move capital at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Maps */}
        <section className="py-24 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-primary-container/80 mb-12 block text-center">
              WHERE OUR ADVISORIES OPERATE
            </span>
            <AdvisoryMaps />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-8 relative overflow-hidden text-center" id="contact">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="font-headline text-4xl md:text-7xl font-bold text-on-surface mb-10 md:mb-12 tracking-tighter leading-tight">
              Ready to extend <span className="text-primary-container italic">your runway?</span>
            </h2>
            <button className="bg-primary-container text-on-primary-container px-10 md:px-12 py-4 md:py-5 font-headline font-bold text-base md:text-lg tracking-wide hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,243,128,0.4)] transition-all active:scale-95">
              Get In Touch
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full -z-10" />
        </section>

        {/* Legal */}
        <section className="py-12 px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-[11px] leading-relaxed text-white/40">
              Jenta Consulting is an independent introduction and advisory services business. We do not hold an Australian Financial Services Licence and do not provide financial product advice. We operate solely as an introducer. We do not charge fees to businesses seeking funding or advisory introductions - our fees are paid exclusively by the advisory partners within our network. Once an introduction has been made, all due diligence, commercial negotiations and investment decisions are the sole responsibility of the parties involved. Jenta Consulting accepts no liability for the outcome of any introduction. Our recruitment and talent advisory services operate as a separate and independent business line, governed by separate terms of engagement.
            </p>
          </div>
        </section>
      </main>

      <InnerFooter />
    </div>
  );
}
