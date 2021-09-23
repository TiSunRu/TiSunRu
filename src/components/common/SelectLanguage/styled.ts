import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'

export const LanguageList = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LanguageItem = styled.li``

export const LanguageLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Montseratt', sans-serif;
`
