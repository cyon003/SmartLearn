import { Link } from 'react-router-dom'
import './Signup.css'
import logo from '../assets/logo.png'

function Signup() {
  return (
    <div className='signup-container'>

      <div className='logo-container'>
        <Link to="/homepage">
          <img src={logo} alt="Home" className="logo" />
        </Link>
      </div>

      <div className='signup-user-icon'>
        <i className="fa-solid fa-circle-user"></i>
      </div>

      <div className='signup-form'>
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
      </div>

      <button className='signup-btn'>Sign Up</button>

      <div className='signup-link'>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>

    </div>
  )
}

export default Signup