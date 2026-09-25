import { GraduationCap, BookOpen } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const coursework = [
  'Network Fundamentals',
  'Digital Forensics',
  'Linux System Operations',
  'Database Design (ERD)',
  'Hardware Integration',
]

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <Reveal className="mt-14">
          <article className="glass glass-hover overflow-hidden rounded-2xl p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-5">
                <div className="inline-flex shrink-0 rounded-2xl border border-gold/25 bg-espresso/50 p-4 text-gold">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-cream">
                    Helwan International Technological University (HITU)
                  </h3>
                  <p className="mt-2 text-lavender">
                    Bachelor&apos;s Degree in Cybersecurity — Second-Year Student
                  </p>
                  <span className="mt-3 inline-flex items-center rounded-full border border-line bg-espresso/50 px-3 py-1 font-mono text-xs text-gold">
                    Expected: 2029
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-line/60 pt-6">
              <div className="flex items-center gap-2 text-sm font-medium text-cream">
                <BookOpen className="h-4 w-4 text-rose" /> Key Coursework
              </div>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-lg border border-line bg-espresso/40 px-3 py-1.5 font-mono text-xs text-lavender"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
