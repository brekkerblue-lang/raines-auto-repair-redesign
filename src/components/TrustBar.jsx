import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const stats = [
  { icon: 'calendar', label: 'Years in business', value: `${business.yearsInBusiness}+` },
  { icon: 'star', label: 'Google rating', value: `${business.rating} / 5` },
  { icon: 'map-pin', label: 'One location', value: 'Belfair, WA' },
  { icon: 'clock', label: 'Open', value: 'Mon–Fri' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-graphite/10 bg-cream-100">
      <div className="container-page grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rust-100 text-rust-600">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-none text-graphite">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-graphite/50">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
