import { Sparkles, ShieldHalf, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const items = [
  {
    icon: Sparkles,
    no: '01',
    title: 'Data Integrity & Cleanliness First',
    body: 'Dedicated to rigorous data hygiene, cleansing noisy real-world datasets with Python (Pandas / NumPy) for bias-free analysis.',
  },
  {
    icon: ShieldHalf,
    no: '02',
    title: 'Cybersecurity & Forensic Mindset',
    body: 'Grounded in digital forensics fundamentals, network routing, and covert intrusion detection logic.',
  },
  {
    icon: Globe2,
    no: '03',
    title: 'Proven Global Innovation & Leadership',
    body: 'Backed by RISE Global Finalist recognition, blending technical architecture with proven pitching and event coordination.',
  },
]

export function USP() {
  return (
    <section id="usp" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Three pillars of dependable expertise"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.no} delay={i * 100} as="article" className="h-full">
              <div className="glass glass-hover group relative h-full overflow-hidden rounded-2xl p-7">
                <span className="pointer-events-none absolute -right-2 top-2 font-serif text-7xl text-line/70 transition-colors group-hover:text-gold/15">
                  {it.no}
                </span>
                <div className="inline-flex rounded-xl border border-line bg-espresso/50 p-3 text-rose">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-snug text-cream">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-lavender">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
