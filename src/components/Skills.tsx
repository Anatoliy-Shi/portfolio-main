import React from 'react';
import styled from "styled-components";
import photoshop from "../assets/image/photoshop.png";
import { Skill } from './Skill';

export const Skills = () => {
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
  display: flex;
  gap: 13px;
  margin-left: 21%;
  margin-bottom: 80px;
`





