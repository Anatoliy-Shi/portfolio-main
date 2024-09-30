import React from 'react';
import styled from "styled-components";
import wave from '../../assets/image/wave.png'

export const Footer = () => {
    return (
        <FooterStyled>
            <Copyright>
                <CodedBy>Coded by Alireza Kavousy nezhad</CodedBy>
                <Rights>All Rights Reserved 2022<SupStyled>@</SupStyled></Rights>
            </Copyright>
        </FooterStyled>
    );
};

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 125px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`
const SupStyled = styled.sup`
  font-family: Inter, sans-serif;
  font-size: 6.89px;
  font-weight: 700;
  line-height: 11.68px;
`

const CodedBy = styled.p`
  font-family: Inter, sans-serif;
  font-size: 16.08px;
  font-weight: 700;
  line-height: 19.45px;

`

const Rights = styled.p`
  font-family: Inter, sans-serif;
  font-size: 11.48px;
  font-weight: 400;
  line-height: 13.9px;
  
`

const FooterStyled = styled.footer`
  margin-top: 80px;
  background-image: url(${wave});
  height: 240px;
  background-position: inherit;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
    height: 150px;
  }
`



