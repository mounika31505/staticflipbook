 import React from 'react';
 import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
 

 const Footer = () => {
  const scrollToheader = () => {
      scroll.scrollTo("header");
    };
  return (
    <div>
       <section id="about" className="footer">
                 <h1>About Us</h1>
                 <p>Fostering knowledge, nurturing leaders, and shaping tomorrow's visionaries
                   <br />. At Edumania, we believe in the power of education to create positive change.
                    Join us on a journey of academic excellence and personal growth.</p>
                 <div className="icons">
                     <i className="fa fa-facebook"></i>
                     <i className="fa fa-twitter"></i>
                     <i className="fa fa-instagram"></i>
                     <i className="fa fa-linkedin"></i>
                 </div>
                 <p>Made with<b>&hearts;</b> by <b> Mounika</b> </p>
                </section>
                <button className='footbtn' onClick={scrollToheader}>
                <ScrollLink to="about" smooth={true}  onClick={scrollToheader}></ScrollLink>
                &uarr;
      
    </button>
                </div>
          
   );
 }

export default Footer



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <section id="about" className="footer">
//       <h1>About Us</h1>
//       <p>Fostering knowledge, nurturing leaders, and shaping tomorrow's visionaries.
//          At Edumania, we believe in the power of education to create positive change.
//          Join us on a journey of academic excellence and personal growth.</p>
//       <div className="icons">
//         <i className="fa fa-facebook"></i>
//         <i className="fa fa-twitter"></i>
//         <i className="fa fa-instagram"></i>
//         <i className="fa fa-linkedin"></i>
//       </div>
//       <p>Made with <b>&hearts;</b> by <b>Mounika</b></p>
//     </section>
//   );
// }

// export default Footer;

