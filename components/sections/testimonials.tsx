import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Malak pitched with remarkable composure on an international stage — her ability to translate a complex sustainability vision into a clear, compelling narrative set her apart among thousands.',
    name: 'RISE Program Mentor',
    role: 'Global Innovation Track',
    initials: 'RM',
  },
  {
    quote:
      'Her analytical rigor is exceptional. She treats data hygiene as non-negotiable, and the insights she surfaced from messy, multi-year datasets were both accurate and genuinely actionable.',
    name: 'Data Analytics Lead',
    role: 'Project Collaboration',
    initials: 'DA',
  },
  {
    quote:
      'Dependable under pressure. During on-site events she coordinated logistics, negotiated with partners, and kept every moving part on schedule without ever losing composure.',
    name: 'Enactus HITU Coordinator',
    role: 'Event Operations',
    initials: 'EC',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="Words from collaborators" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} as="article" className="h-full">
              <figure className="glass glass-hover flex h-full flex-col rounded-2xl p-7">
                <Quote className="h-8 w-8 text-rose/50" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-lavender">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line/60 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-espresso/50 font-mono text-xs text-gold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-cream">{t.name}</span>
                    <span className="block text-xs text-lavender">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
