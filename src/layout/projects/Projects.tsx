import React from 'react';
import {SectionName} from "../../components/SectionName";
import styled from "styled-components";
import {lightTheme} from "../../styles/theme";
import {Wrapper} from '../../components/wrapper/Wrapper';
import {Icon} from "../../components/icon/Icon";
import {Cards} from "../../components/card/Card";
import {Container} from "../../components/container/Container";

export const Projects = () => {
    return (
        <SectionProject>
            <SectionName>
                Projects
            </SectionName>
            <Container>
                <Wrapper>
                    <ListStyled>
                        <DotsPosition>
                            <Icon fill={'#A6BCFA'} viewBox={'0 0 400 500'} width={'400px'} height={'500px'}
                                  iconId={'dots'}/>
                        </DotsPosition>
                        <ItemStyled>Story</ItemStyled>
                        <ItemStyled>Post</ItemStyled>
                        <ItemStyled>Banner</ItemStyled>
                        <ItemStyled>Trailer</ItemStyled>
                        <ItemStyled>Desighn</ItemStyled>
                        <ItemStyled>More</ItemStyled>
                    </ListStyled>
                    <CardGroup>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </CardGroup>
                </Wrapper>
            </Container>
        </SectionProject>
    );
};

const SectionProject = styled.section``

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
  margin-bottom: 60px;
`

const DotsPosition = styled.div`
  @media (min-width: 769px) {
    position: absolute;
    top: -75px;
    left: 10px;
    z-index: -1;
  }
  @media (max-width: 769px) {
    display: none;
  }
`

const ItemStyled = styled.li`
  width: 159px;
  font-size: 20px;
  font-weight: 400;
  line-height: 27.2px;
  border: 3px solid ${lightTheme.lightAccentColor};
  background-color: ${lightTheme.lightTextColor};
  border-radius: 25px;
  text-align: center;
  padding: 7px;

  &:hover {
    color: ${lightTheme.lightTextColor};
    background-color: ${lightTheme.lightAccentColor};
    border-radius: 25px;
  }
`

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
  z-index: 1;
  margin-bottom: 150px;
`




