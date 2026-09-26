import Image from 'next/image'
import { ExternalLink, Code2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'Egypt Food Price Analysis',
    category: 'Data Analytics',
    image: 'https://i.postimg.cc/DZx42Dhb/Code-Generated-Image.png',
    github: 'https://github.com/malaka7/-Egypt-Food-Price-Analysis', // رابط المشروع على جيت هب هنا
    description:
      'Full-cycle data analytics in Python. Built automated cleaning pipelines to normalize messy multi-year commodity indices, revealing price volatility and inflation patterns across staple foods in Egypt.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Data Cleaning Pipelines'],
  },
  {
    title: 'Sleep Factor Analytics: Variables Affecting Rest',
    category: 'Data Analytics',
    image: 'https://i.postimg.cc/jSY2rKf1/Code-Generated-Image-(1).png',
    github: 'https://github.com/malaka7/Sleep-Analytics', // رابط المشروع على جيت هب هنا
    description:
      'Investigated variables influencing sleep duration and rest quality (screen time, caffeine intake, stress, physical activity) using multivariate EDA.',
    tech: ['Python', 'Seaborn', 'Multivariate EDA', 'Statistical Modeling'],
  },
  {
    title: 'Social Media Addiction Patterns',
    category: 'Data Analytics',
    image: 'https://i.postimg.cc/DZRJJGWF/Code-Generated-Image-(2).png',
    github: 'https://github.com/malaka7/Social-Media-Addiction', // رابط المشروع على جيت هب هنا
    description:
      'Analyzed user behavior datasets to uncover screen-time addiction thresholds, emotional correlates, and digital usage loops.',
    tech: ['Python', 'Statistical Analysis', 'Data Visualization'],
  },
  {
    title: 'Null Pulse — Arduino-Based Intrusion Detection System',
    category: 'Hardware & Security',
    image: 'https://i.postimg.cc/SQ7kz8z4/Whats-App-Image-2026-09-26-at-3-30-42-PM.jpg',
    github: 'https://github.com/malaka7/Null-pulse', // رابط المشروع على جيت هب هنا
    description:
      'Engineered an IDS prototype to detect unauthorized access through optical covert channels on air-gapped devices with real-time alerting.',
    tech: ['Arduino C++', 'LDR Sensors', 'Optical Covert Channel Defense'],
  },
  {
    title: 'Smart Parking System',
    category: 'Systems & Database',
    image: 'https://i.postimg.cc/PrVGmMfs/Whats-App-Image-2026-09-26-at-3-30-43-PM.jpg',
    github: 'https://github.com/malaka7/Parking-System', // رابط المشروع على جيت هب هنا
    description:
      'Co-designed an automated traffic and parking management solution; architected relational database structure using ERD principles for real-time allocation.',
    tech: ['Database Architecture (ERD)', 'Hardware-Software Integration'],
  },
  {
    title: 'Eco Mindset — RISE Global Finalist (Top 500 of 100,000+)',
    category: 'Global Innovation',
    image: 'https://i.postimg.cc/nr64J5YZ/Screenshot-2026-09-26-153653.png',
    github: 'https://github.com/malaka7/Eco-Mindset', // رابط المشروع على جيت هب هنا
    description:
      'Conceptualized a sustainability platform promoting environmental habits and recycling awareness; pitched internationally to reach top 500 status.',
    tech: ['Project Architecture', 'Sustainability Ideation'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Projects Showcase"
          title="Selected work across data, hardware & security"
          subtitle="A curated portfolio of end-to-end projects — from automated data pipelines to physical intrusion-detection prototypes."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} as="article" className="h-full">
              <div className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                {/* Visual slot */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-gold/30 bg-espresso/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-gold backdrop-blur">
                    {p.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg leading-snug text-cream">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-lavender">{p.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-line bg-espresso/40 px-2 py-1 font-mono text-[10px] text-lavender"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-3 border-t border-line/60 pt-4">
                    <span
                      className="inline-flex cursor-not-allowed items-center gap-1.5 text-xs font-semibold text-lavender/40 select-none"
                      title="Live demo coming soon"
                    >
                      <ExternalLink className="h-3.5 w-3.5 opacity-50" /> Demo (Soon)
                    </span>

                    <span className="text-line">·</span>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-lavender transition-colors hover:text-cream"
                    >
                      <Code2 className="h-3.5 w-3.5" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
