import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import label from '../../../assets/images/svg/tisun-label.svg'
import { Container, Wrapper, Title, LabelIcon, BackgroundSlide } from "./styled";
import {useTranslation} from "gatsby-plugin-react-i18next";

const Banner1 = () => {
    const { banners: { frontmatter: { banner1 } } } = useStaticQuery(
        graphql`
            query {
                banners: markdownRemark(frontmatter: {type: { eq: "banners" }}) {
                    frontmatter {
                        banner1 {
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

    const banner: any = getImage(banner1);

    return (
        <Wrapper>
            <BackgroundSlide alt="banner" image={banner} style={{ zIndex: 10, position: "relative", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />

            <Container>
                <Title>{t('Чай и кофе от TiSun со вкусом эмоций!')}</Title>
                <LabelIcon>
                    <img src={label} alt="label"/>
                </LabelIcon>
            </Container>
        </Wrapper>
    )
}

export default Banner1;
