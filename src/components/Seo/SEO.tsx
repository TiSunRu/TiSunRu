import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
    const { site } = useStaticQuery(query)

    const {
        title,
        description,
        siteUrl
    } = site.siteMetadata

    const seo = {
        title: title,
        description: description,
        siteUrl: siteUrl,
    }

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="url" content={seo.siteUrl} />
        </Helmet>
    )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`
