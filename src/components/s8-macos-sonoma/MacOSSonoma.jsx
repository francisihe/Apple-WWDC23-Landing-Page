import './mac-os-sonoma-styles.css'
import Button from '../button/Button'
import macOSImg1 from '../../assets/macos_sonoma_left__cvz9var774ae_large.png'
import macOSImg2 from '../../assets/macos_sonoma_middle__cj9uaxp8nkwi_large.png'
import macOSImg3 from '../../assets/macos_sonoma_right__bmc1cna9rmia_large.png'


const MacOSSonoma = () => {
    return (
        <div className='s8'>

            <div className="s8-content">

                <div className='s8-heading'>
                    <h2>macOS Sonoma</h2>
                </div>

                <h3 className='s8-body'>
                    Elevate your presence on video calls. Access information in
                    all‑new ways. Boost gaming performance. And discover
                    even more ways to personalize your Mac.
                </h3>

                <Button
                    type='button'
                    buttonType='black'
                >
                    Explore the preview
                </Button>

            </div>

            <div className='s8-image-section'>
                <div className='s8-image-container'>

                    <img
                        className='s8-macOS-image-left'
                        alt="macOS lockscreen"
                        src={macOSImg1}
                    />

                    <img
                        className='s8-macOS-image-middle'
                        alt="macOS homescreen"
                        src={macOSImg2}
                    />

                    <img
                        className='s8-macOS-image-right'
                        alt="macOS zoom meeting"
                        src={macOSImg3}
                    />

                </div>

            </div>

        </div>
    )
}

export default MacOSSonoma