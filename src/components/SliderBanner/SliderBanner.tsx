import React, { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from './styled'
import { SampleNextArrow, SamplePrevArrow } from "./SliderArrows";
import Banner1 from "../common/banners/Banner1";
import Banner2 from "../common/banners/Banner2";
import Banner3 from "../common/banners/Banner3";
import Banner4 from "../common/banners/Banner4";

const SliderBanner: FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 8000,
        cssEase: "linear"
    };

    return (
        <StyledSlider {...settings}>
            <Banner1 />
            <Banner2 />
            <Banner3 />
            <Banner4 />
        </StyledSlider>
    );
}

export default SliderBanner;
