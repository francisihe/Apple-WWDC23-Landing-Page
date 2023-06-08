import './watch-os-10-styles.css'
import Button from '../button/Button'
import watchOSImg1 from '../../assets/watchos_10_left__bp437qx0nmeu_large.png'
import watchOSImg2 from '../../assets/watchos_10_left_middle__evbo3rir2aie_large.png'
import watchOSImg3 from '../../assets/watchos_10_middle__fymn0pm5342u_large.png'
import watchOSImg4 from '../../assets/watchos_10_right_middle__3yo8yo3ci8yu_large.png'
import watchOSImg5 from '../../assets/watchos_10_right__bm8dnlp1e11e_large.png'


const WatchOS10 = () => {
    return (
        <div className='s9'>

            <div className="s9-content">

                <div className='s9-heading'>
                    <h2>watchOS 10</h2>
                </div>

                <h3 className='s9-body'>
                    Comprehensive app redesigns for more information at a glance.
                    Advanced metrics for cyclists. And insights for mental and vision
                    health. It’s the biggest update since the introduction of Apple Watch.
                </h3>

                <Button
                    type='button'
                    buttonType='black'
                >
                    Explore the preview
                </Button>

            </div>

            <div className='s9-image-section'>
                <div className='s9-image-container'>

                    <img
                        className='s9-watchOS-image-left'
                        alt="watchOS volume and health screens"
                        src={watchOSImg1}
                    />

                    <div className='s9-watchOS-middle3'>
                        <img
                            className='s9-watchOS-image-left-middle'
                            alt="watchOS time and call screens"
                            src={watchOSImg2}
                        />

                        <img
                            className='s9-watchOS-image-middle'
                            alt="watchOS weather screen"
                            src={watchOSImg3}
                        />

                        <img
                            className='s9-watchOS-image-right-middle'
                            alt="watchOS compass screen"
                            src={watchOSImg4}
                        />
                    </div>

                    <img
                        className='s9-watchOS-image-right'
                        alt="watchOS sleeps screen"
                        src={watchOSImg5}
                    />

                </div>

            </div>

        </div>
    )
}

export default WatchOS10