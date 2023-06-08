import './home-styles.css'
import Hero from "../../components/hero/Hero"
import VisionPro from '../../components/s2-vision-pro/VisionPro'
import MacbookAir from '../../components/s3-macbook-air/MacbookAir'
import MacStudio from '../../components/s4-mac-studio/MacStudio'
import MacPro from '../../components/s5-mac-pro/MacPro'
import Ios17 from '../../components/s6-ios-17/Ios17'
import IpadOS17 from '../../components/s7-ipados-17/IpadOS17'
import MacOSSonoma from '../../components/s8-macos-sonoma/MacOSSonoma'


const Home = () => {
  return (
    <div className='test'>
        <Hero />
        <VisionPro />
        <MacbookAir />
        <MacStudio />
        <MacPro />
        <Ios17 />
        <IpadOS17 />
        <MacOSSonoma />
    </div>
    
  )
}

export default Home