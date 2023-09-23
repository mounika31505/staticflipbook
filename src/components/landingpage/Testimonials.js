import React from 'react'
import { user1, user2 } from '../../helpers/images'

const Testimonials = () => {
  return (
    <section className="testimonials">
    <h1>What Our Students Says</h1>
    <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
    <div className="row">
        <div className="testimonial-col">
            <img src={user1} alt="user1" />
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
            <img src={user2} alt="user2" />
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
  )
}

export default Testimonials