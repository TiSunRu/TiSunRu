import React, {FC, useState} from 'react';
import BackgroundImage from 'gatsby-background-image';
import {graphql, useStaticQuery} from "gatsby";
import {getImage} from "gatsby-plugin-image";
import {useTranslation} from "gatsby-plugin-react-i18next";
import { convertToBgImage } from "gbimage-bridge"
import ModalAbout from "../Modals/ModalAbout/ModalAbout";
import leafLeft from '../../assets/images/svg/about-leaf-left.svg'
import {
    DescriptionContainer,
    AboutWrapper,
    Text,
    Button,
    AboutLeafLeft,
    Title,
    DescriptionWrapper,
} from './styled'

const About: FC = () => {
    const { about: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                about: markdownRemark(frontmatter: {type: { eq: "about" }}) {
                    frontmatter {
                        title
                        navigationButton
                        titleParagraph1
                        paragraph1
                        backgroundImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `
    )

    const { t } = useTranslation();

    const [isOpenModalAbout, setIsOpenModalAbout] = useState(false);

    const openModalAbout = () => {
        setIsOpenModalAbout(true);
    }

    const closeModalAbout = () => {
        setIsOpenModalAbout(false);
    }

    const { title, navigationButton, titleParagraph1, paragraph1, backgroundImage } = frontmatter;

    const backgroundImg = getImage(backgroundImage)
    const bgImage = convertToBgImage(backgroundImg)

    return (
        <AboutWrapper id="about" >
            <BackgroundImage className="backgroundImage"  {...bgImage} preserveStackingContext style={{ paddingTop: "200px", paddingBottom: "500px" }}>
                <DescriptionWrapper>
                    <DescriptionContainer>
                        <Title>{t(title)}</Title>
                        <Text>{t(titleParagraph1)}</Text>
                        <Text>{t(paragraph1)}</Text>
                    </DescriptionContainer>

                    <Button onClick={openModalAbout}>{t(navigationButton)}</Button>
                </DescriptionWrapper>

                <AboutLeafLeft>
                    <img src={leafLeft} alt="leafLeft" />
                </AboutLeafLeft>
                {
                    isOpenModalAbout
                        ? <ModalAbout onClose={closeModalAbout} isOpen={isOpenModalAbout} />
                        : null
                }
            </BackgroundImage>
        </AboutWrapper>
    )
}

export default About;
