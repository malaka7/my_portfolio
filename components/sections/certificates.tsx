import { Award, FileBadge, GraduationCap, Cpu, Languages, Star, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const certs = [
  {
    icon: Award,
    title: 'RISE Global Finalist (Top 500 of 100,000+)',
    issuer: 'Global Recognition for Innovation & Sustainability',
    badge: 'Global',
  },
  {
    icon: FileBadge,
    title: 'The Essentials of Digital Forensics: From Basics to Practice',
    issuer: 'Mahara-Tech (ITI, 2026)',
    badge: 'Forensics',
  },
  {
    icon: GraduationCap,
    title: 'DECI Program (2-Year Professional Track)',
    issuer: 'Digital Egypt Cubs Initiative',
    badge: 'Program',
  },
  {
    icon: Cpu,
    title: 'Star Girls Africa Graduate',
    issuer: 'Leadership & Hardware-Software Electronics Integration',
    badge: 'Hardware',
  },
  {
    icon: Languages,
    title: 'English Language Proficiency Program',
    issuer: 'Vodafone Academy',
    badge: 'Language',
  },
  {
    icon: Star,
    title: 'Best Member Award',
    issuer: 'SBS Creative Team',
    badge: 'Award',
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Certificates & Recognition"
          title="Credentials that back the work"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90} as="article" className="h-full">
              <div className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                {/* preview slot 4:3 */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(80% 80% at 50% 30%, rgba(229,195,150,0.14), transparent 60%), #180F1E',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/30 bg-espresso/60 text-gold transition-transform duration-500 group-hover:scale-110">
                      <c.icon className="h-9 w-9" />
                    </div>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full border border-rose/30 bg-espresso/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-rose backdrop-blur">
                    {c.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-base leading-snug text-cream">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-lavender">{c.issuer}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold transition-colors hover:text-cream"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> View Certificate
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
