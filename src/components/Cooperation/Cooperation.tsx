import React, { FC, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ModalPartners from "../Modals/ModalPartners/ModalPartners";
import ModalClients from "../Modals/ModalClients/ModalClients"
import {
    CooperationContainer,
    CooperationWrapper,
    ButtonsContainer,
    Title,
    Text,
    LightButton,
    DarkButton
} from './styled'

const Cooperation: FC = () => {
    const { cooperation: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                cooperation: markdownRemark(frontmatter: {type: { eq: "cooperation" }}) {
                    frontmatter {
                        title
                        description
                        btnLight
                        btnDark
                    }
                }
            }
        `
    )

    const { t } = useTranslation();

    const [ isOpenModalPartners, setIsOpenModalPartners ] = useState(false);
    const [ isOpenModalClients, setIsOpenModalClients ] = useState(false);

    const { title, description, btnLight, btnDark } = frontmatter;

    const openModalPartners = () => {
        setIsOpenModalPartners(true);
    }

    const closeModalPartners = () => {
        setIsOpenModalPartners(false);
    }

    const openModalClients = () => {
        setIsOpenModalClients(true);
    }

    const closeModalClients = () => {
        setIsOpenModalClients(false);
    }

    return (
        <CooperationWrapper id="cooperation">
            <CooperationContainer>
                <Title>{t(title)}</Title>
                <Text>{t(description)}</Text>
                <ButtonsContainer>
                    <LightButton onClick={openModalPartners}>{t(btnLight)}</LightButton>
                    <DarkButton onClick={openModalClients}>{t(btnDark)}</DarkButton>
                </ButtonsContainer>
            </CooperationContainer>
            {
                isOpenModalPartners
                    ? <ModalPartners onClose={closeModalPartners} isOpen={isOpenModalPartners} />
                    : null
            }
            {
                isOpenModalClients
                    ? <ModalClients onClose={closeModalClients} isOpen={isOpenModalClients} />
                    : null
            }
        </CooperationWrapper>
    )
}

export default Cooperation;
