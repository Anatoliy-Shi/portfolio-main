import React from 'react';
import styled from "styled-components";
import { font } from './font';


interface SectionNameProps {
    children: React.ReactNode;
}

export const SectionName: React.FC<SectionNameProps> = ({ children }) => {
    return (
        <H2Styled>
            {children}
        </H2Styled>
    );
};

const H2Styled = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 43.52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  padding-bottom: 5px;
  position: relative;
  @media screen and (max-width: 567px) {
    ${font({Fmax: 32, Fmin: 19})};
  }
  
  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%);
    border-radius: 50%;
    margin-top: 4px;

    @media screen and (min-width: 568px) {
      width: 19px;
      height: 19px;
      bottom: -15px;
    }

    @media screen and (max-width: 567px) {
      width: 11px;
      height: 11px;
      bottom: -5px;
    }
  }
`
