import './App.css';
import React from "react";

import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Projects} from './layout/projects/Projects';
import { Profile } from './layout/profile/Profile';
import {ContactUs} from './layout/contact/ContactUs';
import {Footer} from './layout/footer/Footer';
import styled from "styled-components";
import {lightTheme} from "./styles/theme";
import { FloatingSlideBar } from './components/floatingSlideBar/FloatingSlideBar';


function App() {
    return (
        <div className="App">
            <FloatingSlideBar />
            <Header />
            <SectionMain>
                <Main/>
            </SectionMain>
            <Projects/>
            <Profile/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

const SectionMain = styled.section`
  background: ${lightTheme.backgroundGradient};
  margin-bottom: 60px;
`

export default App;

