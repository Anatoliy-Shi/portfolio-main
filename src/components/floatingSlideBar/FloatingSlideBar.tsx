import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import {lightTheme} from "../../styles/theme";
export const FloatingSlideBar = () => {
    return (
        <FloatingSlideBarStyled>
            <Icon iconId={'instagram'} />
            <a href="https://wa.me/79104243232"><Icon iconId={'whatsApp'} /></a>
            <a href="https://t.me/Abanit_ot"><Icon iconId={'telegram'} /></a>
        </FloatingSlideBarStyled>
    )
}

const FloatingSlideBarStyled = styled.div`
  border-radius: 0 25px 25px 0;
  height: 201px;
  width: 61px;
  position: fixed;
  left: 0;
  bottom: 70px;
  background: ${lightTheme.lightAccentColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
  z-index: 100;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`