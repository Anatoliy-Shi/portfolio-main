import React from 'react';
import styled from 'styled-components';


const SkillProps = {
    title: 'string',
    src: 'string'
}

export const Skill = (props:typeof SkillProps) => {
    return (
        <SkillsStyledName>{props.title}
            <SkillsStyledImage src={props.src} alt={props.title}/>
        </SkillsStyledName>
    );
};

const SkillsStyledName = styled.p`
  position: relative;
  background: rgba(166, 188, 250, 1);
  width: 160px;
  height: 90px;
  border-radius: 24px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 27.2px;
  color: #fff;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SkillsStyledImage = styled.img`
position: absolute;
  top: -45px;
`