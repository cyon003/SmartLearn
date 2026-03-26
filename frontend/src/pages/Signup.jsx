import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
  return (
    <div className='login-container'>
      <div className='signup-user-icon'>
        <i className="fa-solid fa-circle-user"></i>
      </div>

      <div className='signup-form'>
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
      </div>

      <div>
        <button className='signup-btn'>Sign Up</button>
      </div>

      <div className='signup-link'>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup