import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Marquee from './components/Marquee'
import WhoItsFor from './components/WhoItsFor'
import WhatYouGet from './components/WhatYouGet'
import VideoQuote from './components/VideoQuote'
import Proof from './components/Proof'
import About from './components/About'
import FreeGuide from './components/FreeGuide'
import ApplyForm from './components/ApplyForm'
import Instagram from './components/Instagram'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-army selection:text-paper">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Marquee />
        <WhoItsFor />
        <WhatYouGet />
        <VideoQuote />
        <Proof />
        <About />
        <FreeGuide />
        <ApplyForm />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
