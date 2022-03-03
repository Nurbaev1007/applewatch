import React from 'react';
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className="header__logo">
                        <img src={logo} alt="Apple Watch"/>
                    </div>

                    <ul className="header__list">
                        <li className="header__item">Design</li>
                        <li className="header__item">Health</li>
                        <li className="header__item">Workout</li>
                        <li className="header__item">Activity</li>
                        <li className="header__item">Connect</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;