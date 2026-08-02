# Raines Auto Repair — Website Redesign

A brand-new website for Raines Auto Repair, built with React + Vite +
Tailwind CSS, pulling real photos, real quotes, and real family/business
history straight from the shop's own Google Business Profile and its own
Facebook page.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Why this business

Raines Auto Repair (210 NE Hill Rd, Belfair, WA) was found following the
standing rule for this series: find a business with a listed contact and no
working website. This business has **no website at all** — its Google
Business Profile shows only an "Add website" prompt, and no domain of any
kind was ever found for it. It has a real, working phone number, a 4.7-star
rating across 13 Google reviews, over 40 years at the same address, and an
owner-response history on Google going back years.

This is the fifteenth entry in this portfolio. Every business already built
or fully contacted in this series was checked and ruled out first.

### Candidates investigated and rejected before this one (this search cycle)

Roughly fifteen towns across Kitsap and Mason counties were searched
(Belfair, Union, Grapeview, Olalla, Hoodsport, Longbranch, Vaughn, Shelton,
Suquamish, Indianola, Manchester, Purdy, Wollochet, and others). Candidates
ruled out along the way:

- **Topp Notch Auto Repair** (Olalla) — a credible, specific complaint about
  the owner being "incredibly rude."
- **Light Truck Transmission** (Hoodsport) — reviews describing it as a
  "scam" with an owner who "refuses to communicate," 3.1★.
- **Stacy's Auto Repair** (Shelton) — a credible longtime-customer complaint
  about non-communication (3.5★ Google / 2.6★ Yelp).
- **Wake Automotive LLC** (Union) and **Eric & Son's Benz Connection**
  (Olalla) — both have real, working websites, so neither fit this
  portfolio's "no website" targeting rule.
- **K & L Mobile Auto Repair LLC** (Vaughn/Key Peninsula) — good reputation,
  but mobile-only with no fixed address and no discoverable email.

### A note on this business's contact channel

No publicly listed **email address** could be found for Raines Auto
Repair, despite checking the NAPA AutoCare directory (not listed), Yellow
Pages (blocked by bot-detection), Openbay, Bing, generic search-engine
guesses, and — as the last real lead — the "Contact info" tab of the
shop's own Facebook Page (facebook.com/Rainesauto/about), which lists only
a phone number, no email. People-search/data-broker sites were
deliberately **not** used to find a personal email for the owner, consistent
with this portfolio's standing privacy rule against compiling personal
information across sources. The site is being built in full regardless,
per direct instruction — outreach itself is on hold until a contact email
is available (by phone call or another legitimate channel), and no
outreach message will be sent without separate, explicit permission.

## Sourcing — what's real vs. what was designed

- **Business facts** (name, address, phone, rating, review count, hours) —
  Google Maps business listing, confirmed 2026-08-02. Hours were pulled from
  MapQuest's listing via a Google search snippet, since Google Maps' own
  hours dropdown could not be programmatically expanded in this session
  (a recurring tool quirk this session — clicking Google Maps' expandable UI
  elements did not update the page text extraction, even when a screenshot
  showed the element visually clicked). The MapQuest hours are consistent
  with Google's own live "Closed · Opens 8 AM Mon" status checked on a
  Sunday.
- **"42 Years in Business"** — Yellow Pages listing (2026 − 1984 = 42),
  consistent with the 1984 founding date below.
- **Founding story** — Darrell Raines opened the shop in 1984 and worked
  with the Yamaha Factory Motorcycle Team as a mechanic, per his own Kitsap
  Sun obituary (published January 12, 2016): "He owned and operated Darrell
  Raines Auto Repair (started in 1984) as well as worked with the Yamaha
  Factory Motorcycle Team as a mechanic." No source found states who
  currently owns or operates the shop, or their relationship (if any) to
  Darrell Raines — so the site makes no ownership claim beyond what's
  confirmed: the shop kept running under the same name at the same address,
  and today's reviews consistently name a mechanic called "Dan."
