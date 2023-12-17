import React from 'react';
import './App.scss';
import picture from './memoji.png';

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
                            link
                        </div>
                        <div className="header__text__links__link">
                            link
                        </div>
                        <div className="header__text__links__link">
                            link
                        </div>
                    </div>
                    <div className="header__text__cta">
                        Contact me: <a href="mailto:sebastian.struecker@web.de">sebastian.struecker@web.de</a>
                    </div>
                </div>
                <div className="header__picture">
                    <img src={picture} alt="logo"/>
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
