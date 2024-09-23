import styled from "styled-components";
import picture from '../assets/image/imageMain.png';
import { ButtonStyled } from "./buttons/ButtonStyled";
import {LinkToStyled} from "./buttons/LinkToStyled";
import {Icon} from "./icon/Icon";
import {MyName} from "./myName/MyName";

export const Im = () => {

    return (
        <main>
            <MainWrapper>
                <img src={picture} alt=""/>
                <div>
                    <MyName name={"Alireza"} family={'Kavousy nezjad'}/>
                    <DescriptionStyled>Draft is a revolutionary mobile app built to hel you manage your business easily and save your money.</DescriptionStyled>
                    <ButtonsLinksStyled>
                        <LinkToStyled as={'a'} href={'#'}>See Projects  <Icon viewBox={'0 -4 36 36'} iconId={'arrowRight'}/></LinkToStyled>
                        <ButtonStyled>Download Resume</ButtonStyled>
                    </ButtonsLinksStyled>
                </div>
            </MainWrapper>
        </main>
    );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 80px;
`

const DescriptionStyled = styled.h1`
  max-width: 380px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: justify;
  margin: 20px 0 40px;
`

const ButtonsLinksStyled = styled.div`
  display: flex;
  gap: 20px;
`
