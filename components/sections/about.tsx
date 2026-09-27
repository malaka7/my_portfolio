import Image from 'next/image'
import { UserRound, Layers, Target, BarChart3, Compass, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    icon: UserRound,
    title: 'Who I Am',
    body: 'Malak El-Wafy, Cybersecurity undergraduate at Helwan International Technological University (HITU). Specializing in exploratory data analysis and Python data pipelines, having analyzed 5+ real-world datasets across 10,000+ data records while engineering secure hardware-software logic.',
  },
  {
    icon: Layers,
    title: 'What I Offer',
    body: 'Full-cycle Python data cleaning and exploratory analytics, digital forensics fundamentals, hardware-software integration, and cross-functional leadership.',
  },
  {
    icon: Target,
    title: 'Target Audience',
    body: 'Tech teams, security operations, and data analytics labs seeking rigorous problem solvers with strong communication.',
  },
  {
    icon: Compass,
    title: 'Personal Philosophy',
    body: 'For me, clean structure is non-negotiable. Whether architecting an anomaly-free dataset or hardening system logic, my obsession with meticulous order defines my work. I chose Data Analytics and Cybersecurity because they turn my need for absolute precision into impactful, secure solutions.',
  },
]

const metrics = [
  { value: 'Top 500', label: 'Global Finalist' },
  { value: '6+', label: 'Technical Projects' },
  { value: '3+', label: 'Years in Operations & Strategy' },
]

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Building cyber-resilient architectures through analytical precision."
        />

        {/* Layout: صورة طولية على اليسار + الكروت على اليمين */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* عمود الصورة */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delay={60}>
              <div className="glass glass-hover relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line/80 shadow-2xl">
                <Image
                  src="https://i.postimg.cc/PqqR64YT/Whats-App-Image-2026-09-27-at-7-25-18-PM.jpg" // ضعي رابط صورتك هنا
                  alt="Malak El-Wafy Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-gold/30 bg-espresso/80 p-4 backdrop-blur">
                  <div>
                    <span className="block font-serif text-base font-semibold text-cream">Malak El-Wafy</span>
                    <span className="block font-mono text-xs text-gold">Cybersecurity &amp; Analytics</span>
                  </div>
                  <span className="rounded-full border border-rose/30 bg-rose/10 px-2.5 py-1 font-mono text-[10px] text-rose">
                    HITU
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* عمود الكروت */}
          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {cards.map((c, i) => (
                <Reveal key={c.title} delay={i * 80} as="article" className="h-full">
                  <div className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                    <div className="inline-flex w-fit rounded-xl border border-line bg-espresso/50 p-2.5 text-gold">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg text-cream">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-lavender">{c.body}</p>
                  </div>
                </Reveal>
              ))}

              {/* Metrics card */}
              <Reveal delay={320} as="article" className="h-full sm:col-span-2">
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="inline-flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-rose" />
                    <h3 className="font-serif text-xl text-cream">Numbers &amp; Metrics</h3>
                  </div>
                  <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-line/60 bg-espresso/30 p-4 text-center sm:text-left"
                      >
                        <dt className="font-mono text-2xl font-semibold text-gold">{m.value}</dt>
                        <dd className="mt-1 text-xs text-lavender">{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal delay={120} className="mt-14 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-rose/40 px-6 py-3 text-sm font-semibold text-rose transition-colors hover:bg-rose/10"
          >
            Let&apos;s Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
