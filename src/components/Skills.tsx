import React from 'react';
import styled from "styled-components";
import photoshop from '../assets/image/photoshop.png';

export const Skills = () => {
    return (
        <SkillsStyled>
            <SkillsStyledName>photoshop
                    <SkillsStyledImage src={photoshop} alt="photoshop"/>
            </SkillsStyledName>

            <SkillsStyledName>photoshop
                <SkillsStyledImage src={photoshop} alt="photoshop"/>
            </SkillsStyledName>

            <SkillsStyledName>photoshop
                <SkillsStyledImage src={photoshop} alt="photoshop"/>
            </SkillsStyledName>

            <SkillsStyledName>photoshop
                <SkillsStyledImage src={photoshop} alt="photoshop"/>
            </SkillsStyledName>

        </SkillsStyled>
    );
};

const SkillsStyled = styled.div`
  display: flex;
  gap: 25px;
  justify-content: flex-end;
  margin-right: 20%;
`

const SkillsStyledImage = styled.img`
position: absolute;
  top: -45px;
  right: 45px;
`

const SkillsStyledName = styled.p`
  position: relative;
  background: rgba(166, 188, 250, 1);
  width: 161px;
  height: 91px;
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

