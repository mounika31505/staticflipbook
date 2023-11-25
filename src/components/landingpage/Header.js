import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom/cjs/react-router-dom'

import { useAuthContext } from '../../contexts/AuthContextProvider'
import { logo2 } from '../../helpers/images'
import { siteConfig } from '../../helpers/siteConfig'


const Header = () => {
    const scrollToAbout = () => {
        scroll.scrollTo("about");
    };

    const scrollToCourse = () => {
        scroll.scrollTo("course");
    };
    
    const scrollToBlog = () => {
        scroll.scrollTo("blog");
    };



    const { loggedin, toggleLogin, logOut } = useAuthContext();
    return (
        <section id="header" className="header">
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Link to="index.html"><img src={logo2} alt="logo" /></Link>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times"></i>
                    <ul>
                        {/* <li><Link to="">HOME</Link></li> */}
                        <li><ScrollLink to="about" smooth={true} onClick={scrollToAbout}>ABOUT</ScrollLink></li>
                        <li><ScrollLink to="course" smooth={true} onClick={scrollToCourse}>COURSE</ScrollLink></li>
                        <li><ScrollLink to="blog" smooth={true} onClick={scrollToBlog}>BLOG</ScrollLink></li>
                        <li><Link to="/contacts">CONTACT</Link></li>
                        {!loggedin ? <li><Link to="/auth/login"> <button>Login</button></Link></li>
                            : <li><button onClick={logOut}>Logout</button></li>
                        }
                    </ul>
                </div>
                <i className="fa fa-bars" ></i>
            </nav>
            <div className="text-box">
                <div style={{ position: "relative" }}>
                    <h1 className='t1'>{siteConfig.header.title1}</h1>
                </div>
                {/* <p>{siteConfig.header.title}</p> */}
                <p style={{ paddingTop: "6rem" }}><b>{siteConfig.header.description1}</b></p>
                <p style={{ paddingTop: "0px" }}>{siteConfig.header.description}
                </p>
                <Link to="" className="hero-btn">Vist Us To know More</Link>
            </div>
        </section>
    );
}

export default Header;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// const Header = () => {
//   const scrollToAbout = () => {
//     scroll.scrollTo('about');
//   };

//   return (
//     <section className="header">
//       <nav>
//         <ul>
//           <li><Link to="/">HOME</Link></li>
//           <li><ScrollLink to="about" smooth={true} duration={500}>ABOUT</ScrollLink></li>
//           <li><Link to="/course">COURSE</Link></li>
//           <li><Link to="/blog">BLOG</Link></li>
//           <li><Link to="/contacts">CONTACT</Link></li>
//           <li><Link to="/auth/login">LOGIN</Link></li>
//         </ul>
//       </nav>
//       <div className="text-box">
//         <div>
//           <h1>Title</h1>
//         </div>
//         <p>Description</p>
//         <ScrollLink to="about" smooth={true} duration={500} onClick={scrollToAbout}>
//           Visit Us To Know More
//         </ScrollLink>
//       </div>
//     </section>
//   );
// }

// export default Header;
