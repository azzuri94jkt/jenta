import { notFound } from "next/navigation";
import InnerNav from "@/components/InnerNav";
import { PageBottom } from "@/components/Footer";
import { POSTS } from "../page";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

const ARTICLES: Record<string, React.ReactNode> = {
  "retail-brand-50m-arr-no-ai-engineer": (
    <div className="space-y-8 text-white/80 text-lg leading-relaxed font-body">
      <p>
        During my time working in eCommerce, the biggest topic of conversation was &lsquo;Unified Commerce&rsquo;, a term I heard frequently through the Shopify sphere.
      </p>
      <p>
        Fragmentation was and is no longer an option. I often saw large scale brands hire multiple eComm coordinators whose primary job really was to make sure orders were syncing between online, retail and their ERP or OMS. Let&apos;s be real, whoever had to do that endured what was probably a rather mind-numbing job.
      </p>
      <p>
        Then came the revolution of API order syncing and routing, meaning that an eComm coordinator&apos;s job was just to deal with any red flags, an order that couldn&apos;t be synced due to bad data or a duplication.
      </p>
      <p>
        Then came AI. AI can now sit in the integration layer and remove basic blockers, amend orders and customer data as it flows through, whilst segmenting customers ready for marketing tools.
      </p>
      <p>
        Though still reactive. Not many brands are looking into this layer and thinking about proactive AI systems, and this comes down to system readiness and hiring (no legit, not just because I am a recruiter).
      </p>
      <p>
        I have researched the living hell out of SMB and enterprise Aussie eComm brands in particular, trying to understand who owns AI tooling or agent orchestration. It&apos;s really not a thing, or at least not yet. Whereas SaaS and startups are hiring AI engineers and product engineers en masse (with lower profit margins), many eComm brands just aren&apos;t. In fact, many still view eComm and retail as a separate function that often competes with itself.
      </p>
      <p>
        I believe this is a massive opportunity cost and we could be only 12&ndash;18 months away from the first dedicated AI hires within eComm brands. If you are an eCommerce and retail business clocking $50M++ ARR, you need to be thinking about an AI engineer in your team.
      </p>
      <p>
        The upside is significant. The amount of data flowing through backend systems, in-store and online means a brand could be refining and automating on the go. Think iterating on customer segments, building custom landing pages for those segments, running automated cross-channel marketing campaigns, or powering live in-store recommendations through a chatbot that helps your sales reps in the moment. The list goes on. Seriously, I am not technical and I could think of another 10 things a brand could automate.
      </p>
      <p>
        I hope I don&apos;t sound too controversial when I say this. If you are clocking the numbers mentioned above and you aren&apos;t thinking about who is heading up your AI practice in-house, you could be playing catchup in 12&ndash;24 months.
      </p>
    </div>
  ),
  "embrace-the-age-of-experimentation": (
    <div className="space-y-8 text-white/80 text-lg leading-relaxed font-body">
      <p>
        Nearly every hiring manager I sit down with has two immediate questions for me:
      </p>
      <ol className="list-decimal list-inside space-y-2 pl-4">
        <li>How&apos;s the market?</li>
        <li>How are other companies hiring at the moment?</li>
      </ol>
      <p>
        I&apos;d like to focus on the second question for this article. Firstly, it&apos;s important to understand why this question is being asked in the first place.
      </p>
      <p>
        You&apos;d think it&apos;d be pretty simple right? We&apos;ve been through the whole Agile transformation, moving from traditional waterfall and large teams through to cross-functional and leaner squads. Most technology teams had embraced this way of working and arguably, tech had hit its stride (thanks Spotify). In fact, post Covid, teams and overall communication had become so efficient that many leading companies such as Atlassian or Deel had these squads working async.
      </p>
      <p>
        However things have only evolved at a lightning pace. 2023 saw many technology companies reset amidst an increase in interest rates globally. 2024 saw the first iterations of LLMs whereby companies en masse were beginning to wonder if this AI thing could be the real deal. Fast forward to today, and it&apos;s fair to say 2026 is the final boss (so far) that maybe we didn&apos;t really ask for. Did I mention the instability thanks to global conflicts, rising fuel prices and rogue billionaires suggesting Super AGI is just around the corner?
      </p>
      <p>
        No seriously, I wouldn&apos;t want to be in a hiring manager&apos;s shoes right now. There is no playbook. We&apos;re all moving by the skin of our teeth, wondering about the next move, what is the right way to hire, the right way to mitigate that risk? Now this is a conversation in itself entirely which I will write another article on. Though in short: companies still need to hire, still need to grow. Standing still is a choice in itself, posing its own risks and rewards.
      </p>
      <p className="text-white font-semibold">
        Now that I&apos;ve set the scene, we can get cracking into the fun stuff. How are companies actually hiring?
      </p>

      {/* Section 1 */}
      <div className="pt-4">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6">
          1. Keep things the same, though build out an AI innovation / process improvement team
        </h2>
        <div className="space-y-6">
          <p>
            We&apos;ve actually got a couple of clients working with this model at the moment. It&apos;s really interesting and I would say a pretty clever way to not ruffle the feathers of change too much whilst embracing the experimentation.
          </p>
          <p>
            This is what it looks like: hire out an innovation squad that might comprise of AI Product Engineers, Product Managers and process improvement/change folk. This is a squad that sits in its own line of reporting, reporting into the CPO or direct into the CTO.
          </p>
          <p>
            This team can have a couple of core functions, namely working closely with engineering or other departments, mapping out lines of communication, integrations or just general processes and thus build out agentic workflows that could reduce manual work for the rest of the business. Another core function could be the ability to take business, tech stack and product context and be able to spin up prototypes and MVPs quickly. This would allow a business to spin up new features at a lightning pace, throw out what doesn&apos;t work and push what does into production for the core squads to build out.
          </p>
          <p>
            Downsides? Well, for one it&apos;s pretty hard to measure KPIs and thus ROI on a squad like this. Another thing is that a lot of businesses want these people. Those deep agentic AI nerds, you know exactly who I am talking about. Your mate who won&apos;t shut up about every Claude update, that person who is running 5 local Mac machines with its own instance of Claude dispatch and OpenClaw. They won&apos;t sleep, they love it, they breathe it. They are the AI overlords. Yeah well, the bad news is that their salaries are through the roof and they are spoilt for choice as companies try to get ahead of this thing.
          </p>
          <p>
            Finally, you might get a bit of resistance from current employees. What? Seriously? I get a talking to once I hit my token limit whilst that AI innovation team gets to vibe code in the golden room in their corner of the office? What could go wrong.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="pt-4">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6">
          2. Add an AI Engineer / Product Engineer into each of your squads
        </h2>
        <div className="space-y-6">
          <p>
            Now, on the face of it this seems like a really logical approach. This is a fantastic way to not change things too much whilst simultaneously empowering your squads to embrace AI engineering.
          </p>
          <p>
            Much in the same way as the above, your AI engineer works closely with that product manager to spin prototypes, drive automations for the rest of the squad and can mentor the team on AI tooling.
          </p>
          <p>
            Downsides? This is extremely costly, with these engineers looking for upwards of $200k+, a typical SME could be looking at $1M+ in these yearly salaries alone. Furthermore, you&apos;d still want to hire a Head of AI Engineering for example to ensure cross-collaboration between these new hires and some kind of consistency across the board.
          </p>
          <p>
            Also let&apos;s not forget to mention. You&apos;d get some (a lot) of resistance from the current team once they find out that their higher salary bandings are at the lower end for this new team. That&apos;s the lightest way of putting it&hellip;
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="pt-4">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6">
          3. Break up your squads into way smaller teams, potentially 1:1 Product Manager to Engineer
        </h2>
        <div className="space-y-6">
          <p>
            Now we are really getting into some experimental ways of working. If your company has the luxury of being lean yet freshly funded with an early stage codebase, then your options really start to increase and this could be one of them.
          </p>
          <p>
            One company we&apos;ve spoken to recently has suggested that they are thinking of having pairs instead of squads, comprising of a Product Manager working alongside an AI Staff Engineer. Weird huh? The idea is that a pair, replacing a squad, would own a feature set within the product. The pair would be able to build, test, iterate at speed, with the PM owning the product roadmap and the engineer handling the codebase.
          </p>
          <p>
            In theory, it sounds clever. With a maturing codebase, a small and nimble duo can try and test new MVPs with the current codebase, get feedback quickly, scrap or deploy. However this likely suits an early stage company that doesn&apos;t have a huge user base just yet and can pivot the product easily. You also risk quite a bit of fragmentation in your codebase. With teams writing and rewriting at a fast pace, quality control and consistency becomes integral. In short, you better have a trusting and strong engineering leader at the helm!
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="pt-4">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6">
          4. Keep your team the same, just increase spend and training into AI tooling
        </h2>
        <div className="space-y-6">
          <p>
            Last but not least, an option that is being taken up by many hiring managers and arguably the safest option: keep the team the same but significantly increase AI tooling spend and training.
          </p>
          <p>
            The theory is that AI Engineers is a newly coined term to describe a 10x software engineer. These engineers, take nothing away from them, have spent the last couple of years absolutely honing in on their skills of agentic tooling, multi-agent orchestration and straight up vibe coding. However they are still software engineers at the crux of it. Their years of experience coding only means that AI is a means to further their capabilities.
          </p>
          <p>
            What am I trying to say? Well, you also have software engineers with years of experience in your team currently and what they lack is the AI skills. They might not have the time, money (for tokens) nor the desire to vibe deep into the night after work. So a workplace giving them that funding, time and training means that same workplace gets to benefit from a team already with that expertise in place, though now slowly fostering their own 10x engineer culture.
          </p>
          <p>
            The downside? Well it&apos;s really just risk. Can you risk the time and resources to give some time back to your current team and trust that they have the drive and willingness to learn. Will they love it or will they resent it? Should you have just hired that AI software engineering team instead?
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="pt-4 border-t border-white/10">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-6">To close</h2>
        <div className="space-y-6">
          <p>
            I will say, there is currently no right or wrong approach. Every approach comes with trade-offs. The plan might be deemed redundant once another ridiculous AI model comes out or we realise it has plateaued, or perhaps the token costs mean it&apos;s a tool that no longer makes sense.
          </p>
          <p>
            However the numbers are clear. Companies that label themselves as AI, or embrace AI tooling, command higher valuations. Furthermore, software engineers with such expertise command higher salaries. This is a situation of demand and supply; the demand for AI is outpacing the supply whether that be in the way of data centre costs, salaries or desire to be invested into. The choice to not automate and not have such a specialist team internally could prove to be extremely costly down the line.
          </p>
          <p>
            We are working with some incredible companies who, on the outside seem like they know what they are doing, but they too are dealing with this uncertainty. Feel free to reach out if you have any questions. We are happy to help however we can!
          </p>
        </div>
      </div>
    </div>
  ),
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  const content = ARTICLES[slug];

  if (!post || !content) notFound();

  return (
    <div className="bg-background text-white min-h-screen flex flex-col">
      <InnerNav />

      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        {post.img && !post.img.startsWith("REPLACE") ? (
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0F2A1E] via-[#1a3d2b] to-[#0a1f15]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <main className="max-w-3xl mx-auto px-6 md:px-8 pb-32 -mt-32 relative z-10">
        {/* Meta */}
        <div className="flex items-center gap-4 text-[11px] font-label uppercase tracking-widest text-outline mb-6">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-outline rounded-full" />
          <span>{post.readTime}</span>
          <span className="w-1 h-1 bg-outline rounded-full" />
          <span className="text-primary-container">{post.tag}</span>
        </div>

        {/* Title */}
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-16">
          {post.title}
        </h1>

        {/* Body */}
        {content}
      </main>

      <PageBottom />
    </div>
  );
}
