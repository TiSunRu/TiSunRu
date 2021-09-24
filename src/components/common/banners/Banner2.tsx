import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import label from '../../../assets/images/svg/tisun-label.svg'
import { LabelIcon, Wrapper, BackgroundSlide } from './styled'

const Banner2 = () => {
  const {
    banners: {
      frontmatter: { banner2 }
    }
  } = useStaticQuery(
    graphql`
      query {
        banners: markdownRemark(frontmatter: { type: { eq: "banners" } }) {
          frontmatter {
            banner2 {
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

  const banner: any = getImage(banner2)

  return (
    <Wrapper>
      <BackgroundSlide
        alt="banner"
        image={banner}
        style={{
          zIndex: 10,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />

      <Container>
        <Title>{t('Открой для себя разнообразие вкусов чая от TiSun!')}</Title>
        <LabelIcon>
          <img src={label} alt="label" />
        </LabelIcon>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`

const Title = styled.h3`
  margin: 0;
  font-family: 'Roboto Slab', serif;
  font-size: calc(10px + 40 * ((100vw - 320px) / 1280));
  font-style: normal;
  font-weight: normal;
  white-space: pre-wrap;
  line-height: 140.19%;
  text-align: center;
  color: #000;
`

export default Banner2
