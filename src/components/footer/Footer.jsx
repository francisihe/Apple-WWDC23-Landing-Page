/* eslint-disable react/no-unescaped-entities */
import './footer-styles.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-links-area'>

            <div className='footer-text-area'>
                This landing page design in a recreation of Apple's WWDC23 Landing Page.
                This was developed by Francis Ihejirika of frandela.com. I am a Fullstack developer and available for gigs and contract roles.
                You can contact me at francis@frandela.com or via phone at +1(469)892-8855 or +2348165148492.
                GitHub: https://github.com/francisihe
                {<br/>}{<br/>}
                All assets belong to and were obtained from Apple's website.
                This was developed using React Js using Vite and Vanilla CSS.
                
            </div>

            <div className='footer-navs'>
                <div className='footer-navs-div'>
                    
                </div>
            </div>

            <div className='footer-contact-copyright'>

            </div>
        </div>
    </div>
  )
}

export default Footer