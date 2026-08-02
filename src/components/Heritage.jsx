import { Icon } from './icons.jsx'
import { heritageIntro, foundingStory, timeline } from '../data/heritage.js'

export default function Heritage() {
  return (
    <section id="heritage" className="bg-graphite py-20 text-cream">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-rust-400">
            Our story
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-cream sm:text-4xl">
            Four decades, one address
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">{heritageIntro}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-md border border-cream/10">
              <img
                src="/images/raines-vintage-darrell.png"
                alt="A young Darrell Raines in coveralls next to a rebuilt engine in the original Raines Auto Repair shop"
                className="w-full object-cover"
              />
            </div>
            <p className="font-mono text-xs text-cream/40">
              Darrell Raines, in the shop he opened in 1984 -- a photo from the
              business's own Facebook page.
            </p>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-md border border-cream/10">
              <img
                src="/images/raines-racing-team.png"
                alt="Darrell Raines and Dave Raines in real Team Yamaha racing shirts with a GNCC off-road racer"
                className="w-full object-cover"
              />
            </div>
            <p className="font-mono text-xs text-cream/40">
              Darrell (right) and Dave Raines (left) with the family's Team
              Yamaha GNCC racing outfit -- also from the shop's own Facebook
              page.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {foundingStory.map((p, i) => (
            <p key={i} className="leading-relaxed text-cream/75">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-cream/10 sm:grid-cols-4">
          {timeline.map((t) => (
            <div key={t.year} className="bg-graphite-800 p-6">
              <p className="flex items-center gap-2 font-display text-xl font-bold text-rust-400">
                <Icon name="flag" className="h-4 w-4" />
                {t.year}
              </p>
              <p className="mt-2 text-sm text-cream/70">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
