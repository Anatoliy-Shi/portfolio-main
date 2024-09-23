import React from 'react';
import styled from "styled-components";
import {lightTheme } from '../styles/theme';
import {Icon} from './icon/Icon';


export const Navigate = () => {
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
`

const ItemsListStyled = styled.li`
  color: ${lightTheme.darkTextColor};
  font-size: 1.6rem;
`

const ButtonStyled = styled.button`

`
