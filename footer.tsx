import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const jump = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Mail, href: 'mailto:mmamalakahmed2006@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+201141591859', label: 'Phone' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/malak-ahmed-079572245', label: 'LinkedIn' },
  { icon: GithubIcon, href: 'https://github.com/placeholder', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#cover" className="font-serif text-xl font-semibold text-cream">
              Malak El-Wafy
            </a>
            <p className="font-arabic mt-1 text-base text-gold" dir="rtl" lang="ar">
              ملك الوافي
            </p>
            <p className="mt-4 text-sm leading-relaxed text-lavender">
              Cybersecurity Specialist &amp; Data Analyst — bridging proactive defense,
              hardware-software logic, and deep data analytics.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
              Quick Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {jump.map((j) => (
                <li key={j.href}>
                  <a href={j.href} className="text-lavender transition-colors hover:text-cream">
                    {j.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-lavender/70">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={s.label}
                  className="inline-flex rounded-xl border border-line bg-espresso/50 p-2.5 text-lavender transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line/60 pt-6 text-xs text-lavender/70 sm:flex-row">
          <p>© 2026 Malak El-Wafy. All rights reserved.</p>
          <p className="font-mono">Cosmic Academia · Crafted with precision</p>
        </div>
      </div>
    </footer>
  )
}
