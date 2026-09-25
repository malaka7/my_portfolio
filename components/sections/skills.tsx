import { BarChart3, ShieldHalf, Cpu, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const groups = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    skills: [
      'Python (Pandas, NumPy, Matplotlib, Seaborn)',
      'Data Cleaning & Wrangling',
      'Exploratory Data Analysis (EDA)',
      'Database Design (ERD)',
    ],
  },
  {
    icon: ShieldHalf,
    title: 'Cybersecurity & Systems',
    skills: [
      'Network Security Fundamentals',
      'Cisco Packet Tracer',
      'Linux Terminal Operations',
      'Covert Channel Detection',
      'Digital Forensics Basics',
    ],
  },
  {
    icon: Cpu,
    title: 'Hardware & IoT',
    skills: [
      'Arduino Hardware Integration',
      'LDR Sensor Applications',
      'Technical Engineering Drawing',
    ],
  },
  {
    icon: Users,
    title: 'Leadership & Soft Skills',
    skills: [
      'Global Pitching & Presentation',
      'Team Collaboration',
      'Event Logistics & Negotiation',
      'Active Listening',
      'Creative Ideation',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A versatile technical toolkit"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80} as="article" className="h-full">
              <div className="glass glass-hover h-full rounded-2xl p-7">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl border border-line bg-espresso/50 p-2.5 text-gold">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-cream">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-line bg-espresso/40 px-3 py-1.5 text-xs text-lavender transition-colors hover:border-rose/40 hover:text-cream"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
