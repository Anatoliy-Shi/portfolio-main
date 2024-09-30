import styled from "styled-components";
import picture from '../assets/image/imageMain.png';
import { ButtonStyled } from "./buttons/ButtonStyled";
import {LinkToStyled} from "./buttons/LinkToStyled";
import { font } from "./font";
import {Icon} from "./icon/Icon";
import {ProfileTitle} from "./profileTitle/ProfileTitle";

export const HeroSection = () => {

    return (
            <HeroWrapper>
                <Image src={picture} alt=""/>
                <div>
                    <ProfileTitle name={"Alireza"} family={'Kavousy nezjad'}/>
                    <DescriptionStyled>Draft is a revolutionary mobile app built to hel you manage your business easily and save your money.</DescriptionStyled>
                    <ButtonsLinksStyled>
                        <LinkToStyled as={'a'} href={'#'}>See Projects  <Icon viewBox={'0 -4 36 36'} iconId={'arrowRight'}/></LinkToStyled>
                        <ButtonStyled>Download Resume</ButtonStyled>
                    </ButtonsLinksStyled>
                </div>
            </HeroWrapper>
    );
};

const Image = styled.img`
  max-width: 60%;
`

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 35px;
  gap: 80px;

  @media screen and (min-width: 769px) and (max-width: 1000px) {
    gap: 30px;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 29px 35px 86px;
    gap: 0;
  }
`

const DescriptionStyled = styled.h2`
  max-width: 380px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
  margin: 20px 0 40px;
  @media screen and (max-width: 620px) {
    ${font({Fmin: 13, Fmax: 20})};
    line-height: 16px;
  }
`

const ButtonsLinksStyled = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 769px) and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 620px) {
    ${LinkToStyled}, ${ButtonStyled} {
      min-width: 112px;
    }
  }

`
