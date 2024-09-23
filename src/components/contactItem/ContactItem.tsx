import React, {FC} from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {lightTheme} from "../../styles/theme";

interface IContactItem {
    iconId: string,
    title: string,
    subTitle: string,
    viewBox?: string,
    strokeWidth?: string

}

export const ContactItem:FC<IContactItem> = ({iconId, title, subTitle, viewBox, strokeWidth}) => {
    return (
        <ContactItemStyled>
            <Icon iconId={iconId} width={'38'} height={'38'} viewBox={viewBox} strokeWidth={strokeWidth}
                  stroke={'rgba(35, 80, 214)'}/>
            <ContactText>
                <ContactTitle>{title}</ContactTitle>
                <ContactSubTitle>{subTitle}</ContactSubTitle>
            </ContactText>
        </ContactItemStyled>
    );
};

const ContactItemStyled = styled.div`
  display: flex;
  gap: 26px;
`

const ContactText = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`

const ContactTitle = styled.div`
  color: ${lightTheme.darkTextColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 21.76px;
 `

const ContactSubTitle = styled.div`
  color: ${lightTheme.formPlaceholder};
  font-size: 12px;
  font-weight: 400;
  line-height: 16.32px;
`

