import './home-styles.css'
import Hero from "../../components/hero/Hero"
import VisionPro from '../../components/s2-vision-pro/VisionPro'
import MacbookAir from '../../components/s3-macbook-air/MacbookAir'
import MacStudio from '../../components/s4-mac-studio/MacStudio'


const Home = () => {
  return (
    <div className='test'>
        <Hero />
        <VisionPro />
        <MacbookAir />
        <MacStudio />
    </div>
    
  )
}

export default Home