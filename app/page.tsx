import Link from "next/link";
import HomepageNav from "@/components/HomepageNav";
import { HomepageFooter } from "@/components/Footer";

const SECTORS = [
  { icon: "psychology", label: "AI & Robotics", desc: "Backing intelligent systems, from autonomous platforms to machine learning infrastructure." },
  { icon: "shield", label: "Defence", desc: "Strategic capital and partnerships for growth-stage defence and aerospace businesses." },
  { icon: "eco", label: "Green Energy", desc: "Connecting capital to cleaner, smarter energy systems." },
  { icon: "agriculture", label: "AgriTech", desc: "Backing the technology transforming how the world grows and distributes food." },
  { icon: "medical_services", label: "MedTech", desc: "Next-generation medical platforms built for distribution and scale." },
];

const MARKETS = [
  { emoji: "🇮🇩", label: "South East Asia" },
  { emoji: "🇦🇺", label: "Australia" },
  { emoji: "🇰🇼", label: "Gulf States" },
  { emoji: "🇪🇺", label: "European Union" },
];

const PIPELINE = [
  { tag: "Market Entry", title: "MedTech AI", desc: "AI MedTech Platform Distribution across South East Asia", icon: "medical_services" },
  { tag: "Market Entry", title: "Defence", desc: "Anti-Submarine maritime infrastructure distribution across South East Asia", icon: "shield" },
  { tag: "Series A Capital Raise", title: "Green Energy", desc: "Green Energy AI Data Centre actively raising for their Series A", icon: "eco" },
];

const BLOG_POSTS = [
  { date: "JAN 14, 2024", title: "The Death of Conventional Hedge", excerpt: "How quantum computing is rendering traditional portfolio diversification obsolete in the new sovereign era." },
  { date: "DEC 08, 2023", title: "Sovereign Data: The New Gold Reserve", excerpt: "Analyzing the shift from oil-based economies to intelligence-based governance models in the Asia-Pacific region." },
  { date: "NOV 22, 2023", title: "AI In the War Room: Capital Tactics", excerpt: "The role of predictive neural networks in high-stakes venture capital and acquisition strategy." },
];

