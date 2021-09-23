import React, { FC } from 'react';
import Slider from "react-slick";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TitleSection from "../common/TitleSection/TitleSection";
import { SampleNextArrow, SamplePrevArrow } from "./SampleReviewArrows";
import ReviewCardItem from "./ReviewCard";
import leafLeftUp from '../../assets/images/svg/reviews-left-up.svg';
import leafRightDown from '../../assets/images/svg/reviews-right-down.svg';
import { ReviewsWrapper, LeafLeftUp, LeafRightDown } from './styled';

const calculateSlides = () => {
    if (typeof window !== 'undefined') {
        if(window.innerWidth >= 992) {
            return 3
        } else if (window.innerWidth >= 600) {
            return 2
        }
        return 1
    }
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlides(),
    slidesToScroll: calculateSlides(),
    marginBottom: "200px",
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
};

const Reviews: FC = () => {
    const { reviews: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                reviews: markdownRemark(frontmatter: {type: { eq: "reviews" }}) {
                    frontmatter {
                        title
                        reviewsList {
                            id
                            stars
                            name
                            comment
                        }
                    }
                }
            }
        `
    )

    const { t } = useTranslation();

    const { title, reviewsList } = frontmatter;

    return (
        <ReviewsWrapper>
            <LeafLeftUp>
                <img src={leafLeftUp} alt="leafLeftUp"/>
            </LeafLeftUp>

            <TitleSection text={t(title)} />

            <div style={{ width: "90%"}}>
                <Slider {...settings}>
                    {
                        reviewsList?.map((review: { id: any; stars: any; name: any; comment: any; }) => {
                            const {id, stars, name, comment} = review;

                            return (
                                <ReviewCardItem
                                    key={id}
                                    stars={stars}
                                    name={name}
                                    comment={comment}
                                />
                            )
                        })
                    }
                </Slider>
            </div>

            <LeafRightDown>
                <img src={leafRightDown} alt="leafRightDown"/>
            </LeafRightDown>
        </ReviewsWrapper>
    )
}

export default Reviews;

