import React from 'react';
import styled from "styled-components";
import {lightTheme} from "../../styles/theme";
import { font } from '../font';

interface profileTitle {
    name: string,
    family: string
}

export const ProfileTitle = ({name, family}:profileTitle) => {
    return (
        <NameStyled>I’m <SpanNameStyled>{name}</SpanNameStyled> {family}</NameStyled>
    );
};


const SpanNameStyled = styled.span`
  color: ${lightTheme.darkAccentColor};
  font-size: 6rem;
  @media screen and (max-width: 620px) {
    ${font({Fmin: 33, Fmax: 60})};
  }
`

const NameStyled = styled.h3`
  max-width: 422px;
  font-size: 6rem;
  font-weight: 700;
  line-height: 81.6px;
  color: ${lightTheme.darkTextColor};

  @media screen and (max-width: 620px) {
    ${font({Fmin: 33, Fmax: 60})};
    line-height: 38px
}
`

