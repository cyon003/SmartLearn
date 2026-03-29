import './Homepage.css';
function Homepage() {
    return (
        <div className='homepage-container'>
            <div className='navbar'>
                <div className='nav-1'>
                    <a href=""><h2>SmartLearn</h2></a>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Explore</a></li>
                        <li><a href="">Subscribe</a></li>
                    </ul>
                </div>

                <div className='nav-2'>
                    <input type="text" placeholder='Search' />
                </div>

                <div className='nav-3'>
                    <ul>
                        <li><a href="">Log in</a></li>
                        <li><a href="">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Homepage;