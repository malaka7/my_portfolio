import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const timeline = [
  {
    role: 'Creative Specialist',
    org: 'SBS',
    period: '2023 – Present',
    body: 'Collaborated with creative teams to design and pitch campaigns; awarded the Best Member Award.',
    tag: 'Creative',
  },
  {
    role: 'Event Planning Member',
    org: 'Enactus HITU',
    period: '2025 – Present',
    body: 'Coordinated on-site logistics, handled attendee inquiries, and negotiated with suppliers and partners.',
    tag: 'Operations',
  },
  {
    role: 'Operations Management',
    org: 'SPURT GLOBAL',
    period: '2022 – 2023',
    body: 'Executed operational workflows and assisted cross-team coordination.',
    tag: 'Management',
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Work Experience" title="A track record of leadership" />

        <div className="relative mt-14 ml-3 md:ml-6">
          {/* vertical line */}
          <span
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, #E5C396, #E07A9A, transparent)' }}
            aria-hidden="true"
          />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.org} delay={i * 100} as="article" className="relative pl-8 md:pl-12">
                <span
                  className="absolute -left-[6px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-espresso"
                  aria-hidden="true"
                />
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl text-cream">{t.role}</h3>
                      <p className="text-sm text-gold">{t.org}</p>
                    </div>
                    <span className="rounded-full border border-line bg-espresso/50 px-3 py-1 font-mono text-xs text-lavender">
                      {t.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-lavender">{t.body}</p>
                  <span className="mt-4 inline-block rounded-md border border-rose/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-rose">
                    {t.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
