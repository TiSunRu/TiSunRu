import React, { FC } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { CardContainer, CardWrapper, ImageWrapper, Text, Title } from "./styled";

interface BenfitCardProp {
    title: string;
    description: string;
    icon: string;
}

const BenefitCard: FC<BenfitCardProp> = ({ title, description, icon }) => {
    const { t } = useTranslation();

    return (
        <CardWrapper>
            <CardContainer>
                <ImageWrapper>
                    <img src={icon} alt="icon"/>
                </ImageWrapper>
                <Title>{t(title)}</Title>
                <Text>{t(description)}</Text>
            </CardContainer>
        </CardWrapper>
    )
}

export default BenefitCard;
