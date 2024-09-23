import React from 'react';
import {Skills} from '../../components/Skills';
import {Im} from '../../components/Im';
import styled from "styled-components";
import {Icon} from '../../components/icon/Icon';
import {Wrapper} from "../../components/wrapper/Wrapper";
import {Container} from "../../components/container/Container";

export const Main = () => {
    return (
        <Container>
         <Wrapper>
            <MainStyled>
                <Im/>
                <PlusStyledPosition>
                    <Icon width={'88px'}
                          height={'88px'}
                          fill={"#2157F2"}
                          viewBox={'0 0 88 88'}
                          iconId={'plus'}/>
                </PlusStyledPosition>
                <EllipseStyledPosition>
                    <Icon
                        width={'152px'}
                        height={'152px'}
                        stroke={'rgba(33, 87, 242, 0.5)'}
                        viewBox={'0 0 152 152'}
                        iconId={'ellipse'}/>
                </EllipseStyledPosition>
            </MainStyled>
            <Skills/>
         </Wrapper>
        </Container>
    );
};

const MainStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 200px 0 200px 0;
  background: linear-gradient(200deg, rgba(255, 255, 255, 0.5) -6.76%, rgba(0, 71, 255, 0.5) 200%);
  border: 1px solid #fff;
  z-index: 2;
  margin-bottom: 80px;
`

const PlusStyledPosition = styled.div`
  position: absolute;
  top: -70px;
  left: 40%;
  z-index: 1;

`

const EllipseStyledPosition = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`

