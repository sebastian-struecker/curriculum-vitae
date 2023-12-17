import React from 'react';
import './App.scss';
import picture from './memoji.png';
import {SocialIcon} from "react-social-icons";

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="header__text">
                    <div className="header__text__greetings">
                        Hello, I am Sebastian Strücker.
                    </div>
                    <div className="header__text__description">
                        I am an ambitious developer who is driven by new and exciting environments. I view challenges as
                        chances
                        to learn. I value creating value, being empathetic, and forming partnerships.
                    </div>
                    <div className="header__text__links">
                        <div className="header__text__links__link">
                            <SocialIcon bgColor="#846855" url="https://www.linkedin.com/in/sebastian-struecker/"/>
                        </div>
                        <div className="header__text__links__link">
                            <SocialIcon bgColor="#846855" url="https://github.com/sebastian-struecker/"/>
                        </div>
                    </div>
                    <div className="header__text__cta">
                        Contact me: <a href="mailto:sebastian.struecker@web.de">sebastian.struecker@web.de</a>
                    </div>
                </div>
                <div className="header__picture">
                    <img src={picture} alt="myself"/>
                </div>
            </header>
            <div className="body">
                <div className="body__section">
                    <div className="body__section__title">
                        About me
                    </div>
                    <div className="body__section__content">
                        Stuff
                    </div>
                </div>
                <div className="body__section">
                    <div className="body__section__title">
                        Focus topics
                    </div>
                    <div className="body__section__content">
                        Stuff
                    </div>
                </div>
                <div className="body__section">
                    <div className="body__section__title">
                        Skills
                    </div>
                    <div className="body__section__content">
                        Stuff
                    </div>
                </div>
                <div className="body__section">
                    <div className="body__section__title">
                        Projects
                    </div>
                    <div className="body__section__content">
                        Stuff
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
