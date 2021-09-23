import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from 'react-slick';

export const BestsellerWrapper = styled.div`
  padding-top: 60px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.71) 1.87%, rgba(255, 255, 255, 0.6603) 100%);
`;

export const BestsellerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  padding:0 10px 70px;
  /* width: 100%; */
`;

export const GoToCatalog = styled.p``;

export const StyledSlider = styled(Slider)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-right: 10px;
  padding-left: 10px;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  transition: .3s;

  &:hover {
    transition: .3s;
    box-shadow: 1px 14px 10px 7px rgba(34, 60, 80, 0.2);
  }
`;

export const TitleWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
`;
