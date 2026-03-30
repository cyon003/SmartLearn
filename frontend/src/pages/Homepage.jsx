import { Link } from 'react-router-dom'
import './Homepage.css'
import learn3 from '../assets/learn3.png'
function Homepage() {
    return (
        <div className='homepage-container'>
            <div className='navbar'>
                <div className='nav-1'>
                    <Link to='/homepage'><h2>SmartLearn</h2></Link>
                    <ul>
                        <li><Link to='/homepage'>Home</Link></li>
                        <li><Link >Explore</Link></li>
                        <li><Link >Subscribe</Link></li>
                    </ul>
                </div>
                <div className='nav-2'>
                    <input type="text" placeholder='Search' />
                </div>

                <div className='nav-3'>
                    <ul>
                        <li><Link to='/'>Log in</Link></li>
                        <li><Link to='/signup'>Sign up</Link></li>
                    </ul>
                </div>
            </div>

            <div className='content'>
                <div className='left-content'>
                    <p className='slogan'>Unlock Your Potential with SmartLearn</p>
                    <p className='praghs'>Discover a world of knowledge at your fingertips.
                        With SmartLearn, you can access a wide range of courses,
                        tutorials, and resources to help you learn new skills
                        and achieve your goals. Whether you're a student,
                        professional, or lifelong learner, SmartLearn
                        has something for everyone.</p>
                    <button className='get-started-btn'>Get Started</button>
                </div>

                <div className='right-content'>
                    <img src={learn3} alt="Learning" className='learn2-img' />
                </div>
            </div>

        </div>
    );
}

export default Homepage;