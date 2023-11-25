// import React, { useState } from 'react'
// import "../../styles/Contacts.css"
// import { customer } from "../../helpers/images"
//  import bgimage from "../../assets/images/wp2940002-login-wallpaper.jpg";

// const Contacts = () => {
//   // document.body.background = bgimage
//   return (
//     <div className='containerStyle'>
//       <h1 align="center">Contact Us</h1>

//     <div className="grid-continer"> 
//     <div>
//         <div className="left">
//         <img src={customer} alt="Customer" />
//         </div>  
//          <div className='right'>
//          <form className='main'>
//           <div className="input-box">
//             <label htmlFor="name">Name</label>
//             <input className='inpt' type="text" id="name" name="name" required placeholder='enter the name' />
//           </div>
//           <div className="input-box">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" placeholder='enter the email' required />
//           </div>
//           <div className="">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" rows="4" placeholder='message'></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         </div>
//       </div>
//       </div> 
//       </div>

//   )
// }

// export default Contacts



import React from 'react';
import '../../styles/Contacts.css';
import { customer } from '../../helpers/images';

const Contacts = () => {
  return (
    <div className='tg'>
      <div>
        <h1>Contact Us</h1>
        <h5>
          Any questions or remarks? Just write us a message!!
        </h5>
      </div>
      <div className="form-container">
        <div className="left">
          <img src={customer} alt="Customer img" />
        </div>
        <div className="right">

          <form className="main">
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter the name" />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter the email" required />
            </div>
            <div className="input-box">
              <label htmlFor="message">How can we help?</label>
              <textarea
                     style={{ resize: "none" }}
                      id="message" 
                      name="message"
                       rows="4"
                        placeholder="Write here"
                />

                  
            </div>
            <button className='contactsbtn' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;


