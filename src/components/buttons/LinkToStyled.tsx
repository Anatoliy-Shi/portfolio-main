import styled from "styled-components";
import {lightTheme} from "../../styles/theme";

interface Link {
  width?: any
}

export const LinkToStyled = styled.a<Link>`
  width: ${props => props.width || '100%' };
  //width: 100%;
  padding: 5px;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background: ${lightTheme.darkAccentColor};
  color: #fff;
  gap: 14px;
  &:hover {
    transform: scale(1.05);
  }
  `