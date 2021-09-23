import React, { FC } from 'react';
import {
    NavigationTitleWrapper,
    NavigationTitleText,
} from './styled'
import {URL_WILDBERRIES} from "../../../contstants";

interface NavigationTitleProps {
    title: string;
    align?: string;
    marginTop?: number;
}

const NavigationTitle: FC<NavigationTitleProps> = ({ title, align, marginTop }) => {
    return (
        <NavigationTitleWrapper style={{ justifyContent: align, marginTop: `${marginTop}px` }}>
            <NavigationTitleText href={URL_WILDBERRIES} target="_blank">{title}</NavigationTitleText>
        </NavigationTitleWrapper>
    )
}

export default NavigationTitle;
