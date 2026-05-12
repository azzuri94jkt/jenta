"use client";

import InnerNav from "@/components/InnerNav";
import { PageBottom } from "@/components/Footer";
import { useRef } from "react";

const TEAM = [
  {
    name: "Sami Wareeth",
    role: "Founder",
    img: "REPLACE_WITH_CLOUDINARY_URL",
    bio: [
      "I have spent the last eight-plus years as a technical recruiter, placing critical roles into SaaS, hardware and emerging tech businesses across every stage of funding, from pre-seed through to Series D. Most recently I worked internally with leading eCommerce agency DotCollective, where I grew the team out by 40-plus hires and designed the talent engine alongside their HR processes.",
      "I take the responsibility seriously, because the people you bring in either stretch or compress your runway. Outside of recruitment, I am deeply interconnected in the Australian scaleup ecosystem and I genuinely enjoy helping businesses grow, whether that be through hiring or through funding.",
    ],
    extra: {
      heading: "Why I built Jenta",
      body: "I speak to a lot of founders, and a familiar pattern kept emerging. Many were not yet ready to hire because they were mid-raise. Previously I would close the conversation and circle back once the round had landed. However I wanted to add more value, so I started building out a network of capital advisories to bring into these conversations earlier. The result has been a stronger relationship with the founder and a more holistic view for everyone involved. Advisories now lean on me to understand how a team is comprised and where it needs strengthening, which gives investors a clearer picture of the business. After all, a business is nothing without its people, and capital and talent are two sides of the same growth coin.",
    },
  },
  {
    name: "Team Member",
    role: "Coming Soon",
    img: "",
    bio: ["More team members coming soon."],
    extra: null,
  },
  {
    name: "Team Member",
    role: "Coming Soon",
    img: "",
    bio: ["More team members coming soon."],
    extra: null,
  },
];

export default function TeamPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 600 : -600, behavior: "smooth" });
  };

  return (
    <div className="font-body min-h-screen flex flex-col" style={{ background: "#f0f4f1" }}>
      {/* Video background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dp7duapaz/video/upload/q_auto/f_auto/v1778628220/10650639-hd_1920_1080_30fps_jke6mx.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft light overlay so text stays readable */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <InnerNav />

        <main className="pt-32 pb-24 flex-1">
          {/* Heading */}
          <div className="px-8 max-w-7xl mx-auto mb-16">
            <div className="text-[#0F2A1E] font-display uppercase tracking-[0.2em] text-sm mb-4 font-bold opacity-70">Leadership</div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-[#0F2A1E] leading-[1.1]">
              Meet the <span className="italic font-light">Team.</span>
            </h1>
          </div>

          {/* Carousel */}
          <div className="relative px-8 max-w-7xl mx-auto">
            {/* Scroll buttons */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 border border-[#0F2A1E]/10 items-center justify-center text-[#0F2A1E] hover:bg-[#0F2A1E] hover:text-white transition-all shadow-md"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 border border-[#0F2A1E]/10 items-center justify-center text-[#0F2A1E] hover:bg-[#0F2A1E] hover:text-white transition-all shadow-md"
              aria-label="Next"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <p className="md:hidden text-[#0F2A1E]/50 text-xs font-label uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              Swipe to explore
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </p>

            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 carousel-container"
            >
              {TEAM.map((member, i) => (
                <div
                  key={i}
                  className="flex-none w-[85vw] md:w-[560px] snap-center bg-white/80 backdrop-blur-md border border-white/60 rounded-xl overflow-hidden shadow-xl"
                >
                  {/* Photo */}
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    {member.img && !member.img.startsWith("REPLACE") ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#0F2A1E]/20" style={{ fontSize: "6rem" }}>person</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <div className="text-[#0F2A1E] font-label text-xs uppercase tracking-[0.2em] mb-2 font-bold opacity-60">{member.role}</div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0F2A1E] mb-6">{member.name}</h2>

                    <div className="space-y-4 text-[#0F2A1E]/75 text-sm leading-relaxed">
                      {member.bio.map((p, j) => <p key={j}>{p}</p>)}
                    </div>

                    {member.extra && (
                      <div className="mt-8 pt-8 border-t border-[#0F2A1E]/10">
                        <h3 className="font-display text-lg font-bold text-[#0F2A1E] mb-4 italic">{member.extra.heading}</h3>
                        <p className="text-[#0F2A1E]/70 text-sm leading-relaxed">{member.extra.body}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <PageBottom />
      </div>
    </div>
  );
}
