import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  background-color: #171717;

  .headerContainer {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #171717;

    &._active {
      .header__nav {
        @media screen and (max-width: 991px) {
          display: block;
        }
      }
      .header__burger_icon {
        .header__burger_line {
          top: 50%;
          transform: scale(0);
        }
        &::after {
          bottom: 43%;
          transform: rotate(-45deg);
          background-color: red;
        }
        &::before {
          top: 43%;
          transform: rotate(45deg);
          background-color: red;
        }
      }
    }
    @media screen and (max-width: 479px) {
      padding: 0 10px;
    }
  }

  .header__burger-wrapper {
    @media screen and (min-width: 991px) {
      display: none;
    }
    @media screen and (max-width: 479px) {
      flex: 1;
    }
  }

  .header__burger_icon {
    position: relative;
    z-index: 1001;
    top: 0;
    left: 0;
    flex: 1;
    width: 25px;
    height: 20px;
    background-color: transparent;
    cursor: pointer;
    .header__burger_line,
    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      display: block;
      background-color: white;
      transition: all 0.3s;
      user-select: none;
    }
    &::after {
      bottom: 0;
    }
    &::before {
      top: 0;
    }
  }

  .header__burger_line {
    top: 50%;
    transform: translate(0, -50%);
  }
`

export const HeaderContainer = styled.div``

export const HeaderBurgerIcon = styled.div``

export const HeaderBurgerLine = styled.span``

export const HeaderLogoContainer = styled.div`
  position: relative;
  flex: 0 0 160px;
  height: 100%;

  @media screen and (max-width: 479px) {
    flex: 0 0 100px;
  }
`

export const HeaderLogo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 110%;
  border: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0 0 20px #000;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const HeaderNavigation = styled.nav`
  flex: auto;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 10px;

  @media screen and (max-width: 991px) {
    display: none;
    position: fixed;
    left: 0;
    top: 70px;
    flex-direction: column;
    padding: 40px 20px 30px 20px;
    background-color: #999999;
    color: #000;
  }
  @media screen and (max-width: 479px) {
    box-sizing: border-box;
    width: 100%;
  }
`

export const NavigationLink = styled(AnchorLink)`
  text-decoration: none;
  font-family: 'Roboto Slab', serif;
  line-height: 19px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    color: #fff;
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media screen and (max-width: 991px) {
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
  }
`

export const HeaderLanguageAndInstagram = styled.div`
  @media screen and (max-width: 479px) {
    flex: 1;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LinkInstagram = styled.a`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
