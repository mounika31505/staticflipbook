import React from 'react'
import { Link } from 'react-router-dom';

const Course = () => {
    return (


        <section id="course"  className="course">
            <h1>Courses we offer</h1>
            <p>Explore a diverse range of cutting-edge courses at Edumania. 
                Tailored to industry needs, our programs pave the way for academic excellence and real-world success</p>

            <div className="row">
                <div className="course-col">
                    <h3>intermediate</h3>
                    <p>Lay the foundation for your academic pursuit with our Intermediate courses.
                         Cultivate essential skills and knowledge in a supportive learning environment
                    </p>
                </div>

                <div className="course-col">
                    <h3>Graduaction</h3>
                    <p>Elevate your knowledge and skills with our Graduate programs. Dive into specialized fields,
                         engage in practical learning, and prepare for a successful career ahead
                    </p>
                </div>
                <div className="course-col">
                    <h3>post Graduaction </h3>
                    <p>Elevate your expertise and career prospects through our Postgraduate studies. Explore advanced concepts, 
                        conduct research, and immerse yourself in a community of academic excellence.
                    </p>
                </div>
            </div>

        </section>

    )
}

export default Course