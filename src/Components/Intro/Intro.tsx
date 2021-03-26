import React from 'react';
import './Intro.scss';

function Intro() {
    return (
        <>
            <div className="intro">
                <div className="intro__color">
                    <div className="intro__inner">
                        <div className="intro__title">Welcome to STARTUP</div>
                        <div className="intro__text">Your Favourite Creative Agency Template</div>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Intro;
