import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import './HomeNav.css';

function HomeNav() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };
    const goToSignUP = () => {
        navigate('/SignUp');
    };
    return (
        <div className='Navbar'>
            <h1>75Hard</h1>

            <div className="right">
                <button onClick={goToLogin}>Login</button>
                <p>OR</p>
                <button onClick={goToSignUP}>SignUP</button>
            </div>
        </div>
    )
}

export default HomeNav
