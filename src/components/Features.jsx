import React from 'react'
import signupbg from '../assets/signupbg.png'
import feature from '../assets/features.jpg'
import './features.css'

function Features() {
    return (
        <div className="main">
            <div className="right2">
                <h1>Features</h1>
                <p>
                    For 75 consecutive days, 75 Hard participants must do the following every day, according to the program’s welcome email:
                    Follow a diet. While it can be a diet of your choosing, the diet must be a structured eating plan with the goal of physical improvement. No alcohol or meals outside your chosen diet are allowed.
                    Complete two 45-minute workouts, one of which must be outdoors.
                    Take a progress picture.
                    Drink 1 gallon of water.
                    Read 10 pages of a book (audiobooks not included).
                    Furthermore, no alterations to the program are allowed. If you miss any of your daily goals, your progress resets to day one.

                    NOTE - The schedule can modified acccording to task that one need perform or excel both physically and mentally
                </p>
            </div>
            <div className="left2">
                <div className="image-container2">
                    <img className="bg2" src={signupbg} alt="Background" />
                    <img className="top2" src={feature} alt="Top" />
                </div>
            </div>

        </div>
    )
}

export default Features
