import React, { FC } from "react";
import {
    CardImageContainer,
    StyledGatsbyImage,
    TitleWrapper
} from "./styled";
import {useTranslation} from "gatsby-plugin-react-i18next";

interface BestsellerCardProps {
    id: number;
    openModal: (id: number) => {};
    title: string;
    image: any;
}

const BestsellerCard: FC<BestsellerCardProps> = ({ id, openModal, title, image }) => {
    const { t } = useTranslation();

    return (
        <CardImageContainer onClick={openModal ? openModal(id) : null}>
            <StyledGatsbyImage alt={title} image={image} />
            <TitleWrapper>{t(title)}</TitleWrapper>
        </CardImageContainer>
    )
}

export default BestsellerCard;
