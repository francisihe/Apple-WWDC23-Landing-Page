import './vision-pro-styles.css'
import appleLogo from '../../assets/apple-logo-3.svg'
import Button from '../button/Button'
import visionProBackgroundImage from '../../assets/vision_pro_lifestyle__e48jkjdk1y4i_large.jpg'

const VisionPro = () => {
  return (
    <div className='s2'>

        <img 
            className='s2-background-image'
            alt="Vision Pro Background Image" 
            src={visionProBackgroundImage} 
        />

        <div className="s2-content">

            <div className='s2-heading'>
                <img src={appleLogo} width='60px' color='black'/>
                <h2>Vision Pro</h2>
            </div>

            <h3 className='s2-body'>
            Welcome to the era of spatial computing, where 
            digital content blends seamlessly with your 
            physical space. So you can do the things you love 
            in ways never before possible.
            </h3>

            <h4 className='s2-body'>Available early next year in the U.S.</h4>

            <Button
                type='button'
                buttonType='black'
            >
                Learn more
            </Button>
        </div>


    </div>
  )
}

export default VisionPro