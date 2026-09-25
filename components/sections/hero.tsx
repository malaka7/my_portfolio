import Image from 'next/image'
import { ArrowRight, Download, ShieldCheck, LineChart, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section id="cover" className="relative min-h-screen pt-32 pb-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-surface px-3 py-1.5 font-mono text-xs text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Cybersecurity · Data Analytics · Innovation
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              Malak El-Wafy
              
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-gradient-gold font-serif text-xl italic sm:text-2xl">
              Cybersecurity Specialist &amp; Data Analyst
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-lavender lg:mx-0">
              Bridging the gap between proactive cybersecurity defense, hardware-software logic,
              and deep data analytics.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-espresso transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Explore Showcase
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/malak-el-wafy-cv.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-lavender lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Security Mindset
              </span>
              <span className="inline-flex items-center gap-2">
                <LineChart className="h-4 w-4 text-gold" /> Data-Driven
              </span>
            </div>
          </Reveal>
        </div>

        {/* Avatar */}
        <Reveal delay={200} className="flex-1">
          <div className="relative mx-auto aspect-square w-64 max-w-full sm:w-80 lg:w-[26rem]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 50% 40%, rgba(229,195,150,0.16), transparent 60%)',
              }}
            />
            <div
              className="relative h-full w-full overflow-hidden rounded-full"
              style={{ border: '1px solid rgba(229, 195, 150, 0.25)' }}
            >
              <Image
                src="https://i.postimg.cc/pXscCkDk/Whats-App-Image-2026-09-26-at-1-09-36-AM.jpg"
                alt="Portrait illustration of Malak El-Wafy"
                fill
                priority
                sizes="(max-width: 768px) 320px, 416px"
                className="object-cover"
              />
            </div>
            {/* orbiting micro-badges */}
            <div className="glass absolute -right-2 bottom-12 rounded-xl px-3 py-2 text-xs text-cream sm:-right-6">
              <span className="font-mono text-rose">6+ Projects</span>
              <span className="block text-[10px] text-lavender">End-to-end</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
