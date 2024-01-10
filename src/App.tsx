import React from 'react';
import './App.scss'
import {SocialIcon} from "react-social-icons";
import picture from "./memoji.png";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";

const COMPANY_MHP = {
    name: "MHP - A Porsche Company", url: "https://www.mhp.com/en/"
};

const COMPANY_BOSCH = {
    name: "Robert Bosch GmbH", url: "https://www.bosch.com/"
}

function App() {
    return (<div className="App">
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
                <Aboutme/>
            </div>
            <div className="body__section">
                <Projects projectList={[{
                    title: "R156",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                        "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint " +
                        "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id " +
                        "est laborum. \\\\n" +
                        "Line \\\\n" +
                        "Line \\\\n" +
                        "Line",
                    skills: ["1", "2", "3", "4"],
                    position: {
                        title: "IT-Consultant", company: COMPANY_MHP
                    },
                    time: "Feb 2020 - Present",
                }, {
                    title: "Masterthesis", description: "Stuff", skills: ["1", "2", "3", "4"], position: {
                        title: "Masterthesis", company: COMPANY_MHP
                    }, time: "Feb 2019 – Aug 2019"

                }, {
                    title: "Bachelorthesis", description: "Stuff", skills: ["1", "2", "3", "4"], position: {
                        title: "Bachelorthesis", company: COMPANY_MHP
                    }, time: "Feb 2019 – Aug 2019"
                }, {
                    title: "Fehler", description: "Stuff", skills: ["1", "2", "3", "4"], position: {
                        title: "Internship", company: COMPANY_MHP
                    }, time: "Feb 2019 – Aug 2019"
                }, {
                    title: "Amalthea",
                    description: "Stuff",
                    skills: ["1", "2", "3", "4"],
                    time: "Jan 2018 – Jul 2018",
                    position: {
                        title: "Student trainee", company: COMPANY_BOSCH
                    }
                }]}/>
            </div>
            <div className="body__section">
                <Skills languages={["Java", "Kotlin", "Typescript", "Javascript", "HTML", "CSS", "SQL"]}
                        frameworks={["Quarkus", "Angular", "React"]}
                        technologies={["MongoDB", "Apache Kafka", "Azure Cloud", "PostgreSQL", "Terraform"]}
                        methods={["Scaled Agile Framework", "Scrum", "Domain Driven Design", "Clean Code", "Clean Architecture", "Test Driven Development"]}
                ></Skills>
            </div>
        </div>
        <footer className="footer"/>
    </div>);
}

export default App;
