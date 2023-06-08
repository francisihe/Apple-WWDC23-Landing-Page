import './ipad-os-17-styles.css'
import Button from '../button/Button'
import iPadOS17Img1 from '../../assets/ipados_17_left__eolmypf0ijsm_large.png'
import iPadOS17Img2 from '../../assets/ipados_17_middle__cwr53ym7raye_large.png'
import iPadOS17Img3 from '../../assets/ipados_17_right__dvr1xkkenaeu_large.png'

const IpadOS17 = () => {
    return (
        <div className='s7'>

            <div className="s7-content">

                <div className='s7-heading'>
                    <h2>iPadOS 17</h2>
                </div>

                <h3 className='s7-body'>
                    With new levels of personalization, beautiful and helpful
                    custom Lock Screens, and features to help you get
                    more done, iPad is more capable than ever.
                </h3>

                <Button
                    type='button'
                    buttonType='black'
                >
                    Explore the preview
                </Button>

            </div>

            <div className='s7-image-section'>
                <div className='s7-image-container'>

                    <img
                        className='s7-ipados-image-left'
                        alt="iPadOS 17 homescreen"
                        src={iPadOS17Img1}
                    />

                    <img
                        className='s7-ipados-image-middle'
                        alt="iPadOS 17 lock screen"
                        src={iPadOS17Img2}
                    />

                    <img
                        className='s7-ipados-image-right'
                        alt="iPadOS 17 reminders"
                        src={iPadOS17Img3}
                    />

                </div>

            </div>

        </div>
    )
}

export default IpadOS17