import React from 'react'
import { user1, user2 } from '../../helpers/images'

const Testimonials = () => {
  return (
    <section className="testimonials">
    <h1>What Our Students Says</h1>
    <p>Listen to our students' stories—testimonials of inspiration, growth,
         and academic achievement at Edumania.
   </p>
    <div className="row">
        <div className="testimonial-col">
            <img src={user1} alt="user1" />
            <div>
                <p>Choosing Edumania was one of the best decisions I've made. 
                    The inclusive environment and commitment to excellence have
                     equipped me with the skills needed to thrive in my field.
                     Grateful for the Edumnia experience </p>
                <h3>Berkley</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
            </div>
        </div>

        <div className="testimonial-col">
            <img src={user2} alt="user2" />
            <div>
                <p>Edumania has been a transformative journey for me.
                     The dynamic curriculum, dedicated faculty, and a supportive
                      community have empowered me to excel academically and personally.
                       I am proud to be part of a university that values
                     innovation and fosters a culture of continuous learning </p>
                <h3>david Byer</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
            </div>
        </div>
    </div>
    {/* <div style={{
        position:"absolute",
        left:"-50px",
        top:"240px",
        width:"100px",
        height: "100px",
        backgroundColor:'aqua',
        filter:"blur(30px)",
        borderRadius:"100%"


    }} /> */}

{/* <div style={{
        position:"absolute",
        left:"40%",
        top:"100px",
        width:"250px",
        height: "150px",
        background:"linear-gradient(green,aqua,#fff,green,aqua,yellow)",
        filter:"blur(90px)",
        borderRadius:"10%"


    }} /> */}

<div style={{
        position:"absolute",
        left:"-30px",
        top:"250px",
        width:"70px",
        height: "70px",
        // backgroundColor:'#fff3f3',
        backgroundColor:'aqua',
        filter:"blur(10px)",
        borderRadius:"100%"
         }} />

<div style={{
        position:"absolute",
        left:"-50px",
        top:"180px",
        width:"30px",
        height: "30px",
        // backgroundColor:'#fff3f3',
        backgroundColor:'aqua',
        filter:"blur(2px)",
        borderRadius:"100%"
         }} />

</section>
  )
}

export default Testimonials