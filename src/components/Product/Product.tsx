import React, { FC } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { isRu } from "../../helpers/isRu";
import leaf from '../../assets/images/svg/leaf.svg';
import { MainWrapper, LeafWrapper, ProductImage } from './styled';
// import product from '../../assets/images/product/productsvg.svg'
import product from '../../assets/images/product/product.jpeg'

const Product: FC = () => {
    const { product: { frontmatter: { productEn } } } = useStaticQuery(
        graphql`
            query {
                product: markdownRemark(frontmatter: {type: { eq: "product" }}) {
                    frontmatter {
                        product {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        productEn {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        `
    )

    // const productImage: any = getImage(product);
    const productEnImage: any = getImage(productEn);

    return (
        <MainWrapper>
            {/*<ProductImage alt="product" image={ isRu ? productImage : productEnImage } />*/}

            <ProductImage>
                <img src={product} alt="product" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}/>
            </ProductImage>

            <LeafWrapper>
                <img src={leaf} alt="leaf" />
            </LeafWrapper>
        </MainWrapper>
    )
}

export default Product;
