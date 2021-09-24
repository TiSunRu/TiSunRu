import React, { FC, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { AiFillInstagram } from 'react-icons/all'
import { URL_INSTAGRAM_FOOTER, URL_SITE } from '../../contstants'
import SelectLanguage from '../common/SelectLanguage/SelectLanguage'
import logo from '../../assets/images/svg/tisun-logo.svg'
import {
  HeaderWrapper,
  HeaderBurgerIcon,
  HeaderBurgerLine,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderNavigation,
  HeaderLanguageAndInstagram,
  NavigationLink,
  LinkInstagram
} from './styled'
import { isRu } from '../../helpers/isRu'

const Header: FC = () => {
  const {
    header: {
      frontmatter: { navbar }
    }
  } = useStaticQuery(
    graphql`
      query {
        header: markdownRemark(frontmatter: { type: { eq: "header" } }) {
          frontmatter {
            navbar {
              id
              title
              to
            }
          }
        }
      }
    `
  )

  const { t } = useTranslation()

  const [active, setActive] = useState(false)

  const handleBurger = () => {
    setActive(!active)
  }

  return (
    <HeaderWrapper>
      <div className={`headerContainer ${active ? '_active' : ''}`}>
        <div className="header__burger-wrapper">
          <HeaderBurgerIcon
            onClick={handleBurger}
            className="header__burger_icon"
          >
            <HeaderBurgerLine className="header__burger_line" />
          </HeaderBurgerIcon>
        </div>
        <HeaderLogoContainer>
          <HeaderLogo href={URL_SITE}>
            <img src={logo} alt="logo" />
          </HeaderLogo>
        </HeaderLogoContainer>
        <HeaderNavigation className="header__nav">
          {navbar?.map((item: { id: number; to: string; title: string }) => {
            const { id, title, to } = item

            return (
              <NavigationLink
                key={id}
                to={`${isRu() ? `/ru/#${to}` : `/#${to}`}`}
                stripHash
                onAnchorLinkClick={() => setActive(!active)}
              >
                {t(title)}
              </NavigationLink>
            )
          })}
          <LinkInstagram href={URL_INSTAGRAM_FOOTER} target="_blank">
            <AiFillInstagram size="30px" title="Instagram" />
          </LinkInstagram>
        </HeaderNavigation>
        <HeaderLanguageAndInstagram>
          <SelectLanguage />
        </HeaderLanguageAndInstagram>
      </div>
    </HeaderWrapper>
  )
}

export default Header
