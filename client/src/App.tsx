import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Mentors from './components/Mentors'
import MissionVission from './components/MissionVission'
import Navbar from './components/Navbar'
import Partnership from './components/Partnership'
import Popup from './components/Popup'
import Projects from './components/Projects'
import Recomendes from './components/Recomendes'
import SecondSection from './components/SecondSection'
import Services from './components/Services'
import StickySocail from './components/StickySocail'
import SuccessStories from './components/SuccessStories'
import Tagline from './components/Tagline'
import WhySection from './components/WhySection'

function App() {


  return (<>
    <div className="poppins">
      <StickySocail />
      <Popup />
      <Navbar />
      <Tagline />
      <SecondSection />
      <SuccessStories />
      <MissionVission />
      <Services id="services" />
      <Partnership />
      <Projects id="projects" />
      <Mentors id="mentors" />
      <Recomendes />
      <HeroSection />
      <WhySection />
      <Footer />
    </div>
  </>

  )
}

export default App
