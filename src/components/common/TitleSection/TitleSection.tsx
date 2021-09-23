import React, { FC } from 'react';
import iconUp from '../../../assets/images/svg/heading-icon-layout-up.svg'
import iconDown from '../../../assets/images/svg/heading-icon-down.svg'
import { TitleContainer, TextWrapper, LineUp, LineDown } from './styled'

interface TitleSectionProps {
    text?: string;
    icon?: any;
}

const TitleSection: FC<TitleSectionProps> = ({ text, icon }) => {
    return (
        <TitleContainer>
            <LineUp>
                <img src={iconUp} alt="iconUp"/>
            </LineUp>
            <TextWrapper>{text ? text : <img src={icon} alt="icon" />}</TextWrapper>
            <LineDown>
                <img src={iconDown} alt="iconDown"/>
            </LineDown>
        </TitleContainer>
    )
}

export default TitleSection;
