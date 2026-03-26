import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
      <div className='user-icon'>
        <i className="fa-solid fa-circle-user"></i>
      </div>

      <div className='login-form'>
        <input type="text" placeholder='Username Or Email' />
        <input type="password" placeholder='Password' />
      </div>

      <div>
        <button className='login-btn'>Login</button>
      </div>

      <div className='login-link'>
        <p>
          Don't have an account? <Link to="/signup"><a href="">Sign Up</a></Link>
        </p>
      </div>

    </div>
  )
}

export default Login