import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-racing-700">
      <div className="grid lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-racing-200">
              Belfair, Washington &middot; Family shop since 1984
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-cream sm:text-5xl">
              The shop Belfair calls when something's wrong under the hood.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-racing-100">
              Real reviews, not a script: customers ask for Dan by name, and
              say he "doesn't try to upsell you for problems that don't
              exist." That's the whole approach -- honest diagnosis, straight
              talk, and work done right the first time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={business.phoneHref} className="btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                Call {business.phone}
              </a>
              <a href="#contact" className="btn-outline border-cream text-cream hover:bg-cream hover:text-racing-700">
                Get directions
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-cream">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-rust-400 text-rust-400" />
                ))}
              </div>
              <span className="font-mono text-sm">
                {business.rating} stars &middot; {business.reviewCount} Google reviews
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[340px] lg:min-h-full">
          <img
            src="/images/raines-engine-hoist.png"
            alt="A Raines Auto Repair mechanic -- the same 'Dan' customers name in their reviews -- pulling an engine on a hoist in the shop's own bay"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-racing-900/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-racing-700/40 lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  )
}
