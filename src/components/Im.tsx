import React, {useState} from 'react';
import styled from "styled-components";
import picture from '../assets/image/imageMain.png';
import {Icon} from "./Icon";

export const Im = () => {

    const [stateProject, setStateProject] = useState(false)
    const [stateDownload, setStateDownload] = useState(false)

    return (
        <WrapperStyled>
            <img src={picture} alt=""/>
            <div>
                <NameStyled>I’m <SpanNameStyled>Alireza</SpanNameStyled> Kavousy nezjad</NameStyled>
                <DescriptionStyled>Draft is a revolutionary mobile app built to hel you manage your business easily and
                    save your
                    money.</DescriptionStyled>
                <ButtonsLinksStyled>
                    <ButtonStyled onMouseLeave={() => setStateProject(false)} onMouseEnter={() => setStateProject(true)} as={'a'}>
                        See Projects
                        {stateProject && <Icon width={'25px'} height={'25px'} viewBox={'0 0 30 30'} iconId={'arrowRight'}></Icon>}
                    </ButtonStyled>
                    <ButtonStyled onMouseLeave={() => setStateDownload(false)} onMouseEnter={() => setStateDownload(true)}>Download Resume
                        {stateDownload && <Icon width={'25px'} height={'25px'} viewBox={'0 0 30 30'} iconId={'arrowRight'}></Icon>}
                        </ButtonStyled>
                </ButtonsLinksStyled>
            </div>
        </WrapperStyled>
    );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 76px;
`

const SpanNameStyled = styled.span`
  color: rgb(33, 87, 242);
  font-size: 6rem;
`

const NameStyled = styled.h2`
  max-width: 422px;
  font-size: 6rem;
  font-weight: 700;
  line-height: 81.6px;
`

const DescriptionStyled = styled.h1`
  max-width: 350px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
`

const ButtonsLinksStyled = styled.div`
  display: flex;
  gap: 20px;
`

const ButtonStyled = styled.button`
  width: 200px;
  height: 55px;
  color: rgba(33,87,242,1);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 15px 25px;
  align-items: center;
  vertical-align: center;
  display: flex;
  gap: 20px;
  margin: 0 auto;

  &:hover {
    background: rgba(33, 87, 242, 1);
    color: #fff;
    border-radius: 20px;
  }
`