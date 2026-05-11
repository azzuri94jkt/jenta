import { PageBottom } from "@/components/Footer";
import Link from "next/link";

export const POSTS = [
  {
    slug: "embrace-the-age-of-experimentation",
    title: "Embrace the age of experimentation, 4 ways engineering teams are adopting a new look in 2026.",
    excerpt: "Nearly every hiring manager I sit down with has two immediate questions. How's the market? And how are other companies hiring right now?",
    tag: "Future of Work",
    date: "May 2026",
    readTime: "6 min read",
    img: "REPLACE_WITH_CLOUDINARY_URL",
  },
  {
    slug: "retail-brand-50m-arr-no-ai-engineer",
    title: "Retail Brand with $50M ARR and No AI Engineer. That Could Be a Problem pretty soon.",
    excerpt: "During my time working in eCommerce, the biggest topic of conversation was 'Unified Commerce'. Not many brands are thinking about proactive AI systems — and that window is closing.",
    tag: "eCommerce",
    date: "May 2026",
    readTime: "3 min read",
    img: "REPLACE_WITH_CLOUDINARY_URL",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-emerald-950/30 shadow-[0_1px_0_0_rgba(193,255,203,0.05)]">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto font-headline tracking-tight">
          <a href="/" className="text-emerald-200 hover:text-emerald-100 transition-all duration-300">
            <span className="material-symbols-outlined">arrow_back</span>
          </a>
          <Link href="/" className="text-2xl font-bold tracking-tighter uppercase text-white hover:text-primary-container transition-colors">
            JENTA
          </Link>
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
          <p className="max-w-2xl text-on-surface-variant font-light text-lg md:text-xl leading-relaxed">
            Read some of the thoughts &amp; opinions from some of our team. Expect a culmination of ideas coming from real industry experience.
          </p>
        </section>

        {/* Featured */}
        <section className="px-6 mb-20 max-w-screen-2xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="block relative overflow-hidden rounded-xl bg-surface-container-low ghost-border group">
            <div className="grid md:grid-cols-2 min-h-[500px]">
              <div className="relative overflow-hidden">
                {featured.img && !featured.img.startsWith("REPLACE") ? (
                  <img
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={featured.img}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A1E] to-[#1a3d2b]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center relative z-10">
                <div className="font-label text-xs uppercase tracking-[0.2em] text-primary-container mb-4 font-bold">
                  Featured Work
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-tertiary leading-tight mb-6">
                  {featured.title}
                </h2>
                <p className="text-on-surface-variant text-lg mb-8 font-light leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6 text-xs font-label uppercase tracking-widest text-outline mb-10">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 bg-outline rounded-full" />
                  <span>{featured.readTime}</span>
                  <span className="w-1 h-1 bg-outline rounded-full" />
                  <span className="text-primary">{featured.tag}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-bold italic group/btn">
                  Read our thoughts here
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Grid — shown when there are additional posts */}
        {rest.length > 0 && (
          <section className="px-6 max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h3 className="font-display text-3xl font-bold text-tertiary">Latest <span className="italic font-light">Thoughts</span></h3>
              <div className="h-px flex-1 mx-8 bg-outline-variant opacity-20 hidden md:block" />
              <span className="font-label text-xs uppercase tracking-widest text-outline">Archive / 2026</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rest.map(({ slug, title, excerpt, tag, img }) => (
                <Link key={slug} href={`/blog/${slug}`} className="flex flex-col bg-surface-container rounded-xl p-8 transition-all hover:bg-surface-container-high ghost-border group cursor-pointer">
                  <div className="aspect-video w-full mb-8 overflow-hidden rounded-lg bg-surface-container-lowest relative">
                    {img && !img.startsWith("REPLACE") ? (
                      <img alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src={img} />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0F2A1E] to-[#1a3d2b]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-2xl font-bold text-tertiary mb-4 leading-snug">{title}</h4>
                    <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-8">{excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                    <span className="text-[10px] font-label uppercase tracking-widest text-outline">{tag}</span>
                    <button className="material-symbols-outlined text-primary text-xl">north_east</button>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <PageBottom />
    </div>
  );
}
