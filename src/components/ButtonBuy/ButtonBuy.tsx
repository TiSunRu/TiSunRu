import React, {FC} from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { ButtonWrapper, ButtonContainer } from './styled';

interface ButtonBuyProps {
    url: string;
    title: string;
}

const ButtonBuy: FC<ButtonBuyProps> = ({ url, title }) => {
    const { t } = useTranslation();

    return (
        <ButtonWrapper href={url} target="_blank">
            <ButtonContainer>
                {t(`Купить на`)} {title}
            </ButtonContainer>
        </ButtonWrapper>
    );
}

export default ButtonBuy;
