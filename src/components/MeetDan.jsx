import { Icon } from './icons.jsx'

export default function MeetDan() {
  return (
    <section id="about" className="py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Who you'll actually talk to</p>
          <h2 className="section-title mt-3">Ask for Dan</h2>
          <p className="mt-6 leading-relaxed text-graphite/75">
            Every review of this shop mentions the same name. Not a brand,
            not a franchise process -- a mechanic customers trust enough to
            request by name, three separate times in three separate reviews.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-rust-500" />
              <p className="text-graphite/75">
                <span className="font-semibold text-graphite">No pressure, no phantom problems.</span>{' '}
                "He doesn't try to upsell you for problems that don't exist"
                -- Lisa Peterson.
              </p>
            </li>
            <li className="flex gap-3">
              <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-rust-500" />
              <p className="text-graphite/75">
                <span className="font-semibold text-graphite">He tells you before he does it.</span>{' '}
                Potential problems get discussed with you first, not
                added to the bill as a surprise.
              </p>
            </li>
            <li className="flex gap-3">
              <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-rust-500" />
              <p className="text-graphite/75">
                <span className="font-semibold text-graphite">Fast when it needs to be.</span>{' '}
                Same-day alignments after front-end work, when the job
                allows for it.
              </p>
            </li>
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-graphite/50">
            Founder Darrell Raines passed away in 2016. What's confirmed
            publicly is straightforward: the shop has kept running under the
            Raines Auto Repair name at the same Belfair address ever since,
            and its mechanic today is the "Dan" customers keep naming in
            their reviews.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/raines-brake-lathe.png"
            alt="The shop's own FMC brake lathe, resurfacing a rotor in-house"
            className="w-full rounded-md border border-graphite/10 object-cover shadow-xl"
          />
          <p className="mt-3 text-xs text-graphite/50">
            The shop's own FMC brake lathe -- rotor and drum work done
            in-house, not farmed out.
          </p>
        </div>
      </div>
    </section>
  )
}
