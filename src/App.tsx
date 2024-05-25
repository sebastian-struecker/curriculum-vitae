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
    EVENT_DRIVEN_ARCHITECTURE,
    HTML,
    JAVA,
    JAVASCRIPT,
    KOTLIN,
    MONGODB,
    POSTGRE_SQL,
    QUARKUS,
    REACT,
    SPRING_BOOT,
    SQL,
    TDD,
    TERRAFORM,
    TYPESCRIPT
} from "./models/skills.constants";
import Header from "./components/Header";
import portrait from "./images/portrait.png";
import {COMPANY_BOSCH, COMPANY_MHP} from "./models/company";
import Positions from "./components/Positions";
import {PROJECT_DESCRIPTIONS} from "./models/project";
import {
    DESCRIPTION_BOSCH_STUDENT,
    DESCRIPTION_MHP_FULL_TIME,
    DESCRIPTION_MHP_INTERNSHIP
} from "./models/position.constants";

function App() {
    return (<div className="App">
        <Header picture={portrait}/>
        <div className="body">
            <Section title={"About me"}>
                <Aboutme/>
            </Section>
            <Section title={"Skills"}>
                <Skills languages={[JAVA, KOTLIN, TYPESCRIPT, JAVASCRIPT, HTML, CSS, SQL]}
                        frameworks={[QUARKUS, SPRING_BOOT, ANGULAR, REACT]}
                        technologies={[DOCKER, MONGODB, APACHE_KAFKA, AZURE_CLOUD, POSTGRE_SQL, TERRAFORM]}
                        methods={[DDD, CLEAN_CODE, CLEAN_ARCHITECTURE, EVENT_DRIVEN_ARCHITECTURE, TDD]}
                ></Skills>
            </Section>
            <Section title={"Positions"}>
                <Positions positions={[{
                    title: "IT-Consultant",
                    company: COMPANY_MHP,
                    time: "Feb 2020 - Present",
                    description: DESCRIPTION_MHP_FULL_TIME
                }, {
                    title: "Internship",
                    company: COMPANY_MHP,
                    time: "Feb 2019 – Aug 2019",
                    description: DESCRIPTION_MHP_INTERNSHIP
                }, {
                    title: "Working student",
                    company: COMPANY_BOSCH,
                    time: "Jan 2018 – Jul 2018",
                    description: DESCRIPTION_BOSCH_STUDENT
                }]}/>
            </Section>
            <Section title={"Projects"}>
                <Projects projects={[{
                    title: "Application platform for employee apps",
                    description: PROJECT_DESCRIPTIONS.EMPLOYEE_APP,
                    skills: [KOTLIN, SPRING_BOOT, REACT, POSTGRE_SQL, DOCKER, TERRAFORM, AZURE_CLOUD],
                }, {
                    title: "Application for evaluating and ensuring vehicle software composite releases",
                    description: PROJECT_DESCRIPTIONS.VEHICLE_COMPOSITE,
                    skills: [KOTLIN, QUARKUS, ANGULAR, APACHE_KAFKA, MONGODB, DOCKER, TERRAFORM, AZURE_CLOUD],
                }, {
                    title: "Application for documenting UNECE-relevant information in the vehicle software update management system",
                    description: PROJECT_DESCRIPTIONS.UNECE_DOCUMENTATION,
                    skills: [JAVA, QUARKUS, ANGULAR, APACHE_KAFKA, MONGODB, DOCKER],
                }, {
                    title: "Application to management the lifecycle of ECU software defects",
                    description: PROJECT_DESCRIPTIONS.INTERNSHIP_DESCRIPTION,
                    skills: [JAVA, APACHE_KAFKA, DOCKER],
                }, {
                    title: "Visualization of the temporal sequence of ECU interactions of an AMALTHEA model",
                    skills: [ANGULAR],
                }]}/>
            </Section>
        </div>
    </div>);
}

export default App;

/*
{
                    title: "Enable transparency and improvement by creating a measurement system in a SAFe Agile Release Train",
                    description: PROJECT_DESCRIPTIONS.MASTER_THESIS,
                    skills: [SAFE, METRICS],
                }, {
                    title: "Creation of a migration concept for building blocks of a proprietary application platform to Jakarta EE MicroProfile",
                    description: PROJECT_DESCRIPTIONS.BACHELOR_THESIS,
                    skills: [JAVA, APACHE_KAFKA, DOCKER],
                }
 */
