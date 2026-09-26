import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const certs = [
  {
    title: 'DECI Program — First Year',
    badge: 'Program',
    image: 'https://i.postimg.cc/PJPmwhrk/Screenshot-2026-09-26-161526.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
    description: 'Completed foundational training in software fundamentals, networking concepts, and problem-solving methodologies under the Digital Egypt Cubs Initiative.',
  },
  {
    title: 'DECI Program — Second Year',
    badge: 'Advanced',
    image: 'https://i.postimg.cc/d10CbvCN/Screenshot-2026-09-26-161628.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
    description: 'Advanced technical specialization focusing on cybersecurity principles, data systems, and practical applied tech project development.',
  },
  {
    title: 'RISE Global Finalist (Top 500 of 100,000+)',
    badge: 'Global',
    image: 'https://i.postimg.cc/FRqYwSmC/Screenshot-2026-09-26-161727.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
    description: 'Recognized on an international scale for conceptualizing innovative, sustainable tech solutions with high community impact.',
  },
  {
    title: 'The Essentials of Digital Forensics: From Basics to Practice',
    badge: 'Forensics',
    image: 'https://i.postimg.cc/DZzpy8Hh/Screenshot-2026-09-26-162605.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
    description: 'Mastered cyber incident investigation workflows, evidence gathering protocols, and practical forensic analysis techniques at Mahara-Tech (ITI).',
  },
  {
    title: 'Star Girls Africa Graduate',
    badge: 'Hardware',
    image: 'https://i.postimg.cc/t4NHsnSm/Screenshot-2026-09-26-162722.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
    description: 'Intensive hands-on empowerment program focused on embedded systems, IoT prototyping, and female leadership in tech across Africa.',
  },
  {
    title: 'SBS Creative Team Recognition',
    badge: 'Creative',
    image: 'https://i.postimg.cc/HxJK9r2Z/Screenshot-2026-09-26-162853.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
    description: 'Acknowledged for outstanding visual communication, branding innovation, and multi-platform media strategy execution.',
  },
  {
    title: 'SBS Planner Recognition',
    badge: 'Operations',
    image: 'https://i.postimg.cc/cJC5dvVr/Screenshot-2026-09-26-162958.png', // ضعي رابط صورة الشهادة هنا
    link: '#',
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Certificates & Recognition"
          title="Credentials that back the work"
          subtitle="Verified credentials, specialized training programs, and recognized global achievements."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90} as="article" className="h-full">
              <div className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                {/* Certificate Image Slot */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-espresso/40">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-rose/30 bg-espresso/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-rose backdrop-blur">
                    {c.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-base leading-snug text-cream">{c.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-lavender">{c.description}</p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
