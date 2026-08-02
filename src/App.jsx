import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import Heritage from './components/Heritage.jsx'
import MeetDan from './components/MeetDan.jsx'
import Reviews from './components/Reviews.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Structure intentionally varies again from every earlier entry in this
// portfolio: Hero is a split color-block (real Yamaha-racing blue panel +
// full-bleed real action photo) rather than a centered logo hero or a
// full-bleed single photo; a dedicated TrustBar stat strip sits directly
// under the hero (new section type); Services is a 3-column card grid;
// Heritage is this entry's own new section, telling Darrell Raines' real
// 1984 founding and Yamaha Factory Motorcycle Team story through two of the
// shop's own real photos; "Meet Dan" is a dedicated About-style section
// built entirely around the mechanic customers repeatedly name in their own
// reviews; Reviews pairs one large featured quote with two smaller cards
// rather than three even-sized spotlight cards; Contact is phone/visit-first
// with a live map embed instead of a contact form, since no email address
// could be confirmed for this business (see README).
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Heritage />
        <MeetDan />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
