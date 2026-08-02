import { useEffect, useState } from 'react'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#heritage' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-graphite shadow-lg' : 'bg-graphite/95'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xl font-bold uppercase tracking-wide text-cream sm:text-2xl">
            Raines <span className="text-rust-400">Auto Repair</span>
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/50">
            Belfair, WA &middot; Est. 1984
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-cream/80 transition hover:text-rust-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={business.phoneHref} className="btn-primary">
            <Icon name="phone" className="h-4 w-4" />
            {business.phone}
          </a>
        </div>

        <button
          type="button"
          className="text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'x' : 'menu'} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-graphite md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-sm font-semibold uppercase tracking-wide text-cream/80 hover:bg-cream/5 hover:text-rust-400"
              >
                {item.label}
              </a>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-2 justify-center">
              <Icon name="phone" className="h-4 w-4" />
              {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
