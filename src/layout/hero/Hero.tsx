import React, {FC} from 'react';
import {HeroSection} from '../../components/HeroSection';
import styled from "styled-components";
import {Icon} from '../../components/icon/Icon';
import {Wrapper} from "../../components/wrapper/Wrapper";
import {Container} from "../../components/container/Container";
import {SectionProfileWrapper} from "../../components/SectionProfileWrapper";
import {DesktopSkills} from "../../components/skills/DesktopSkills";
import {useResize} from "../../CustomHooks/Resize";

export const Hero: FC = () => {
    const {visibleSkills} = useResize()

    return (
        <Container>
         <Wrapper>
            <SectionProfileWrapper>
                <HeroSection/>
                <PlusStyledPosition>
                    <Icon width={'88px'}
                          height={'88px'}
                          fill={"#2157F2"}
                          viewBox={'0 0 88 88'}
                          iconId={'plus'}/>
                </PlusStyledPosition>
                <EllipseStyledPosition>
                    <Icon
                        width={'152px'}
                        height={'152px'}
                        stroke={'rgba(33, 87, 242, 0.5)'}
                        viewBox={'0 0 152 152'}
                        iconId={'ellipse'}/>
                </EllipseStyledPosition>
            </SectionProfileWrapper>
             {!visibleSkills &&  <DesktopSkills/>}

         </Wrapper>
        </Container>
    );
};

const PlusStyledPosition = styled.div`
  position: absolute;
  top: -70px;
  left: 40%;
  z-index: 1;
  
  @media screen and (max-width: 768px) {
    left: 75%;
    top: -55px;
  }

`

const EllipseStyledPosition = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  
  @media screen and (max-width: 768px) {
    right: -57px;
  }
  @media screen and (max-width: 620px) {
    right: 0;
    bottom: -60px;
  }
`

