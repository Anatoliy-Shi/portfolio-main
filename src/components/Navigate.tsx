import React, {FC} from 'react';
import styled from "styled-components";
import {lightTheme } from '../styles/theme';
import { font } from './font';
import {Icon} from './icon/Icon';


export const Navigate: FC = () => {
    return (
        <NavigateStyled>
            <ListStyled>
                <ItemsListStyled>Home</ItemsListStyled>
                <ItemsListStyled>Projects</ItemsListStyled>
                <ItemsListStyled>About</ItemsListStyled>
                <ItemsListStyled>Content</ItemsListStyled>
                <ItemsListStyled>
                    <ButtonStyled>
                        <Icon viewBox={'0 -5 36 36'} iconId={'moon-switch-theme'}/>
                    </ButtonStyled>
                </ItemsListStyled>
            </ListStyled>
        </NavigateStyled>
    );
};

const NavigateStyled = styled.nav`
  max-height: 80px;
`

const ListStyled = styled.ul`
  display: flex;
  gap: 58px;
  align-items: center;
  
  @media screen and (max-width: 576px) {
    gap: 40px;
  }
`

const ItemsListStyled = styled.li`
  color: ${lightTheme.darkTextColor};
  font-size: 1.6rem;
  @media screen and (max-width: 620px) {
    ${font({Fmin: 12, Fmax: 16} )}
  } 

`

const ButtonStyled = styled.button`

`
