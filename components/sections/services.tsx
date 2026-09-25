import { Filter, ScanSearch, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Filter,
    title: 'Data Cleaning & Wrangling',
    body: 'Transforming dirty, fragmented data into structured, ready-to-analyze datasets via Python.',
  },
  {
    icon: ScanSearch,
    title: 'Exploratory Data Analysis (EDA)',
    body: 'Revealing behavioral trends and actionable findings through statistical dashboards.',
  },
  {
    icon: ShieldCheck,
    title: 'Security-First System Logic',
    body: 'Consulting on intrusion detection basics, ERD database design, and hardware-sensor prototypes.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Services" title="How I can help your team" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} as="article" className="h-full">
              <div className="glass glass-hover group relative h-full overflow-hidden rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl border border-line bg-espresso/50 p-3 text-gold">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-line transition-colors group-hover:text-rose" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-lavender">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
