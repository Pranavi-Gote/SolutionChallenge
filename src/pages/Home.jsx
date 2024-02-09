import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNav from '../components/HomeNav';
import About from '../components/About';
import Features from '../components/Features';
import Homie from '../components/Homie';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='mainhome'>
            <HomeNav />
            <Homie />
            <About />
            <Features />
            <Footer />

        </div>
    );
}

export default Home;
