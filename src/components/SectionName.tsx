import React from 'react';
import {DotStyle} from "./dot/Dot";
import styled from "styled-components";


interface SectionNameProps {
    children: React.ReactNode;
}

export const SectionName: React.FC<SectionNameProps> = ({ children }) => {
    return (
        <H2Styled>
            {children}
            <DotStyle width={'19px'} height={'19px'} />
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
`
