import Link from "next/link";
import HomepageNav from "@/components/HomepageNav";
import { HomepageFooter } from "@/components/Footer";
import AdvisoryMaps from "@/components/AdvisoryMaps";
import ScrollToTop from "@/components/ScrollToTop";

const SECTORS = [
  { icon: "psychology", label: "AI & Robotics", desc: "Backing intelligent systems, from autonomous platforms to machine learning infrastructure." },
  { icon: "shield", label: "Defence", desc: "Discovering bleeding-edge hardware and software companies pushing the boundaries of what's possible to protect societies." },
  { icon: "eco", label: "Green Energy", desc: "Innovation pushing the boundaries behind smarter energy systems." },
  { icon: "agriculture", label: "AgriTech", desc: "Backing the technology transforming how the world grows and distributes food." },
  { icon: "medical_services", label: "MedTech", desc: "Next-generation medical platforms built for distribution and scale." },
];


const PIPELINE = [
  { tag: "Market Entry", title: "MedTech AI", desc: "AI MedTech Platform Distribution across South East Asia", icon: "medical_services" },
  { tag: "Market Entry", title: "Defence", desc: "Anti-Submarine maritime infrastructure distribution across South East Asia", icon: "shield" },
  { tag: "Series A Capital Raise", title: "Green Energy", desc: "Green Energy AI Data Centre actively raising for their Series A", icon: "eco" },
];


export default function HomePage() {
  return (
    <>
      <ScrollToTop />
      <HomepageNav />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="https://res.cloudinary.com/dp7duapaz/video/upload/q_auto/f_auto/v1777859961/13070859_2580_1440_30fps_ilwjs7.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A1E]/10 via-[#121412]/25 to-background" />
          </div>
          <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 pt-32 md:pt-0">
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                Seeing <span className="italic font-light text-primary-container">Around</span> Corners.
              </h1>
              <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed mb-10 text-white">
                We connect growth-stage businesses with the relevant advisory partners to unlock new markets and strategic investment.
              </p>
            </div>
          </div>
          {/* Marquee Ticker */}
          <div className="absolute bottom-0 w-full py-10 overflow-hidden">
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
                <p className="text-white text-lg">Add to your runway with new funding streams and markets.</p>
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
              <AdvisoryMaps />
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-left">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white">Projects we have connected <span className="italic font-light">advisories to.</span></h2>
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


      </main>

      <HomepageFooter />
    </>
  );
}
