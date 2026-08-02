import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.mapEmbedQuery,
  )}&z=15&output=embed`

  return (
    <section id="contact" className="py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Visit or call</p>
          <h2 className="section-title mt-3">Stop by, or just call ahead</h2>
          <p className="mt-4 leading-relaxed text-graphite/70">
            Raines Auto Repair runs on phone calls and walk-ins, not an
            online booking form -- call the number below and Dan or the shop
            will get you sorted.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-md border border-graphite/10 bg-white p-6">
              <Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-rust-500" />
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-graphite">
                  Phone
                </p>
                <a href={business.phoneHref} className="mt-1 block text-lg text-graphite/80 hover:text-rust-600">
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-md border border-graphite/10 bg-white p-6">
              <Icon name="map-pin" className="mt-1 h-5 w-5 shrink-0 text-rust-500" />
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-wide text-graphite">
                  Address
                </p>
                <p className="mt-1 text-graphite/80">
                  {business.address.line1}
                  <br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </p>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-rust-600 hover:text-rust-700"
                >
                  Get directions
                  <Icon name="navigation" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-md border border-graphite/10 bg-white p-6">
              <Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-rust-500" />
              <div className="w-full">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-graphite">
                  Hours
                </p>
                <dl className="mt-2 space-y-1 font-mono text-sm">
                  {business.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <dt className="text-graphite/60">{h.day}</dt>
                      <dd
                        className={
                          h.hours === 'Closed' ? 'text-graphite/40' : 'font-semibold text-graphite'
                        }
                      >
                        {h.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-graphite/40">
                  Note the shorter Friday hours -- open Monday through
                  Thursday, half-day Friday, closed the weekend.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-graphite/10 lg:col-span-3">
            <iframe
              title="Map to Raines Auto Repair"
              src={mapSrc}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
