import React, { FC } from 'react';
import { isRu } from "../../helpers/isRu";
import leaf from '../../assets/images/svg/leaf.svg';
import { MainWrapper, LeafWrapper, ProductImage } from './styled';
import product from '../../assets/images/product/product.jpeg'
import productEn from '../../assets/images/product/productEn.jpeg'

const Product: FC = () => {
    return (
        <MainWrapper>
            <ProductImage>
                {
                    isRu()
                    ? <img src={productEn} alt="product" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    : <img src={product} alt="product" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                }
            </ProductImage>
            <LeafWrapper>
                <img src={leaf} alt="leaf" />
            </LeafWrapper>
        </MainWrapper>
    )
}

export default Product;
