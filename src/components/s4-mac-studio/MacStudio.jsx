import './mac-studio-styles.css'
import Button from '../button/Button'
import macStudio from '../../assets/mac_studio__lh66qxlrkqau_large.jpg'

const MacStudio = () => {
  return (
    <div className='s4'>

            <div className="s4-content">

                <div className='s4-heading'>
                    <h2>Mac Studio</h2>
                </div>

                <h3 className='s4-body'>
                Next-generation power with M2 Max and M2 Ultra. Outrageous 
                performance and extensive connectivity in a compact form, 
                transforming any space into a creative studio.
                </h3>

                <h4 className='s4-body-b'>Available starting 6.13</h4>

                <div className='s4-button-container'>
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
                className='s4-mac-studio'
                alt="Macbook Air 15 &quot"
                src={macStudio}
            />

        </div>
  )
}

export default MacStudio