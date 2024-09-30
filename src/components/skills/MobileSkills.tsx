import React from 'react';
import {Skill, SkillsStyledImage, SkillsStyledName} from "../Skill";
import photoshop from "../../assets/image/photoshop.png";
import styled from "styled-components";
import {Container} from "../container/Container";


export const MobileSkills = () => {
    return (
        <SectionMobileSkills>
            <Container>
                <SkillsStyled>
                    <Skill
                        title={'photoshop'}
                        src={photoshop}/>
                    <Skill
                        title={'photoshop'}
                        src={photoshop}/>
                    <Skill
                        title={'photoshop'}
                        src={photoshop}/>
                    <Skill
                        title={'photoshop'}
                        src={photoshop}/>
                </SkillsStyled>
            </Container>
        </SectionMobileSkills>
    );
};

const SectionMobileSkills = styled.section`
`

const SkillsStyled = styled.div`

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 50px;
    margin-bottom: 80px;
    justify-content: center;
    flex-wrap: wrap;

    // ${SkillsStyledName} {
    //   width: 271px;
    //   height: 153px;
    //   font-size: 33px;
    // }

    ${SkillsStyledImage} {
      max-width: 91px;
      max-height: 91px;
      right: 50%;
      translate: 50%;
    }
  }

  @media screen and (max-width: 620px) {
    margin: 0 50px 62px;
    gap: 30px;
  }

  @media screen and (max-width: 620px) and (min-width: 595px){
    margin: 0 63px 62px;
  }

`