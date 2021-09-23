import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Wrapper,BackgroundSlide } from './styled'

import banner3svg from '../../../assets/images/banners/banner3svg.svg'

const Banner3 = () => {
  const {
    banners: {
      frontmatter: { banner3 }
    }
  } = useStaticQuery(
    graphql`
      query {
        banners: markdownRemark(frontmatter: { type: { eq: "banners" } }) {
          frontmatter {
            banner3 {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )

  const { t } = useTranslation()

  const banner: any = getImage(banner3)

  return (
    <Wrapper>
      <BackgroundSlide
        alt="banner"
        image={banner}
        style={{
          zIndex: 10,
          position: 'relative',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      {/*<div>*/}
      {/*    <img src={banner3svg} alt="banner3svg"/>*/}
      {/*</div>*/}
      <Container>
        <Text>{t('Многогранный вкус и аромат кофе от TiSun!')}</Text>
        <a href="https://www.wildberries.ru/brands/tisun" target="_blank">
          <StyledButton>{t('Перейти в каталог')}</StyledButton>
        </a>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 40%;
  height: 100%;
  padding: 0 30px;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`

const Text = styled.p`
  z-index: 999;
  margin: 0 0 50px 0;
  font-family: 'Roboto Slab', serif;
  font-size: calc(15px + 30 * ((100vw - 320px) / 1280));
  font-style: normal;
  font-weight: normal;
  line-height: 140.19%;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 767px) {
    margin: 0 0 30px 0;
  }
  @media screen and (max-width: 479px) {
    margin: 0 0 10px 0;
  }
`

const StyledButton = styled.button`
  bottom: 130px;
  left: 100px;
  z-index: 999;
  width: 100%;
  padding: 20px;
  font-size: calc(10px + 15 * ((100vw - 320px) / 1280));
  font-family: 'Roboto Slab', serif;
  line-height: 128.69%;
  color: #fff;
  background: #474242;
  border: none;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #726b6b;
    box-shadow: 0 0 5px #000;
  }
  @media screen and (max-width: 479px) {
    padding: 10px;
  }
`

export default Banner3