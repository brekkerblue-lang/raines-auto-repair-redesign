import { Icon } from './icons.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">What we fix</p>
          <h2 className="section-title mt-3">Real jobs, straight from real reviews</h2>
          <p className="mt-4 leading-relaxed text-graphite/70">
            Every line below is something a customer specifically mentioned
            Raines doing for them -- not a generic service menu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-md border border-graphite/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-racing-700 text-cream">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-graphite">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
