import React from 'react';
import styled from "styled-components";
import {lightTheme} from "../../styles/theme";

interface myName {
    name: string,
    family: string
}

export const MyName = ({name, family}:myName) => {
    return (
        <NameStyled>I’m <SpanNameStyled>{name}</SpanNameStyled> {family}</NameStyled>
    );
};


const SpanNameStyled = styled.span`
  color: ${lightTheme.darkAccentColor};
  font-size: 6rem;
`

const NameStyled = styled.h2`
  max-width: 422px;
  font-size: 6rem;
  font-weight: 700;
  line-height: 81.6px;
  color: ${lightTheme.darkTextColor}
`

