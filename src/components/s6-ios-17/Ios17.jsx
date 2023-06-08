import './ios-17-styles.css'
import Button from '../button/Button'
import iOS17Img1 from '../../assets/ios_17_left__bj3sgjhevhiq_large.png'
import iOS17Img2 from '../../assets/ios_17_middle__esy7ajw5t4ae_large.png'
import iOS17Img3 from '../../assets/ios_17_right__9q2d28nbctuq_large.png'

const Ios17 = () => {
  return (
    <div className='s6'>

      <div className="s6-content">

        <div className='s6-heading'>
          <h2>iOS 17</h2>
        </div>

        <h3 className='s6-body'>
          Express yourself like never before when you call or message
          someone. Share content in convenient new ways. And do even
          more with new experiences for your iPhone.
        </h3>

        <Button
          type='button'
          buttonType='black'
        >
          Explore the preview
        </Button>

      </div>

      <div className='s6-image-section'>
        <div className='s6-image-container'>

          <div className='s6-img-cn-1'>
            <img
              className='s6-ios-image-left'
              alt="iOS 17 iMessage"
              src={iOS17Img1}
            />

            <img
              className='s6-ios-image-middle'
              alt="iOS 17 caller screen"
              src={iOS17Img2}
            />
          </div>

          <div className='s6-img-cn-2'>
            <img
              className='s6-ios-image-right'
              alt="iOS 17 clock screen"
              src={iOS17Img3}
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Ios17