- **Reviews** — four real reviews, each fully read (not a partial snippet)
  directly on this business's Google Business Profile, reproduced verbatim,
  including the shop's own real owner replies:
  - Lisa Peterson (3 reviews, ~1 year ago) — on Dan's honest, no-upsell
    diagnostics.
  - Trevor McDarby (5 reviews, ~3 years ago) — on a suspension repair,
    featured as this site's primary testimonial.
  - Micheal Alvarez (Sep 2019, review with photo) — on a same-day
    alignment after front-end work. Found via the photo attached to this
    review in Google's own photo gallery for the listing. Reproduced
    verbatim, including the review's own original wording ("a far price").
  - Ciara George (2 photos, ~6 months ago) — a mild, isolated complaint
    about phone manner ("the man on the phone had some major attitude").
    This was read and weighed against this portfolio's standing
    reputation-vetting standard (drop candidates with real, specific,
    credible complaints about rudeness or non-communication). It was judged
    **not** disqualifying: it's a single, isolated incident rather than a
    pattern, unlike the credible aggression/scam complaints that ruled out
    Topp Notch, Light Truck Transmission, and Stacy's Auto Repair above.
    It is not featured as a testimonial, but is documented here for
    transparency.
  - Google's own two AI-generated review-summary highlight quotes are also
    used directly, pulled from the business's live profile.
- **Services** — every service listed on the site is drawn directly from
  what a real review specifically describes Raines doing (alignments,
  suspension repair, front-end/steering work, honest no-upsell diagnostics),
  rather than a generic auto-shop service list.
- **Photos — used directly per the standing "skip photo approval" rule**
  (best available real assets used without a per-photo chat pause; sourcing
  documented transparently here instead). All five are the shop's own real
  photos from its Facebook page (facebook.com/Rainesauto/photos) — this
  business has no storefront/exterior photo in either its Google or
  Facebook galleries, so the site is built around real interior/action shots
  instead, the same "use what's genuinely there" approach as every earlier
  entry in this portfolio:
  - `public/images/raines-vintage-darrell.png` — a real, vintage photo of a
    young Darrell Raines in coveralls next to a freshly rebuilt engine in
    the original shop, posted to the business's own Facebook page. Used in
    the Heritage section.
  - `public/images/raines-racing-team.png` — a real photo of Darrell Raines
    and Dave Raines in genuine embroidered Team Yamaha racing shirts (with a
    GNCC off-road racer), also from the shop's own Facebook page. The
    embroidered names are legible directly on the shirts. This is the
    strongest available confirmation of the Yamaha Factory Motorcycle Team
    connection from Darrell's obituary. Used in the Heritage section.
  - `public/images/raines-engine-hoist.png` — a real action photo of a
    Raines mechanic pulling an engine on a hoist in the shop's own bay,
    from the shop's own Facebook page. Used as the Hero image.
  - `public/images/raines-brake-lathe.png` — a real photo of the shop's own
    FMC brake lathe mid-job, from the shop's own Facebook page. Used in the
    "Meet Dan" section, and as the source of this site's rust/orange accent
    color (see below).
  - Two additional Facebook-hosted images (a "check engine" meme and a
    "grinding noise" meme) and one professional-looking stock-style brake
    photo were found in the same photo gallery but were **not used** — they
    read as borrowed stock/meme content rather than genuine photos of this
    shop's own people or premises, and this portfolio's standing rule is
    real photos only.
- **Colors** — sampled directly (Python/Pillow pixel-picker) from two of the
  shop's own real photos, not designed from scratch:
  - The `racing` (blue) palette is sampled from the real Team Yamaha shirt
    fabric in `raines-racing-team.png` (averaged patch at approximately
    x:980–1060, y:430–520), anchored at `#2D41A0` — the actual blue of the
    Raines family's own motorsports history.
  - The `rust` (orange) palette is sampled from the shop's own FMC brake
    lathe casing in `raines-brake-lathe.png` (most-saturated pixel found in
    a sweep of the casing region), anchored at `#BD6A55`.
  - `graphite` and `cream` are a deliberately different near-black/off-white
    pairing from this portfolio's prior entries, so the palette doesn't
    read as a template reused business to business.

