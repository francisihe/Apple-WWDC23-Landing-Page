import '../navigation/navigation-style.css'
import logo from '../../assets/apple-logo.svg'
import searchIcon from '../../assets/search-icon.svg'
import shopIcon from '../../assets/shop-icon.svg'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-links'>

        <Link to='/'><img alt='Apple Logo' src={logo} /></Link>

        <p>Store</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>Vision</p>
        <p>AirPods</p>
        <p>TV & Home</p>
        <p>Entertainment</p>
        <p>Accessories</p>
        <p>Support</p>

        <img alt='Search Icon' src={searchIcon} />
        <img alt='Shop Icon' src={shopIcon} />

      </div>
    </div>
  )
}

export default NavigationBar