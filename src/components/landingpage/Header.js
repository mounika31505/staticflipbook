import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useAuthContext } from '../../contexts/AuthContextProvider'
import { logo } from '../../helpers/images'
import { siteConfig } from '../../helpers/siteConfig'


const Header = () => {
    const { loggedin, toggleLogin, logOut } = useAuthContext()
  return (
    <section className="header">
    <nav>
        <Link to="index.html"><img src={logo} alt="logo" /></Link>
        <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onclick="hideMenu()"></i>
            <ul>
                <li><Link to="">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/course" >COURSE</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/contacts">CONTACT</Link></li>
                {!loggedin ? <li><Link to="/auth/login"> <button>Login</button></Link></li>
                :
                <li><button onClick={logOut}>Logout</button></li>
                }
            </ul>
        </div>
        <i className="fa fa-bars" onclick="showMenu()"></i>
    </nav>
    <div className="text-box">
        <h1>{siteConfig.header.title}</h1>
        <p>{siteConfig.header.description}
        </p>
        <Link to="" className="hero-btn">Vist Us To know More</Link>
    </div>
</section>
  )
}

export default Header