import React from 'react';
import '../App.css';
import { Button } from './Buttons';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btn">
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    GET STARTED
                    </Button>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    WATCH TRAILER
                    <i className='far fa-play-circle' />
                </Button>
            </div>

        </div>
    )
}

export default HeroSection;
