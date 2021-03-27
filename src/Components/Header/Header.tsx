import React, {useState} from 'react';
import './Header.scss';

function Header() {

    let [display, setDisplay] = useState(false)

    let burgerActive = () => {
        setDisplay(true)
    }

    let burgerDeactive = () => {
        setDisplay(false)
    }



    return (
        <>
            <div className="header">
                <div className="header__inner">
                    <div className="header__logo">
                        StartUp
                    </div>

                    {
                        display ?<div>
                            <div className="burger">
                                <div onClick={burgerDeactive} className="burger__menu">
                                    <div className="burger__item"></div>
                                    <div className="burger__item"></div>
                                    <div className="burger__item"></div>
                                </div>
                            </div>

                            <nav className={display ? "nav__menu" : "nav__menu__deactive"}>
                            <a href="" className="nav__link">Home</a>
                            <a href="" className="nav__link">Services</a>
                            <a href="" className="nav__link">About</a>
                            <a href="" className="nav__link">Works</a>
                            <a href="" className="nav__link">Blog</a>
                            <a href="" className="nav__link">Clients</a>
                            <a href="" className="nav__link">Contacts</a>
                        </nav>
                        </div>
                            : <div>
                            <div onClick={burgerActive} className="burger">
                                <div className="burger__menu">
                                    <div className="burger__item"></div>
                                    <div className="burger__item"></div>
                                    <div className="burger__item"></div>
                                </div>
                            </div>
                            </div>
                    }






                </div>
            </div>

        </>
    );
}

export default Header;
