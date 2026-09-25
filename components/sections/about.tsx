import { UserRound, Layers, Target, BarChart3, Compass, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    icon: UserRound,
    title: 'Who I Am',
    body: 'Malak El-Wafy, Cybersecurity undergraduate at Helwan International Technological University (HITU) and a RISE Global Finalist — Top 500 out of 100,000+ applicants worldwide.',
  },
  {
    icon: Layers,
    title: 'What I Offer',
    body: 'Full-cycle Python data cleaning and exploratory analytics, digital forensics fundamentals, hardware-software integration, and cross-functional leadership.',
  },
  {
    icon: Target,
    title: 'Target Audience',
    body: 'Tech teams, research groups, security operations, and data analytics labs seeking rigorous problem solvers with strong communication.',
  },
  {
    icon: Compass,
    title: 'Personal Philosophy',
    body: 'Unlocking actionable intelligence from messy datasets while designing secure systems that protect physical and digital assets.',
  },
]

const metrics = [
  { value: 'Top 500', label: 'Global Finalist' },
  { value: '6+', label: 'Technical Projects' },
  { value: '3+', label: 'Years in Operations & Strategy' },
]

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="A rigorous mind for secure, data-driven systems"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} as="article" className="h-full">
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <div className="inline-flex rounded-xl border border-line bg-espresso/50 p-2.5 text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-cream">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-lavender">{c.body}</p>
              </div>
            </Reveal>
          ))}

          {/* Metrics card */}
          <Reveal delay={320} as="article" className="h-full">
            <div className="glass glass-hover flex h-full flex-col justify-between rounded-2xl p-6">
              <div className="inline-flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-rose" />
                <h3 className="font-serif text-xl text-cream">Numbers &amp; Metrics</h3>
              </div>
              <dl className="mt-4 space-y-4">
                {metrics.map((m) => (
                  <div key={m.label} className="flex items-baseline gap-3 border-b border-line/60 pb-3 last:border-0">
                    <dt className="font-mono text-2xl text-gold">{m.value}</dt>
                    <dd className="text-sm text-lavender">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-rose/40 px-6 py-3 text-sm font-semibold text-rose transition-colors hover:bg-rose/10"
          >
            Let&apos;s Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
