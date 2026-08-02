import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#heritage', label: 'Our Story' },
  { href: '#about', label: 'Meet Dan' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-graphite py-14 text-cream">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-wide text-cream">
            Raines <span className="text-rust-400">Auto Repair</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Family-run auto repair at 210 NE Hill Rd in Belfair, WA since
            1984 &mdash; {business.rating} stars across {business.reviewCount}{' '}
            Google reviews.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-cream/70 hover:text-rust-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>
              {business.address.line1}, {business.address.city}, {business.address.state}{' '}
              {business.address.zip}
            </li>
            <li>
              <a href={business.phoneHref} className="inline-flex items-center gap-1.5 hover:text-rust-400">
                <Icon name="phone" className="h-3.5 w-3.5 shrink-0" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-rust-400"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Hours</p>
          <ul className="mt-4 space-y-1 text-sm text-cream/70">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className={h.hours === 'Closed' ? 'text-cream/40' : ''}>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
        <p>&copy; {new Date().getFullYear()} Raines Auto Repair. All rights reserved.</p>
      </div>
    </footer>
  )
}
