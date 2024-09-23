import styled from "styled-components";
import {lightTheme} from "../../styles/theme";

export const ButtonStyled = styled.button`
  color: ${lightTheme.buttonColor};
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  width: 100%;
  padding: 5px;
  &:hover {
    transform: scale(1.05);
    color: ${props => props ? props.color : lightTheme.buttonColor};
  }
`