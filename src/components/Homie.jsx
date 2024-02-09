import React from 'react'
import signupbg from '../assets/signupbg.png'
import home from '../assets/home.jpg'
import { useNavigate } from 'react-router-dom';
import './homie.css'

function Homie() {
    const navigate = useNavigate();

    const goToSignUP = () => {
        navigate('/SignUp');
    };
    return (
        <div className="main">
            <div className="right2">
                <h1>Ready for the Challenge</h1>
                <p>
                    The 75 Hard Challenge was created in 2019 by entrepreneur Andy Frisella, a podcaster and CEO of the supplement company 1st Phorm. 75 Hard is not a fitness challenge, but a “transformative mental toughness program .
                    For 75 consecutive days, 75 Hard participants must do the following every day, according to the program’s welcome email:
                </p>
                <button onClick={goToSignUP}>Get Started</button>
            </div>
            <div className="left2">
                <div className="image-container2">
                    <img className="bg2" src={signupbg} alt="Background" />
                    <img className="top2" src={home} alt="Top" />
                </div>

            </div>

        </div>
    )
}

export default Homie
