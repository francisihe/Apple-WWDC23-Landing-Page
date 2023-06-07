import './hero-styles.css'
import appleLogo from '../../assets/apple-logo-2.svg'
import Button from '../button/Button'
import backgroundVideo from '../../assets/animation/small.mp4'

const Hero = () => {
  return (
    <div className='hero'>

        <video loop autoPlay id='background-video'>
            <source 
                src={backgroundVideo} 
                type='video/mp4'
            />
        </video>
        
        <div className='hero-content'>
            <div className='hero-heading'>
                <img src={appleLogo} width='60px' />
                <h2>WWDC23</h2>
            </div>

            <h3 className='hero-body'>
            Introducing Apple Vision Pro and the era of spatial computing.
            The new 15-inch MacBook Air with M2, Mac Studio with M2 Max
            and M2 Ultra, and Mac Pro with M2 Ultra. And previews of iOS 17, 
            iPadOS 17, macOS Sonoma, and watchOS 10.
            </h3>

            <Button
                type='button'
                buttonType='transparent'
            >
                Watch the keynote
            </Button>
        </div>
    </div>
  )
}

export default Hero