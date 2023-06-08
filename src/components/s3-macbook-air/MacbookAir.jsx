import './macbook-air-styles.css'
import Button from '../button/Button'
import macBookAir from '../../assets/macbook_air_15__bjw8cwj0pquu_large.jpg'

const MacbookAir = () => {
    return (
        <div className='s3'>

            <div className="s3-content">

                <div className='s3-heading'>
                    <h2>MacBook Air 15 &quot;</h2>
                </div>

                <h3 className='s3-body'>
                    Our most loved laptop, now with a spacious 15‑inch Liquid Retina
                    display to make room for more of what you love. Supercharged by
                    the M2 chip, with up to 18 hours of battery life.
                </h3>

                <h4 className='s3-body-b'>Available starting 6.13</h4>

                <div className='s3-button-container'>
                    <Button
                        type='button'
                        buttonType='black'
                    >
                        Learn more
                    </Button>

                    <Button
                        type='button'
                        buttonType='white'
                    >
                        Order now
                    </Button>
                </div>

            </div>

            <img
                className='s3-macbook-image'
                alt="Macbook Air 15 &quot"
                src={macBookAir}
            />

        </div>
    )
}

export default MacbookAir