No AI-generated imagery is used anywhere in this project.

## Design system

Oswald is a bold, condensed, workshop/industrial display face — a different
motorsport-adjacent pairing from every earlier entry (Pursley Auto Care used
Rajdhani). Inter is the body face; IBM Plex Mono renders stamped details
like hours and review metadata — also a different mono face from Pursley's
JetBrains Mono.

### Structure — intentionally varied again from earlier entries

Per the standing instruction to keep varying this portfolio's page
structure, this site's section order and component types are deliberately
different from every earlier entry:

- **Hero** is a split color-block — a solid real-Yamaha-blue panel with
  headline text on one side, a full-bleed real action photo on the other —
  rather than a centered logo hero (Pursley) or a single full-bleed photo.
- A dedicated **TrustBar** stat strip (years in business, rating, location,
  open days) sits directly under the Hero — a new section type not used in
  any earlier entry.
- **Services** is a 3-column card grid, grounded entirely in real review
  content rather than a generic service list.
- **Heritage** is this entry's own new section: Darrell Raines' real 1984
  founding story and Yamaha Factory Motorcycle Team connection, told through
  two of the shop's own real vintage/racing photos and a four-point
  timeline.
- **Meet Dan** is a dedicated section built entirely around the mechanic
  customers repeatedly name in their own reviews, paired with a real photo
  of the shop's own equipment.
- **Reviews** pairs one large featured quote with two smaller review cards,
  rather than three even-sized spotlight cards (Pursley) or a dense
  multi-quote wall.
- **Contact** is phone/visit-first with a live embedded map, and
  deliberately has **no contact form** — since no email address could be
  confirmed for this business, a form with nowhere real to send its
  submissions would be misleading. A form will be added if/when a working
  contact email is confirmed.

## Verification note

This project's dependencies were **not installed and the dev server was
not run** in the sandbox that produced this code — outbound network access
to the npm registry (`registry.npmjs.org`) returned 403 Forbidden for this
session, consistent with every prior redesign in this portfolio. Every
`.jsx`/`.js` file was syntax- and import-checked with the TypeScript
compiler (`tsc --jsx react-jsx --noEmit --allowJs --skipLibCheck`) — clean,
zero errors. Every icon name referenced from `src/components/icons.jsx`
(including icons referenced dynamically via `services.js`'s and
`TrustBar.jsx`'s data-driven `icon` fields) was cross-checked against the
icon registry — all present. Every Tailwind color class used across the
project (including opacity-modified and gradient `from-`/`via-`/`to-`
variants) was cross-checked against the tokens defined in
`tailwind.config.js` — all present, no gaps. Every field referenced from
`src/data/business.js`, `src/data/services.js`, `src/data/testimonials.js`,
and `src/data/heritage.js` was confirmed to actually exist in those files.
Every image path referenced from a component was confirmed to exist in
`public/images/`.

## File structure

```
src/
  main.jsx              Entry point
  App.jsx                Page composition (varied section order — see above)
  index.css              Tailwind layers + shared component classes
  components/
    Header.jsx             Sticky nav
    Hero.jsx                 Split color-block hero (real racing blue + real photo)
    TrustBar.jsx               New: stat strip under the hero
    Services.jsx                  Card grid, grounded in real reviews
    Heritage.jsx                    New: real 1984 founding + racing story
    MeetDan.jsx                       New: built around the named mechanic
    Reviews.jsx                         Featured quote + smaller review cards
    CTA.jsx                               Conversion band
    Contact.jsx                            Phone/visit-first, live map, no form
    Footer.jsx
    icons.jsx                            react-icons/lu registry
  data/
    business.js             Core business facts
    services.js                Service list, grounded in real reviews
    testimonials.js               Real, fully-read reviews + Google's summary quotes
    heritage.js                     Founding story, sourced and fact-checked
public/
  images/                raines-vintage-darrell.png, raines-racing-team.png,
                          raines-engine-hoist.png, raines-brake-lathe.png
  favicon.svg
```
