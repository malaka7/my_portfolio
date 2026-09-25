import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-rose">
        <span className="h-px w-6 bg-rose/60" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-base leading-relaxed text-lavender">{subtitle}</p>}
    </Reveal>
  )
}