export default function HomePage() {
  return (
    <>
      <HomepageNav />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="https://res.cloudinary.com/dp7duapaz/video/upload/q_auto/f_auto/v1777859961/13070859_2580_1440_30fps_ilwjs7.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A1E]/40 via-[#121412]/60 to-background" />
          </div>
          <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 pt-32 md:pt-0">
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                Seeing <span className="italic font-light text-primary-container">Around</span> Corners.
              </h1>
              <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed mb-10 text-white">
                Through our network of private equity advisories, we make the introductions that open doors to new funding streams and markets.
              </p>
            </div>
          </div>
          {/* Marquee Ticker */}
          <div className="absolute bottom-0 w-full bg-surface-container-low/50 backdrop-blur-sm py-10 border-y border-outline-variant/10 overflow-hidden">
            <div className="flex whitespace-nowrap gap-12 items-center animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-20 items-center px-4">
                  {["AI & Robotics", "Green Energy", "AgriTech", "Defence", "MedTech"].map((item, j) => (
                    <span key={j} className="flex items-center gap-20">
                      <span className="font-headline text-2xl font-black uppercase tracking-tighter text-white">{item}</span>
                      <span className="w-2 h-2 bg-primary-container rounded-full" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding & GTM */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                  Runway for <span className="italic text-primary-container font-light">emerging technologies.</span>
                </h2>
                <p className="text-white text-lg">Add to your runway with new funding streams and markets, whilst optimising your runway with the key hires.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <Link href="/advisory" className="bg-surface-container-low p-8 md:p-16 rounded-none flex flex-col md:flex-row justify-between items-center group overflow-hidden relative border border-outline-variant/10 w-full min-h-[400px] md:min-h-[500px] hover:border-primary-container/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                  <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDG1AKg4_aphBdSkG6MQh3AF-X6twNQOExQ3_z9rU5DMTLchSHOw88Nx_faapcIRkOl93X-6kH8TjVvvllzE3zpvBvxCiJFrQ1BLHGLzyV9hGoaIEn9YFv4wmsMqLQQ2SaykvY1KvOFJJpPFN0ZHLw5CSnRKKVqYgBIaxs6DYorj3_XrzPnGlrNxjXwjpOIshwCfsuo5q2a42TDegcdGoimHPhJkYXyILzs1g6K6cfWG4pzaHI6GSaWoWk05fRldG8D7Hqlj-grvBB" />
                </div>
                <div className="relative z-10 w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary-container text-4xl">account_balance_wallet</span>
                    <span className="font-label text-primary-container uppercase tracking-widest text-xs font-bold">Funding & GTM</span>
                  </div>
                  <h3 className="font-headline text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">Access New Funding<br />Streams & Markets.</h3>
                  <p className="text-white/80 text-lg md:text-xl max-w-2xl">We introduce scaling businesses to the right private equity advisory for both capital raising and market entry.</p>
                </div>
                <div className="mt-12 md:mt-0 flex justify-end relative z-10 w-full md:w-auto">
                  <div className="w-20 h-20 md:w-24 md:h-24 border border-primary-container/30 flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl md:text-4xl">north_east</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-32 px-8 bg-surface-container-lowest" id="sectors">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-20">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Key <span className="italic font-light">Industries.</span></h2>
                <p className="text-white/80 max-w-md italic font-light">These are the key industries we are most interested in.</p>
              </div>
            </div>
            <div className="relative mb-32">
              <p className="lg:hidden text-on-surface-variant/50 text-xs font-label uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                Tap & scroll right
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </p>
              <div className="carousel-container flex lg:grid lg:grid-cols-5 overflow-x-auto snap-x snap-mandatory gap-4 px-1 py-4">
                {SECTORS.map(({ icon, label, desc }) => (
                  <div key={label} className="flex-none w-[280px] lg:w-full h-[400px] snap-center" style={{ perspective: "1000px" }}>
                    <div className="card-flip relative w-full h-full">
                      <div className="card-flip-inner relative w-full h-full">
                        <div className="card-front absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-4 border border-primary/10 rounded-xl bg-surface-container-lowest overflow-hidden">
                          <span className="material-symbols-outlined text-primary-container mb-3" style={{ fontSize: "8rem" }}>{icon}</span>
                          <h4 className="font-headline text-base font-bold text-white uppercase tracking-widest text-center">{label}</h4>
                        </div>
                        <div className="card-back absolute inset-0 w-full h-full flex items-center justify-center text-center p-8 border border-primary/20 rounded-xl bg-surface-container-high">
                          <div>
                            <span className="material-symbols-outlined text-primary-container mb-4 block" style={{ fontSize: "2.5rem" }}>{icon}</span>
                            <h4 className="font-headline text-base font-bold text-white uppercase tracking-widest mb-4">{label}</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Market Entry */}
            <div className="pt-16 border-t border-outline-variant/10">
              <div className="mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Market Entry</h2>
                <p className="text-white/80 max-w-2xl italic font-light">Markets our advisories can help your product access</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {MARKETS.map(({ emoji, label }) => (
                  <div key={label} className="bg-surface border border-outline-variant/10 p-10 flex flex-col items-center text-center group hover:bg-[#0F2A1E]/20 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,243,128,0.15)] transition-all duration-300">
                    <div className="text-5xl mb-6">{emoji}</div>
                    <span className="font-headline text-lg font-bold text-white tracking-wide uppercase">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-left">
              <span className="font-label text-primary-container tracking-[0.3em] text-[10px] font-bold mb-4 uppercase block">Active Deal Flow</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white">Current <span className="italic font-light">Pipeline.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PIPELINE.map(({ tag, title, desc, icon }) => (
                <div key={title} className="bg-surface-container-high border border-outline-variant/5 p-8 flex flex-col items-center text-center group hover:bg-[#0F2A1E]/30 transition-colors">
                  <div className="w-full flex flex-col items-center">
                    <div className="flex justify-center items-start mb-12">
                      <span className="text-[10px] font-bold font-label tracking-[0.2em] text-primary-container uppercase border border-primary-container/30 px-3 py-1.5">{tag}</span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-10">{desc}</p>
                    <span className="material-symbols-outlined text-primary-container text-7xl">{icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="font-label text-primary-container tracking-[0.3em] text-[10px] font-bold mb-6 uppercase block">The Journal</span>
              <h2 className="font-headline text-5xl font-bold tracking-tighter text-white mb-10 leading-tight">Our <br /><span className="italic font-light">Blog.</span></h2>
              <p className="text-white/80 mb-12 font-light">Deep-dive analysis into the intersection of technology, capital, and geopolitical shifts.</p>
            </div>
            <div className="lg:w-2/3 space-y-12">
              {BLOG_POSTS.map(({ date, title, excerpt }) => (
                <Link key={title} href="/blog" className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-outline-variant/10 hover:border-primary-container transition-colors">
                  <div className="md:w-1/4">
                    <p className="font-label text-outline text-[10px] tracking-widest uppercase font-bold">{date}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-headline text-3xl font-bold text-white group-hover:text-primary-container transition-colors mb-4 tracking-tighter">{title}</h3>
                    <p className="text-on-surface-variant font-light line-clamp-2">{excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-48 px-8 relative overflow-hidden bg-background" id="contact">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12">Ready to <span className="italic font-light">grow?</span></h2>
            <button className="bg-primary-container text-on-primary-container px-14 py-7 font-headline font-bold text-sm tracking-[0.3em] uppercase primary-glow hover:scale-105 transition-all">
              Initiate Consultation
            </button>
          </div>
        </section>
      </main>

      <HomepageFooter />
    </>
  );
}
