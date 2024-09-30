import React from 'react';
import {Skill} from "../Skill";
import photoshop from "../../assets/image/photoshop.png";
import styled from "styled-components";

export const DesktopSkills = () => {
    return (
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
    );
};

const SkillsStyled = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    gap: 13px;
    //margin-left: 23%;
    margin-left: calc(100vh / 4);
    margin-bottom: 80px;
    
    @media screen and (min-width: 769px) and (max-width: 1000px) {
      margin-left: 0;
    }
  }
`