import React from 'react';
import {SectionName} from "../../components/SectionName";
import styled from "styled-components";
import {lightTheme} from "../../styles/theme";
import {LinkToStyled} from "../../components/buttons/LinkToStyled";
import {ContactItem} from "../../components/contactItem/ContactItem";
import { Icon } from '../../components/icon/Icon';

export const ContactUs = () => {
    return (
        <SectionContactUs>
            <SectionName>
                Contact Us
            </SectionName>
            <StyledForm>
                <Form>
                    <GetInTouchStyled>Get in touch</GetInTouchStyled>
                    <Container>
                        <Field type="text" placeholder={'E-mail'}/>
                        <Field type="text" placeholder={'Phone'}/>
                    </Container>
                    <Field as={'textarea'} placeholder={'Massage'}/>
                    <LinkToStyled width={'117px'} as={'button'}>Send</LinkToStyled>
                </Form>
                <ContactItems>
                    <ContactItem iconId={'location'} title={'Location'} subTitle={'Mashhad/Iran'} strokeWidth={'4'} viewBox={'-3 5 60 60'} />
                    <ContactItem iconId={'telephone'} title={'Phone'} subTitle={'+989150063913'} strokeWidth={'1'} viewBox={'0 -2 23 23'} />
                    <ContactItem iconId={'email'} title={'Email'} subTitle={'arkn3913@gmail.com'} strokeWidth={'1.4'} viewBox={'-3 -2 28 28'} />
                </ContactItems>
            </StyledForm>
            <Social>
                <Icon iconId={'instagram-color'} />
                <a href="https://wa.me/79104243232"><Icon iconId={'whatsApp-color'} /></a>
                <a href="https://t.me/Abanit_ot"><Icon iconId={'telegram-color'} /></a>
            </Social>
        </SectionContactUs>
    );
};

const SectionContactUs = styled.section`
  margin-top: 60px;
`

const GetInTouchStyled = styled.h3`
  font-size: 36px;
  font-weight: 500;
  line-height: 48.96px;
  margin-bottom: 23px;
`

const Container = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 23px;
`
const Form = styled.div``

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
`

const Field = styled.input`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 17.68px;
  border-radius: 8px;
  outline: ${lightTheme.formBackground};
  border: none;
  gap: 15px;
  width: 100%;
  padding: 9px 25px;
  background: ${lightTheme.formBackground};

  &::placeholder {
    color: ${lightTheme.formPlaceholder}
  }
`

const StyledForm = styled.form`
  gap: 126px;
  padding: 56px 82px 43px;
  max-width: 932px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 8px 8px 34px 0 rgb(0 0 0 / 32%);;
  background: rgba(255, 255, 255, 1);
  display: flex;

  textarea {
    resize: none;
    height: 152px;
    margin-bottom: 37px;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-top: 65px;
`

