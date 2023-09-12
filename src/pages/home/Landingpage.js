import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { logo,london,washingtion,newyork, cafeteria,library,basketbal,user1,user2} from '../../helpers/images'
import "../../styles/Landingpage.css";

const Landingpage = () => {
  return (
    <div>
      {/* Header */}
      <section className="header">
        <nav>
            <a href="index.html"><img src= {logo} alt="logo" /></a>
            <div className="nav-links" id="navLinks">
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">COURSE</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li><a href="/login" target='_blank'> <button>Login</button></a></li>
                </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <div className="text-box">
            <h1>World's Biggest Universety</h1>
            <p>making website is one of the easiest thing in the world
                jut need to learn HTML,CSS,<br />Javascript and you are good to go.
            </p>
            <a href="" className="hero-btn">Vist Us To know More</a>
        </div>
    </section>

    {/* course */}
    <section className="course">
        <h1>Courses we offer</h1>
        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>

        <div className="row">
            <div className="course-col">
                <h3>intermediate</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,pellentesque aliquet turpis nulla,eleifend
                    faucibus elit.
                    pellentesque aliquet turpis nulla ,eleifend faucibus est
                    sollicitude ut. maeceans ut venenatis ex,et dapibus purus
                    Donec sit.
                </p>
            </div>

            <div className="course-col">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,pellentesque aliquet turpis nulla,eleifend
                    faucibus elit.
                    pellentesque aliquet turpis nulla ,eleifend faucibus est
                    sollicitude ut. maeceans ut venenatis ex,et dapibus purus
                    Donec sit.
                </p>
            </div>
            <div className="course-col">
                <h3>post Graduaction </h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,pellentesque aliquet turpis nulla,eleifend
                    faucibus elit.
                    pellentesque aliquet turpis nulla ,eleifend faucibus est
                    sollicitude ut. maeceans ut venenatis ex,et dapibus purus
                    Donec sit.
                </p>
            </div>
        </div>

    </section>
    
    <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="row">
            <div className="campus-col">
                <img src= {london} alt="compus1"/>
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>

            <div className="campus-col">
                <img src={newyork} alt="compus2" />
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>

            <div className="campus-col">
                <img src={washingtion} alt="compus3" />
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </section>

    <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
        <div className="row">
            <div className="facilities-col">
                <img src= {library}  alt="fac1"/>
                <h3>World Class library</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    pellentesque aliquet turpis nulla </p>
            </div>

            <div className="facilities-col">
                <img src= {basketbal} alt="fac2"/>
                <h3>Largest Play Ground</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    pellentesque aliquet turpis nulla </p>
            </div>

            <div className="facilities-col">
                <img src= {cafeteria} alt="fac3" />
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    pellentesque aliquet turpis nulla </p>
            </div>
        </div>

    </section>

    <section className="testimonials">
        <h1>What Our Students Says</h1>
        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
        <div className="row">
            <div className="testimonial-col">
                <img src={user1} alt="user1"/>
                <div>
                    <p> Lorem ipsum dolor sit amet,consectetur adipiscing elit,pellentesque aliquet turpis
                        nulla,eleifend faucibus elit.
                        pellentesque aliquet turpis nulla,eleifend faucibus est
                        sollicitude ut. maeceans ut venenatis ex,et dapibus purus
                        Donec sit. </p>
                    <h3>Berkley</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>

            <div className="testimonial-col">
                <img  src = {user2} alt="user2" />
                <div>
                    <p> Lorem ipsum dolor sit amet,consectetur adipiscing elit,pellentesque aliquet turpis
                        nulla,eleifend faucibus elit.
                        pellentesque aliquet turpis nulla,eleifend faucibus est
                        sollicitude ut. maeceans ut venenatis ex,et dapibus purus
                        Donec sit. </p>
                    <h3>david Byer</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                </div>
            </div>
        </div>
    </section>

    {/* <!-----call to action-----> */}
    <section className="cta">
        <h1>Enroll For Our Various Online Courses Anywhere From The world</h1>
        <a href="" className="hero-btn">Contact us</a>
    </section>

    {/* <!-----footer-----> */}
    <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit,pellentesque aliquet turpis nulla,eleifend faucibus
            elit.<br />
            pellentesque aliquet turpis nulla,eleifend faucibus est
            sollicitude ut. maeceans ut venenatis ex,et dapibus purus</p>
        <div className="icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
        </div>
        <p>Made with <i className="fa fa-heart-o"></i> by <b> Mounika</b> </p>
    </section>
    </div>
  )
}

export default Landingpage