import React from "react";

import {Header} from "./layout/header/Header";
import {Hero} from "./layout/hero/Hero";
import {Projects} from './layout/projects/Projects';
import { Profile } from './layout/profile/Profile';
import {ContactUs} from './layout/contact/ContactUs';
import {Footer} from './layout/footer/Footer';
import styled from "styled-components";
import {lightTheme} from "./styles/theme";
import { FloatingSlideBar } from './components/floatingSlideBar/FloatingSlideBar';
import {MobileSkills} from "./components/skills/MobileSkills";
import {useResize} from "./CustomHooks/Resize";


function App() {
    const {visibleSkills} = useResize()

    return (
        <div className="App">
            <FloatingSlideBar />
            <Header />
            <SectionHero>
                <Hero/>
            </SectionHero>
            {visibleSkills && <MobileSkills />}
            <Projects/>
            {/*<Profile/>*/}
            <ContactUs/>
            <Footer/>
        </div>
    );
}

const SectionHero = styled.section`
  background: ${lightTheme.backgroundGradient};
  margin-bottom: 60px;
  
  @media screen and (min-width: 1001px) and (max-width: 1400px) {
    background: ${lightTheme.backgroundGradientWidthScreenLess1400};
  }
  
  
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    background: none;
  }
`

export default App;

