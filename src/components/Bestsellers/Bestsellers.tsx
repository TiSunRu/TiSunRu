import React, { FC, useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TitleSection from "../common/TitleSection/TitleSection";
import NavigationTitle from "../common/NavigationTitle/NavigationTitle";
import ModalProduct from "../Modals/ModalProduct/ModalProduct";
import BestsellerCard from "./BestsellerCard";
import { BestsellerWrapper, BestsellerContainer, StyledSlider } from './styled'
import {SampleNextArrow, SamplePrevArrow} from "./SampleBestsellersArrows";

const Bestsellers: FC = () => {
    const { bestseller: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                bestseller: markdownRemark(frontmatter: {type: { eq: "bestseller" }}) {
                    frontmatter {
                        title
                        navigationButton
                        bestsellers {
                            id
                            title
                            image {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                        bestsellersList {
                            id
                            type
                            title
                            urlWildberries
                            urlOzone
                            composition
                            images {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const calculateSlides = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 992) {
                return 5
            } else if (window.innerWidth >= 600) {
                return 3
            } else if (window.innerWidth >= 479) {
                return 2
            }
            return 1
        }
    }

    const { t } = useTranslation();

    const [ isOpenModal, setIsOpenModal ] = useState(false);
    const [ product, setProduct ] = useState(null);

    const { title, bestsellers, navigationButton, bestsellersList } = frontmatter;

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: calculateSlides(),
        swipeToSlide: true,
        dots: true,
    };

    const openModal = (id: number) => () => {
        // get current product
        setProduct(bestsellersList?.filter((item: any) => item.id === id));

        setIsOpenModal(true);
    }

    const closeModal = () => {
        setIsOpenModal(false);
    }

    return (
        <BestsellerWrapper>
            <BestsellerContainer>
                <TitleSection text={t(title)} />
                <StyledSlider {...settings}>
                    {
                        bestsellers.map((item: any) => {
                            const { id, title, image } = item;
                            const img: any = getImage(image);
                            return (
                                <BestsellerCard
                                    key={id}
                                    id={id}
                                    openModal={openModal}
                                    title={t(title)}
                                    image={img}
                                />
                            )
                        })
                    }
                </StyledSlider>

                <NavigationTitle title={t(navigationButton)} />
                {
                    isOpenModal
                        ? <ModalProduct
                            product={product}
                            onClose={closeModal}
                            isOpen={isOpenModal}
                        />
                        : null
                }
            </BestsellerContainer>
        </BestsellerWrapper>
    )
}

export default Bestsellers;
