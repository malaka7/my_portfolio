'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Cover', href: '#cover' },
  { label: 'About', href: '#about' },
  { label: 'USP', href: '#usp' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? 'glass shadow-[0_16px_40px_-24px_rgba(0,0,0,0.8)]' : 'border border-transparent'
        }`}
        style={{ marginLeft: '1rem', marginRight: '1rem' }}
      >
        <a href="#cover" className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold tracking-tight text-cream">
            Malak El-Wafy
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-gold/30 bg-espresso/40 px-2.5 py-1 text-[11px] font-medium text-gold sm:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open for Opportunities
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-5 text-sm text-lavender">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-rose px-4 py-2 text-sm font-semibold text-espresso transition-transform hover:scale-[1.03]"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-line p-2 text-cream lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-2 lg:hidden">
          <div className="glass rounded-2xl p-4">
            <ul className="grid grid-cols-2 gap-2 text-sm text-lavender">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 transition-colors hover:bg-espresso/60 hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-rose px-4 py-2.5 text-center text-sm font-semibold text-espresso"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
