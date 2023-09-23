import React from 'react'
import { london, newyork, washingtion } from '../../helpers/images'

const Campus = () => {
    return (
        <section className="campus">
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="row">
                <div className="campus-col">
                    <img src={london } alt="compus1" />
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
    )
}

export default Campus