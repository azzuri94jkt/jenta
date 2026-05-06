import InnerNav from "@/components/InnerNav";
import { BlogFooter } from "@/components/Footer";

const POSTS = [
  {
    title: "Sovereign Data: The New Gold Reserve",
    excerpt: "Analyzing the shift from oil-based economies to intelligence-based governance models in the Asia-Pacific region.",
    tag: "Governance",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK9DVR-uCIsQrRTjs3lQAd1u1dW2OHYiRJ-rEioDVsiZXw0xyBHIz6uuPiW5sWFH3Xi6kkXeKuuh7YUGSunNz2FrYJTjxFYRLl9WbNaP4TNAghRalR_RToeRRSMkm4OQcFFABb3KC_LKqON68zVc3ETGlI4pELdgXWWeuhSoWOEMpS_3XsaG_Gy-PKiu5TuMOjjDff4GIKm39ja3A_ii3_kFPT58GNXdqHHZwSDN89IAgErRFNLhQE0DsExac91pF75lrjK-P0BqQZ",
  },
  {
    title: "AI in the War Room: Capital Tactics",
    excerpt: "The role of predictive neural networks in high-stakes venture capital and acquisition strategy.",
    tag: "Intelligence",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZj4jxXDzMWNlIGwKym3-3H-47yhRDo_YphomppxRBr1gOJ9MM50A2gOvGh5NAXoHMiTr_zU10T_Zm7qDJf6U-K4mxwabwsx-9CEbytuOB0kMZCxHFxfvEtBrDRmJcGquZkeO9pOIyqSuGBRCkx2yfKRx1eg5NYm1hIpwzH87BDzl8Al6zUlSSeucUSRFVdwfCYURab9SObOFTjijj_eXIrfB7lLe70PmeZ6X7VMDY5bWQo6JK3CWbGsUMvEnRkIem365nIu3v5BmA",
  },
  {
    title: "Energy Sovereignty: The Grid as a Weapon",
    excerpt: "How decentralized renewable infrastructure is redefining national security and investment risk.",
    tag: "Infrastructure",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnKx5aIZ41JtnHqJVK8atdcHFGKbwH5SuL_6Jt4KvA66boLpmalCobPiw5pkfU1J0MDtwMUo9OQG6C4FkQg4T2QdJlUCBHgZmeXWrUGM8nZznJ_pKR3UNv9OUdlypJ6QHUHSIyEgkJIUvqfy2X-eSx9I2044aq1l8nfQC8gThLNGbcLwnkFXGfJ3OiV92pFGHPKdZal1WzKKTeCNPdJlgJQ5LMulzuThT7JSEQWmIxVxNV0ZbmqDsVP7STpCDF3qEa1dqR_0EkKB4f",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-emerald-950/30 shadow-[0_1px_0_0_rgba(193,255,203,0.05)]">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto font-headline tracking-tight">
          <a href="/" className="text-emerald-200 hover:text-emerald-100 transition-all duration-300">
            <span className="material-symbols-outlined">arrow_back</span>
          </a>
          <div className="text-2xl font-bold tracking-tighter uppercase text-white">JENTA</div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 font-bold tracking-tight hover:brightness-110 transition-all active:scale-95">
            Get In Touch
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20 flex-1">
        {/* Hero */}
        <section className="px-6 py-20 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-tertiary mb-6">
            Our <span className="italic text-primary-container">Blog.</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-light text-lg md:text-xl leading-relaxed uppercase tracking-widest">
            Deep-dive analysis into the intersection of technology, capital, and geopolitical shifts.
          </p>
        </section>

        {/* Featured */}
        <section className="px-6 mb-20 max-w-screen-2xl mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low ghost-border group">
            <div className="grid md:grid-cols-2 min-h-[500px]">
              <div className="relative overflow-hidden">
                <img
                  alt="Quantum Computing Concept"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoX-0lrMa4GYN2xVpdQSXJ6gPvYTEVeicCJPrUmE_m2hhmAub6CI15M2r6_uGt8lwIgOCec0JYW8Dm_u9ju12f3Cg9azoAFpW5gsSwOociHDpJ0qbiphg4tr8EEblvoHU77laa6ez-3sY54ZJQu4thpfY524XBCJ3nYS4AaNWi_l1vh9vwfHlqSV7bmPYv44fHCdno5Xl7Zm1YAVej0Bv-ahHwR3Qo2T8O6xqY6ZqWsHi1M81TTVJq6a4MnH-pOxirt52hvK3oqMGI"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center relative z-10">
                <div className="font-label text-xs uppercase tracking-[0.2em] text-primary-container mb-4 font-bold">
                  Featured Analysis
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-tertiary leading-tight mb-6">
                  The Death of <span className="italic">Conventional Hedge.</span>
                </h2>
                <p className="text-on-surface-variant text-lg mb-8 font-light leading-relaxed">
                  How quantum computing is rendering traditional portfolio diversification obsolete in the new sovereign era. Exploring the collapse of legacy risk models.
                </p>
                <div className="flex items-center gap-6 text-xs font-label uppercase tracking-widest text-outline mb-10">
                  <span>Jan 14, 2024</span>
                  <span className="w-1 h-1 bg-outline rounded-full" />
                  <span>5 min read</span>
                  <span className="w-1 h-1 bg-outline rounded-full" />
                  <span className="text-primary">Capital & Markets</span>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold italic group/btn">
                  Read Intelligence Report
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 max-w-screen-2xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h3 className="font-display text-3xl font-bold text-tertiary">Latest <span className="italic font-light">Insights</span></h3>
            <div className="h-px flex-1 mx-8 bg-outline-variant opacity-20 hidden md:block" />
            <span className="font-label text-xs uppercase tracking-widest text-outline">Laboratory Archive / 2024</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map(({ title, excerpt, tag, img }) => (
              <div key={title} className="flex flex-col bg-surface-container rounded-xl p-8 transition-all hover:bg-surface-container-high ghost-border group cursor-pointer">
                <div className="aspect-video w-full mb-8 overflow-hidden rounded-lg bg-surface-container-lowest relative">
                  <img alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src={img} />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-2xl font-bold text-tertiary mb-4 leading-snug">{title}</h4>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-8">{excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                  <span className="text-[10px] font-label uppercase tracking-widest text-outline">{tag}</span>
                  <button className="material-symbols-outlined text-primary text-xl">north_east</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
