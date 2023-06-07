import '../button/button-styles.css'
import PropTypes from "prop-types"

const BUTTON_CLASSES = {
    transparent: 'transparent-white-white',
    black: 'black-black-white',
    white: 'white-black-black'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button 
        className={`button ${BUTTON_CLASSES[buttonType]}`}
        {...otherProps}
    >
        {children}
    </button>
  )
}

Button.propTypes = {
  buttonType: PropTypes.any,
  children: PropTypes.any
}

export default Button