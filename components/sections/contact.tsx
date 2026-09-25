'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mmamalakahmed2006@gmail.com',
    href: 'mailto:mmamalakahmed2006@gmail.com',
  },
  { icon: Phone, label: 'Phone', value: '+20 114 159 1859', href: 'tel:+201141591859' },
  { icon: MapPin, label: 'Location', value: 'Cairo, Egypt', href: undefined },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/malak-ahmed-079572245',
    href: 'https://www.linkedin.com/in/malak-ahmed-079572245',
  },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/placeholder', href: 'https://github.com/placeholder' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-rose">
            <span className="h-px w-6 bg-rose/60" />
            Get in Touch
            <span className="h-px w-6 bg-rose/60" />
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
            Let&apos;s Build Secure, Data-Driven Solutions Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-lavender">
            Available for data analytics projects, cybersecurity internships, and technical
            collaborations.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-7">
              <h3 className="font-serif text-xl text-cream">Contact Details</h3>
              <ul className="mt-6 space-y-4">
                {details.map((d) => {
                  const content = (
                    <span className="flex items-center gap-4">
                      <span className="inline-flex shrink-0 rounded-xl border border-line bg-espresso/50 p-2.5 text-gold">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-lavender/70">
                          {d.label}
                        </span>
                        <span className="block truncate text-sm text-cream">{d.value}</span>
                      </span>
                    </span>
                  )
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith('http') ? '_blank' : undefined}
                          rel={d.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="block rounded-xl p-1 transition-colors hover:bg-espresso/50"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="p-1">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="glass rounded-2xl p-7">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                  <h3 className="mt-4 font-serif text-2xl text-cream">Message received</h3>
                  <p className="mt-2 max-w-sm text-sm text-lavender">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Name" type="text" placeholder="Your name" />
                    <Field id="email" label="Email" type="email" placeholder="you@example.com" />
                  </div>
                  <Field id="subject" label="Subject" type="text" placeholder="How can I help?" />
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full resize-none rounded-xl border border-line bg-espresso/40 px-4 py-3 text-sm text-cream placeholder:text-lavender/40 outline-none transition-colors focus:border-rose/50 focus:ring-1 focus:ring-rose/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3.5 text-sm font-semibold text-espresso transition-transform hover:scale-[1.02] sm:w-auto"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-cream">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-espresso/40 px-4 py-3 text-sm text-cream placeholder:text-lavender/40 outline-none transition-colors focus:border-rose/50 focus:ring-1 focus:ring-rose/30"
      />
    </div>
  )
}
