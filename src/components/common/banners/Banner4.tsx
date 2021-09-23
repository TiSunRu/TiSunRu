import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Wrapper, BackgroundSlide } from './styled'

const Banner4 = () => {
  const {
    banners: {
      frontmatter: { banner4 }
    }
  } = useStaticQuery(
    graphql`
      query {
        banners: markdownRemark(frontmatter: { type: { eq: "banners" } }) {
          frontmatter {
            banner4 {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  )

  const banner: any = getImage(banner4)

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
    </Wrapper>
  )
}

export default Banner4