import React, { FC } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TitleSection from "../common/TitleSection/TitleSection";
import beanLeftUp from '../../assets/images/svg/range-bean-left-up.svg'
import beanLeftDown from '../../assets/images/svg/range-bean-left-down.svg'
import beanMiddleDown from '../../assets/images/svg/range-bean-middle-down.svg'
import leafRightDown from '../../assets/images/svg/range-leaf-right-down.svg'
import {
    RangeWrapper,
    RangeContainer,
    RangeImage,
    ButtonsWrapper,
    ButtonsContainer,
    Button,
    BeanLeftUp,
    BeanLeftDown,
    BeanMiddleDown,
    LeafRightDown,
} from './styled'

const Range: FC = () => {
    const { range: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                range: markdownRemark(frontmatter: {type: { eq: "range" }}) {
                    frontmatter {
                        title
                        tea
                        coffee
                        rangePicture {
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

    const { title, tea, coffee, rangePicture } = frontmatter;
    const img: any = getImage(rangePicture);

    return (
        <RangeWrapper id="range">
            <RangeContainer>
                <TitleSection text={t(title)} />
                <BeanLeftUp>
                    <img src={beanLeftUp} alt="beanLeftUp"/>
                </BeanLeftUp>

                <RangeImage>
                    <GatsbyImage alt="banner" image={img} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                </RangeImage>

                <ButtonsWrapper>
                    <ButtonsContainer>
                        <a href="https://www.wildberries.ru/brands/tisun?sort=popular&page=1&fconsists=137649%3B124023%3B89859%3B6714%3B51646" target="_blank">
                            <Button>{t(coffee)}</Button>
                        </a>

                        <a href="https://www.wildberries.ru/brands/tisun?sort=popular&page=1" target="_blank">
                            <Button>{t(tea)}</Button>
                        </a>
                    </ButtonsContainer>
                </ButtonsWrapper>

                <BeanLeftDown>
                    <img src={beanLeftDown} alt="beanLeftDown" />
                </BeanLeftDown>

                <BeanMiddleDown>
                    <img src={beanMiddleDown} alt="beanMiddleDown" />
                </BeanMiddleDown>

                <LeafRightDown>
                    <img src={leafRightDown} alt="leafRightDown" />
                </LeafRightDown>
            </RangeContainer>
        </RangeWrapper>
    )
}

export default Range;
