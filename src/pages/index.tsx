import * as React from 'react'
import { graphql } from 'gatsby'
import 'normalize.css'
import './fonts.css'
import DefaultLayout from '../components/Layout/DefaultLayout'
import Header from '../components/Header/Header'
import SliderBanner from '../components/SliderBanner/SliderBanner'
import Range from '../components/Range/Range'
import Bestsellers from '../components/Bestsellers/Bestsellers'
import Product from '../components/Product/Product'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Benefits from '../components/Benefits/Benefits'
import Cooperation from '../components/Cooperation/Cooperation'
import Footer from '../components/Footer/Footer'
import Reviews from '../components/Reviews/Reviews'
import SEO from '../components/Seo/SEO'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <SEO />
      <Header />
      <SliderBanner />
      <Range />
      <Bestsellers />
      <Product />
      <Banner />
      <Benefits />
      <About />
      <Cooperation />
      <Reviews />
      <Footer />
    </DefaultLayout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`