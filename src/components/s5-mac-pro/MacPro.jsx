import './mac-pro-styles.css'
import Button from '../button/Button'
import macPro from '../../assets/mac_pro__c5azjmypvg66_large.jpg'

const MacPro = () => {
    return (
        <div className='s5'>

            <div className="s5-content">

                <div className='s5-heading'>
                    <h2>Mac Pro</h2>
                </div>

                <h3 className='s5-body'>
                    A game-changing combination of Apple silicon
                    performance and PCIe expansion for specialized workflows.
                    And every configuration comes with the incredible new
                    M2 Ultra — our most powerful and capable chip ever.
                </h3>

                <h4 className='s5-body-b'>Available starting 6.13</h4>

                <div className='s5-button-container'>
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
                className='s5-mac-pro'
                alt="Mac Pro"
                src={macPro}
            />

        </div>
    )
}

export default MacPro