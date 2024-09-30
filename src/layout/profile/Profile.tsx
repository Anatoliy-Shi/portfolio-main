import React from 'react';
import photo from '../../assets/image/qqq.png'
import styled from "styled-components";
import {ProfileTitle} from "../../components/profileTitle/ProfileTitle";
import {Icon} from '../../components/icon/Icon';
import {Container} from '../../components/container/Container';

import map from '../../assets/image/map.png'

export const Profile = () => {
    return (
        <SectionProfile>
            <Container>
                <DivAlignToBottom>
                    <AboutStyled>
                        <SocialStyled>
                            <Icon iconId={'whatsApp'}/>
                            <Icon iconId={'instagram'}/>
                            <Icon width={'36'} height={'36'} viewBox={'0 -2 36 36'} iconId={'downloadResume'}/>
                        </SocialStyled>
                        <ProfileTitle name={"Alireza"} family={'Kavousy nezjad'}/>
                        <ListStyled>
                            <ItemStyled>I was born in Iran-Mashhad</ItemStyled>
                            <ItemStyled>I’m 20 years old</ItemStyled>
                            <ItemStyled>I have started my interest in this field from 2019</ItemStyled>
                            <ItemStyled>I’m designer , video editor , web developer and ...</ItemStyled>
                            <ItemStyled>My phone number in Iran +989212073348</ItemStyled>
                        </ListStyled>
                    </AboutStyled>
                    <PhotoImage src={photo} alt="photo"/>
                </DivAlignToBottom>
            </Container>
        </SectionProfile>
    );
};

const SectionProfile = styled.section`
  background-image: url(${map});
  background-color: #a6bcfa;
  position: relative;
  height: 850px;
  background-repeat: no-repeat;
  background-position: 25% center;
`

const DivAlignToBottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  width: 100%;
`

const SocialStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  width: 100%;
  margin-right: 24px;
  margin-bottom: 18px;
`

const AboutStyled = styled.div`
  width: 565px;
  height: 500px;
  border-radius: 75px 0 75px 0;
  //border-radius: 200px 0 200px 0;
  border: 1px solid #fff;
  background: linear-gradient(132deg, rgb(160 188 253 / 50%) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  margin-bottom: 38px;
`

const ListStyled = styled.ul`
  margin-top: 24px;
`

const ItemStyled = styled.li`
  margin-left: 40px;
  font-size: 20px;
  font-weight: 400;
  line-height: 27.2px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 13px;
    background: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%);

  }
`

const PhotoImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  max-height: 100%;
  max-width: 100%;
`

// const Container = styled.div`
//   display: flex;
//   position: relative;
//   z-index: 100;
//   width: 100%;
//   height: 100vh;
//   justify-content: flex-end;
//   flex-direction: column;
//   margin-bottom: 60px;
//
// `
