import React, { FC } from 'react';
import { useTranslation } from "gatsby-plugin-react-i18next";
import iconUp from '../../../assets/images/svg/modal-title-up.svg'
import iconDown from '../../../assets/images/svg/modal-title-down.svg'
import { TitleContainer, LineUp, LineDown } from "../TitleSection/styled";

interface IModalTitle {
    text?: string;
}

const ModalTitle: FC<IModalTitle> = ({ text }) => {
    const { t } = useTranslation();

    return (
        <TitleContainer>
            <LineUp>
                <img src={iconUp} alt="iconUp" />
            </LineUp>
            <h3 style={{ fontSize: "32px", margin: "0", fontFamily: "'Montserrat', sans-serif", color: "#fff" }}>
                { t(text) }
            </h3>
            <LineDown>
                <img src={iconDown} alt="iconDown"/>
            </LineDown>
        </TitleContainer>
    )
}

export default ModalTitle;
