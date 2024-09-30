import NavBar from './components/NavBar'
import FeaturedCandies from './components/FeaturedCandies'
import MainSection from './components/MainSection'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'
import AboutUsSection from './components/AboutUsSection'

function App() {

  return (
    <div className='bg-pink-50'>
      <NavBar></NavBar>
      <MainSection></MainSection>
      <CommunitySection></CommunitySection>
      <FeaturedCandies></FeaturedCandies>
      <AboutUsSection></AboutUsSection>
      <Footer></Footer>

    </div>
  )
}

export default App
