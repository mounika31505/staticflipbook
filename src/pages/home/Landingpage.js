import React, { useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { logo, london, washingtion, newyork, cafeteria, library, basketbal, user1, user2 } from '../../helpers/images'
import "../../styles/Landingpage.css";
import About from '../auth/About';
import { useAuthContext } from '../../contexts/AuthContextProvider';
import Header from '../../components/landingpage/Header';
import Campus from '../../components/landingpage/Campus';
import Course from '../../components/landingpage/Course';
import Facilities from '../../components/landingpage/Facilities';
import Testimonials from '../../components/landingpage/Testimonials';
import Cta from '../../components/landingpage/Cta';
import Footer from '../../components/landingpage/Footer';
import { LandingStateProvider } from '../../contexts/LandingContextProvider';

const Landingpage = () => {

    const fromPage = "Landing page constant";
    useEffect(() => {
        localStorage.setItem("AuthToken", "sfnsdlfnsdflnsdfsd45464523fsdfnldsdsfToken")
    }, [])

    return (
        <LandingStateProvider>
            <main>
                <Header />
                <Campus />
                <Course />
                <Facilities />
                <Testimonials />
                <Cta />
                <Footer />
            </main>
        </LandingStateProvider>

    )
}

export default Landingpage