import React from 'react';
import './App.scss'
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Section from "./components/Section";
import {
    ANGULAR,
    APACHE_KAFKA,
    AZURE_CLOUD,
    CLEAN_ARCHITECTURE,
    CLEAN_CODE,
    CSS,
    DDD,
    DOCKER,
    HTML,
    JAVA,
    JAVASCRIPT,
    KOTLIN,
    METRICS,
    MONGODB,
    POSTGRE_SQL,
    QUARKUS,
    REACT,
    SAFE,
    SCRUM,
    SQL,
    TDD,
    TERRAFORM,
    TYPESCRIPT
} from "./models/skills";
import Header from "./components/Header";
import portrait from "./images/portrait.png";

const COMPANY_MHP = {
    name: "MHP - A Porsche Company", url: "https://www.mhp.com/en/"
};

const COMPANY_BOSCH = {
    name: "Robert Bosch GmbH", url: "https://www.bosch.com/"
}

function App() {
    return (<div className="App">
        <Header picture={portrait}/>
        <div className="body">
            <Section title={"About me"}>
                <Aboutme/>
            </Section>
            <Section title={"Skills"}>
                <Skills languages={[JAVA, KOTLIN, TYPESCRIPT, JAVASCRIPT, HTML, CSS, SQL]}
                        frameworks={[QUARKUS, ANGULAR, REACT]}
                        technologies={[DOCKER, MONGODB, APACHE_KAFKA, AZURE_CLOUD, POSTGRE_SQL, TERRAFORM]}
                        methods={[SAFE, SCRUM, DDD, CLEAN_CODE, CLEAN_ARCHITECTURE, TDD]}
                ></Skills>
            </Section>
            <Section title={"Projects"}>
                <Projects projectList={[{
                    title: "Application platform for employees without access to corporate hardware",
                    description: "This in-house application provides access to enterprise applications, eliminating the need for hardware devices managed by the organization. It provides secure and reliable access for diverse groups of employees by providing a centralized platform with robust security, reliability, and support for multiple applications.",
                    skills: [KOTLIN, QUARKUS, ANGULAR, APACHE_KAFKA, MONGODB, DOCKER, TERRAFORM, AZURE_CLOUD],
                    position: {
                        title: "IT-Consultant", company: COMPANY_MHP
                    },
                    time: "Jan 2024 - Present",
                }, {
                    title: "Application platform to support ECU data throughout the vehicle lifecycle",
                    description: "This in-house application provides an ECU software lifecycle platform that efficiently supports ECU software throughout the vehicle lifecycle. This platform ensures accessibility, version control, and seamless integration while prioritizing data security and compliance.",
                    skills: [JAVA, KOTLIN, QUARKUS, ANGULAR, APACHE_KAFKA, MONGODB, DOCKER, TERRAFORM, AZURE_CLOUD],
                    position: {
                        title: "IT-Consultant", company: COMPANY_MHP
                    },
                    time: "Feb 2020 - Dec 2023",
                }, {
                    title: "Enable transparency and improvement by creating a measurement system in a SAFe Agile Release Train",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    skills: [SAFE, SCRUM, METRICS],
                    position: {
                        title: "Master's thesis", company: COMPANY_MHP
                    },
                    time: "Mar 2022 – Feb 2023"
                }, {
                    title: "Creation of a migration concept for building blocks of a proprietary application platform to Jakarta EE MicroProfile",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    skills: [JAVA, APACHE_KAFKA, DOCKER],
                    position: {
                        title: "Bachelor's thesis", company: COMPANY_MHP
                    },
                    time: "Sep 2019 – Jan 2020"
                }, {
                    title: "Application to management the lifecycle of ECU software defects",
                    description: "This in-house software optimizes the defect management process, enabling automotive organizations to efficiently and reliably deliver high-quality ECU software throughout its lifecycle.",
                    skills: [JAVA, APACHE_KAFKA, DOCKER],
                    position: {
                        title: "Internship", company: COMPANY_MHP
                    },
                    time: "Feb 2019 – Aug 2019"
                }, {
                    title: "Visualization of the temporal sequence of ECU interactions of an AMALTHEA model",
                    skills: [ANGULAR],
                    time: "Jan 2018 – Jul 2018",
                    position: {
                        title: "Student trainee", company: COMPANY_BOSCH
                    }
                }]}/>
            </Section>
        </div>
        <footer className="footer">
            <div>Design inspired by Mertkan Henden</div>
        </footer>
    </div>);
}

export default App;
