"use client";

import InnerNav from "@/components/InnerNav";
import { PageBottom } from "@/components/Footer";
import { useRef } from "react";

const TEAM = [
  {
    name: "Sami Wareeth",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/samiwareeth/",
    img: "https://res.cloudinary.com/dp7duapaz/image/upload/q_auto/f_auto/v1778630412/Sami_1-22_1_2_josuvg.jpg",
    bio: [
      "I have spent the last nine-plus years as a technical recruiter, placing critical roles into SaaS, hardware and emerging tech businesses across every stage of funding, from pre-seed through to Series D. I enjoy building community and run multiple meetups to bring the wider tech community together here in Melbourne.",
      "I believe humans and capital are 2 sides of the same growth coin that will either ensure a company excels or stalls.",
    ],
    extra: {
      heading: "Why I built Jenta",
      body: "I speak to a lot of founders, and a familiar pattern kept emerging. Many were not yet ready to hire because they were mid-raise. Previously I would close the conversation and circle back once the round had landed. However I wanted to add more value, so I started building out a network of capital advisories to bring into these conversations earlier.\n\nThe result has been a stronger relationship with the founder and a more holistic view for everyone involved. Advisories now lean on me to understand how a team is comprised and where it needs strengthening, which gives investors a clearer picture of the business.",
    },
  },
  {
    name: "Brad Howard",
    role: "Growth Partner — North America & Europe",
    linkedin: "https://www.linkedin.com/in/brad-b-howard/",
    img: "https://res.cloudinary.com/dp7duapaz/image/upload/q_auto/f_auto/v1778630508/WhatsApp_Image_2026-05-12_at_10.36.03_nlgzmb.jpg",
    bio: [
      "My work sits at the intersection of growth, market expansion and go-to-market execution. Across SaaS, services and emerging technology businesses, I have helped companies think through how they reach new customers, enter new markets and build the commercial systems required to scale.",
      "I have been part of teams that went public, Forbes Fast 50 scale-ups and category-leading software environments, including HubSpot, where I consulted CEOs and founders on how to build revenue systems to scale their businesses. At Sinistar I led growth, leading expansion across North America and today I work closely with various teams to engineer go-to-market systems.",
    ],
    extra: {
      heading: "My role at Jenta",
      body: "As a Growth Partner for North America and Europe, my role at Jenta is to identify ambitious companies with strong potential and connect them into relevant advisory conversations. Many businesses are not short on ambition or product quality. They are often missing the right network, the right timing or the right partner to help unlock their next stage of growth.\n\nJenta sits at the intersection of founders, advisors, investors and operators. My focus is on expanding that ecosystem across North America and Europe by building trusted relationships with companies ready to grow, understanding what they need next and helping to make introductions that can move the business forward.",
    },
  },
  {
    name: "Hamish Keenan",
    role: "Growth Partner — Asia Pacific",
    linkedin: "https://www.linkedin.com/in/hamish-keenan-5194b352/",
    img: "",
    bio: [
      "Over ten years in the technology industry across APAC, I have worked with some of the region's leading SaaS and emerging tech businesses, including Remote, Culture Amp and Ansarada, in roles focused on business development, market expansion and enterprise sales.",
      "Growing up in Indonesia and building my career across Australia has given me a natural fluency in how business is done across cultures, which matters when you are helping companies enter new markets.",
    ],
    extra: {
      heading: "My role at Jenta",
      body: "The founders I have met throughout my career rarely struggled with product. They struggled with access: to the right networks, the right capital conversations and the right partners at the right time. That is exactly where Jenta operates, and why I joined.\n\nMy focus is on connecting ambitious emerging technology companies to advisory conversations across the Asia Pacific region. I bring a commercial operator's perspective: I know what revenue growth looks like from the inside, and I know what a strong introduction can unlock.",
    },
  },
];

export default function TeamPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 600 : -600, behavior: "smooth" });
  };

  return (
    <div className="text-white font-body min-h-screen flex flex-col">
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
            src="https://res.cloudinary.com/dp7duapaz/video/upload/q_auto/f_auto/v1778628605/14577738_1920_1080_60fps_iawkb2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <InnerNav />

        <main className="pt-32 pb-24 flex-1">
          {/* Heading */}
          <div className="px-8 max-w-7xl mx-auto mb-16">
            <div className="text-primary-container font-display uppercase tracking-[0.2em] text-sm mb-4 font-bold">Leadership</div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Meet the <span className="italic font-light">Team.</span>
            </h1>
          </div>

          {/* Carousel */}
          <div className="relative px-8 max-w-7xl mx-auto">
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-surface-container-low border border-white/10 items-center justify-center text-white hover:bg-primary-container hover:text-on-primary-container transition-all"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-surface-container-low border border-white/10 items-center justify-center text-white hover:bg-primary-container hover:text-on-primary-container transition-all"
              aria-label="Next"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <p className="md:hidden text-on-surface-variant/50 text-xs font-label uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
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
                  className="flex-none w-[85vw] md:w-[560px] snap-center bg-surface-container-low/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    {member.img && !member.img.startsWith("REPLACE") ? (
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0F2A1E] to-[#1a3d2b] flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-container/30" style={{ fontSize: "6rem" }}>person</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="text-primary-container font-label text-xs uppercase tracking-[0.2em] mb-2 font-bold">{member.role}</div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">{member.name}</h2>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary-container/80 hover:text-primary-container text-xs font-label uppercase tracking-widest transition-colors mb-6"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    <div className="space-y-4 text-white/75 text-sm leading-relaxed">
                      {member.bio.map((p, j) => <p key={j}>{p}</p>)}
                    </div>
                    {member.extra && (
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <h3 className="font-display text-lg font-bold text-primary-container mb-4 italic">{member.extra.heading}</h3>
                        <div className="space-y-4">
                          {member.extra.body.split("\n\n").map((para, k) => (
                            <p key={k} className="text-white/75 text-sm leading-relaxed">{para}</p>
                          ))}
                        </div>
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
