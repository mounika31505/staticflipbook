import React from 'react'
import { basketbal, cafeteria, library } from '../../helpers/images'

const Facilities = () => {
  return (
    
            <section className="facilities">
                <h1>Our Facilities</h1>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                <div className="row">
                    <div className="facilities-col">
                        <img src={library} alt="fac1" />
                        <h3>World Class library</h3>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                            pellentesque aliquet turpis nulla </p>
                    </div>

                    <div className="facilities-col">
                        <img src={basketbal} alt="fac2" />
                        <h3>Largest Play Ground</h3>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                            pellentesque aliquet turpis nulla </p>
                    </div>

                    <div className="facilities-col">
                        <img src={cafeteria} alt="fac3" />
                        <h3>Tasty and Healthy Food</h3>
                        <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                            pellentesque aliquet turpis nulla </p>
                    </div>
                </div>

            </section>
            
  )
}

export default Facilities