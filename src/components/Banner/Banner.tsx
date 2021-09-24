import React, { FC } from 'react';
import { isRu } from "../../helpers/isRu";
import banner from '../../assets/images/banner/bannersvg.svg';
import bannerEn from '../../assets/images/banner/bannerEn.jpeg';

const Banner: FC = () => {
    return (
        <div style={{ position: "relative", marginTop: "54px" }}>
            <div>
                {
                    isRu()
                        ? <img src={banner} alt="banner" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                        : <img src={bannerEn} alt="banner" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}/>
                }
            </div>
        </div>
    )
}

export default Banner;
