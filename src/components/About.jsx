import React from 'react'
import './About.css'
import about from '../assets/about.jpg'
import signupbg from '../assets/signupbg.png'

function About() {
    return (
        <div className="main">
            <div className="left1">
                <div className="image-container1">
                    <img className="bg1" src={signupbg} alt="Background" />
                    <img className="top1" src={about} alt="Top" />
                </div>
            </div>
            <div className="right1">
                <h1>About</h1>
                <p>
                    This is a simple web application that helps you to track your daily
                    activities and habits. It is inspired by the 75Hard challenge. The
                    challenge is to follow a strict routine for 75 days. The routine
                    includes two workouts a day, following a diet, drinking a gallon of
                    water, reading 10 pages of a book, and taking a progress picture every
                    day. This web application helps you to track your progress and stay
                    motivated.
                </p>
            </div>

        </div>
    )
}

export default About 
