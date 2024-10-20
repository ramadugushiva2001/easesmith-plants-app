
import './index.css'

const Header =()=>(
    <div className="header-container">
        <div className="header-top-container">
            <p style={{ width: '647px' }} >Free Shipping on orders above 999/-</p>
            <p style={{ width: '191px' }}>Call us on: +91 98768 05120</p>
        </div>
        <div className="header-down-container">
            <img src="https://res.cloudinary.com/dmmpu2exc/image/upload/v1729340426/easesmith_logo_sfoxsr.png" alt="chaperone" className="app-logo" />
            <ul className="header-list-container">
                <li>Home</li>
                <li>Plants & Pots</li>
                <li>Tools</li>
                <li>Our Services</li>
                <li>Blog</li>
                <li>Our Story</li>
                <li>FAQs</li>
            </ul> 
            <div>
                <div>
                    <p>My Profile</p>
                    <p>Cart</p>
                </div>
            </div>
        </div>


    </div>
)

export default Header
