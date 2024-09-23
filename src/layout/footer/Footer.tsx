import React from 'react';
import styled from "styled-components";
import { Icon } from '../../components/icon/Icon';
import {lightTheme} from "../../styles/theme";

export const Footer = () => {
    return (
        <FooterStyled>
            <Icon height={'153'} viewBox={'0 0 1440 153'} fill={lightTheme.footerBackground} iconId={'wave'} />
            <Icon height={'120'} viewBox={'0 0 1440 153'} fill={lightTheme.footerBackground} iconId={'wave'} />
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
  padding-bottom: 70px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #fff;
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
  position: relative;
  margin-top: 195px;

  svg:first-child {
    position: absolute;
    z-index: -1;
    bottom: 60px;
    width: 100%;
  }
  svg:nth-child(2) {
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
  }
`



