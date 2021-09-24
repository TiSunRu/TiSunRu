import styled from 'styled-components'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'


export const SliderWrapper = styled.h3`
  @media screen and (max-width: 992px) {
      width: 100%;
  }
`

export const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  left: 20%;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 992px) {
    max-width: 100%;
    left: 0;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Header = styled.h3`
  margin-left: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
  color: #000000;
`

export const StyledGatsbyImage = styled(GatsbyImage)`
  height: 85px;
  width: 75px;
`

export const DotsContainer = styled.div`
  height: 80%;
  left: -20%;
  bottom: 30%;
`

export const DotsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: -25%;
    @media screen and (max-width: 992px) {
      display: none;
    }
`

export const DesctiptionContainer = styled.div`
  @media screen and (min-width: 992px) {
    width: 25%;
    position: absolute;
    right: 3%;
    top: 19%;
  }
`

export const Composition = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  line-height: 128.69%;
  color: #8c8c8c;
`
