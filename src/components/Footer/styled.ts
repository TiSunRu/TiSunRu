import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: relative;
  padding: 50px 10px;
`

export const FooterContainer = styled.footer``

export const Leaf = styled.div`
  position: absolute;
  top: 50%;
  right: 85%;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Beans = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LinksContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const CardLinks = styled.div`
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const Social = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 767px) {
    flex-direction: column;
  }
`

export const IconWrapper = styled.a`
  padding: 15px;
`

export const ExtraWrapperIcon = styled.div``

export const VerticleLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ExtraDescriptionWrapper = styled.div``

export const ExtraDescription = styled.div``

export const TextItem = styled.p`
  margin-bottom: 35px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`

export const LinkItem = styled.a`
  text-decoration: none;
  color: #000;
  transition: 0.2s;
  &:hover {
    color: #e38a04;
  }
`
