import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BackgroundSlide = styled(GatsbyImage) ``

export const Title = styled.h3`
  margin: 0;
  font-family: 'Roboto Slab', serif;
  font-size: calc(13px + 37 * ((100vw - 320px) / 1280));
  font-style: normal;
  font-weight: normal;
  text-align: center;
  line-height: 140.19%;
  white-space: pre-wrap;
  color: #ffffff;
`

export const LabelIcon = styled.div`
  width: calc(40px + 160 * ((100vw - 320px) / 1280));
  height: calc(40px + 160 * ((100vw - 320px) / 1280));
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Text = styled.p`
  position: absolute;
  left: 50px;
  top: 100px;
  z-index: 999;
  width: 360px;
  height: 208px;
  font-family: 'Roboto Slab', serif;
  font-size: 35px;
  font-style: normal;
  font-weight: normal;
  line-height: 140.19%;
  text-align: center;
  color: #ffffff;
`
