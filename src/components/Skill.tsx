import React from 'react';
import styled from 'styled-components';
import {font} from './font';


const SkillProps = {
    title: 'string',
    src: 'string'
}

export const Skill = (props: typeof SkillProps) => {
    return (
        <SkillsStyledName>{props.title}
            <SkillsStyledImage src={props.src} alt={props.title}/>
        </SkillsStyledName>
    );
};

export const SkillsStyledName = styled.p`
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

  @media screen and (max-width: 768px) {
    width: 271px;
    height: 153px;
  }
  
  @media screen and (max-width: 620px) {
    ${font({Fmin: 16, Fmax: 33})};
    width: 145px;
    height: 82px;
    //margin: 0 auto;
  }
`

export const SkillsStyledImage = styled.img`
  position: absolute;
  top: -45px;

  @media screen and (max-width: 768px) {
    width: 92px;
    ${font({Fmin: 18, Fmax: 33})};
  }

  @media screen and (max-width: 620px) {
    width: 50px;
    top: -25%

`