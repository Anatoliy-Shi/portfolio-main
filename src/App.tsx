import './App.css';
import React from "react";

import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Projects} from './layout/projects/Projects';
import {AboutMe} from './layout/aboutme/AboutMe';
import {ContactUs} from './layout/contact/ContactUs';
import {Footer} from './layout/footer/Footer';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <SectionStyled>
                <Header/>
                <Main/>
            </SectionStyled>
            <Projects/>
            <AboutMe/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

const SectionStyled = styled.section`
  background: linear-gradient(to right, #A6BCFA 32.5%, #fff 0%);
  height: 200vh;
`

export default App;

