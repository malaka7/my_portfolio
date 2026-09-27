import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const timeline = [
  {
    role: 'Creative Specialist',
    org: 'SBS',
    period: '2023 – Present',
    image: 'https://i.postimg.cc/T3s8mF5b/486641939-660547663342631-7454392655926209984-n.jpg', // ضعي رابط صورتك مع تيم SBS هنا
    body: 'Collaborated with creative teams to design and pitch campaigns; awarded the Best Member Award.',
    tag: 'Creative',
  },
  {
    role: 'Event Planning Member',
    org: 'Enactus HITU',
    period: '2025 – Present',
    image: 'https://i.postimg.cc/R01j8FbM/Whats-App-Image-2026-09-27-at-7-19-06-PM.jpg', // ضعي رابط صورتك مع تيم Enactus هنا
    body: 'Coordinated on-site logistics, handled attendee inquiries, and negotiated with suppliers and partners.',
    tag: 'Operations',
  },
  {
    role: 'Operations Management',
    org: 'SPURT GLOBAL',
    period: '2022 – 2023',
    image: 'https://i.postimg.cc/jdjkXvbZ/Screenshot-2026-09-27-190654.png', // ضعي رابط صورتك في Spurt Global هنا
    body: 'Executed operational workflows and assisted cross-team coordination.',
    tag: 'Management',
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Work Experience" title="A track record of leadership" />

        <div className="mt-16 space-y-16">
          {timeline.map((t, i) => (
            <Reveal key={t.org} delay={i * 100} as="article">
              <div className="glass glass-hover overflow-hidden rounded-3xl border border-line/70 transition-all duration-300">
                {/* مساحة الصورة الكبيرة للنشاط / التيم */}
                <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden border-b border-line bg-espresso/40">
                  <Image
                    src={t.image}
                    alt={`${t.org} - ${t.role}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute left-5 top-5 rounded-full border border-gold/30 bg-espresso/70 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gold backdrop-blur">
                    {t.tag}
                  </span>
                </div>

                {/* التفاصيل والمعلومات بنفس التنسيق */}
                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-cream">{t.role}</h3>
                      <p className="mt-1 text-base font-medium text-gold">{t.org}</p>
                    </div>
                    <span className="rounded-full border border-line bg-espresso/50 px-3.5 py-1.5 font-mono text-xs text-lavender">
                      {t.period}
                    </span>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-lavender">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
