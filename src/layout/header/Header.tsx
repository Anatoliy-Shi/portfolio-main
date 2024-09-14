import React from 'react';
import styled from "styled-components";
import logo from '../../assets/image/logo.png'
import { Navigate } from '../../components/Navigate';

export const Header = () => {
    return (
        <HeaderContent>
            <img width="80px" height="80px" src={logo} alt="logo"/>
            <Navigate />
        </HeaderContent>
    );
};

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 0 35px;
  align-items: center;
  margin-bottom: 70px;
`

