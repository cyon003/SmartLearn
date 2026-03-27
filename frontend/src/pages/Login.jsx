import { Link } from 'react-router-dom'
import './Login.css'
import logo from '../assets/logo.png'
function Login() {
  return (
    <div className='login-container'>
      <div className='logo-container'>
        <a href=""><img src={logo} alt="Logo" className='logo' /></a>
      </div>

      <div className='user-icon'>
        <i className="fa-solid fa-circle-user"></i>
      </div>

      <div className='login-form'>
        <input type="text" placeholder='Username Or Email' />
        <input type="password" placeholder='Password' />
      </div>

      <button className='login-btn'>Login</button>

      <div className='login-link'>
        <p>
          Don't have an account? <Link to="/signup"><a href="">Sign Up</a></Link>
        </p>
      </div>

    </div>
  )
}

export default Login