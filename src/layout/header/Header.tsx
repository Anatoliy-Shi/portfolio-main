import React, {FC} from 'react';
import styled from "styled-components";
import logoLight from '../../assets/image/logoLight.png'
import logoDark from '../../assets/image/logoDark.png'
import {Navigate} from '../../components/Navigate';
import {lightTheme} from '../../styles/theme';
import {useResize} from "../../CustomHooks/Resize";


export const Header: FC = () => {
    const {visibleLogo} = useResize()

    return (
        <>
            <HeaderContent>
                    {visibleLogo
                        ? <Image width="80px" height="80px" src={logoLight} alt="logo"/>
                        : <Image width="80px" height="80px" src={logoDark} alt="logo"/>}
                <Navigate/>
            </HeaderContent>

        </>
    )
        ;
};

const Image = styled.img`
  @media screen and (max-width: 620px) {
    width: 37px;
    height: 37px;
  }
`


const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 100px;
  align-items: center;
  background: ${lightTheme.backgroundGradient};

  @media screen and (min-width: 1001px) and (max-width: 1400px) {
    background: ${lightTheme.backgroundGradientWidthScreenLess1400};
  }


  @media screen and (max-width: 1000px) {
    background: none;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    padding: 0 15px;
  }
`

