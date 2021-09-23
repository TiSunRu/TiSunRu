import React, { FC } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { isRu } from "../../helpers/isRu";
import icons from '../../assets/images/svg/banner-icons.svg';
import banner from '../../assets/images/banner/bannersvg.svg';

const Banner: FC = () => {
    const { banner: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                banner: markdownRemark(frontmatter: {type: { eq: "banner" }}) {
                    frontmatter {
                        bannerImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        bannerEnImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `
    )

    const { bannerImage, bannerEnImage } = frontmatter;
    const img: any = getImage(bannerImage);
    const imgEn: any = getImage(bannerEnImage);

    return (
        <div style={{ position: "relative", marginTop: "54px" }}>
            {/*<GatsbyImage alt="banner" image={isRu ? img : imgEn} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />*/}

            <div>
                <img src={banner} alt="banner" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}/>
            </div>

        </div>
    )
}

export default Banner;
