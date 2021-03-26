import React from 'react';
import './Header.scss';

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__inner">
                    <div className="header__logo">
                        StartUp
                    </div>
                    <nav className="nav__menu">
                        <a href="" className="nav__link">Home</a>
                        <a href="" className="nav__link">Services</a>
                        <a href="" className="nav__link">About</a>
                        <a href="" className="nav__link">Works</a>
                        <a href="" className="nav__link">Blog</a>
                        <a href="" className="nav__link">Clients</a>
                        <a href="" className="nav__link">Contacts</a>
                    </nav>
                </div>
            </div>

        </>
    );
}

export default Header;
