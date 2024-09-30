import React from 'react';
import photo from '../../assets/image/photoCard.png'
import styled from "styled-components";
import { ButtonStyled } from '../buttons/ButtonStyled';
import { LinkToStyled } from '../buttons/LinkToStyled';
import {lightTheme} from "../../styles/theme";
import { font } from '../font';


export const Cards = () => {
    return (
        <Card>
            <Image src={photo} alt="card"/>
            <CardName>Story motion for sale English cources</CardName>
            <ButtonsGroup>
                <LinkToStyled>Edit for you</LinkToStyled>
                <ButtonStyled color={lightTheme.lightTextColor}>See preview</ButtonStyled>
            </ButtonsGroup>


        </Card>
    );
};

const Card = styled.div`
  width: 270px;
  height: 394px;
  background: ${lightTheme.lightTextColor};
  -webkit-box-shadow: 5px 5px 19px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 19px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 19px 1px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  &:hover{
    background-color: ${lightTheme.lightAccentColor};
  }
  @media screen and (max-width: 620px) {
    width: 163px;
    height: 238px;
  }
`

const ButtonsGroup = styled.div`
  display: flex;
  padding: 0 33px 30px;
  & + button {
      color: ${lightTheme.lightTextColor};
  }
  @media screen and (max-width: 620px) {
    padding: 0 19px;
  }
  
  //@media screen and (max-width: 565px) and (max-width: 620px){
  //  width: 75%;
  //}
 
  ${LinkToStyled}, ${ButtonStyled} {
    padding: 0;
  }
`

const CardName = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 29.6px;
  color: ${lightTheme.darkAccentColor};
  padding: 15px 33px 25px;
  @media screen and (max-width: 620px) {
    ${font({Fmax: 20, Fmin: 12})};
    line-height: 18px;
    padding: 10px 19px;
  }
`

const Image = styled.img`
  object-view-box: inset(3% 0 37% 0%);
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  width: 100%;
`

