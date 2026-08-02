import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function CTA() {
  return (
    <section className="bg-rust-600 py-16 text-cream">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">
          Something feel off in the front end? Don't wait on it.
        </h2>
        <p className="max-w-xl text-rust-50/90">
          Call the shop directly -- Dan will tell you straight what it needs,
          and what it doesn't.
        </p>
        <a
          href={business.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-graphite px-8 py-4 text-sm font-bold uppercase tracking-wide text-cream transition hover:bg-graphite-800"
        >
          <Icon name="phone" className="h-4 w-4" />
          Call {business.phone}
        </a>
      </div>
    </section>
  )
}
