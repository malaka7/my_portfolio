import { MessageSquareDashed } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

// مصفوفة فارغة جاهزة لإضافة الآراء مستقبلاً
const testimonials: { quote: string; name: string; role: string; initials: string }[] = []

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading 
          eyebrow="Testimonials" 
          title="Words from collaborators" 
          subtitle="Feedback and references from team leads, mentors, and project partners."
        />

        <div className="mt-14">
          {testimonials.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 100} as="article" className="h-full">
                  <figure className="glass glass-hover flex h-full flex-col rounded-2xl p-7">
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
          ) : (
            /* كارت أنيق يظهر طالما أن القائمة فارغة */
            <Reveal>
              <div className="glass flex flex-col items-center justify-center rounded-2xl border border-dashed border-line/80 px-6 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-espresso/40 text-gold/70">
                  <MessageSquareDashed className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-medium text-cream">
                  Testimonials Updating Soon
                </h3>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-lavender/70">
                  Collaborator references and project reviews are currently being compiled and will be added here shortly.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
