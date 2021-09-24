import styled from 'styled-components'

export const RangeWrapper = styled.div`
  padding-top: 85px;
  @media screen and (max-width: 991px) {
    padding-top: 65px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 40px;
  }
`

export const RangeContainer = styled.div`
  position: relative;
`

export const RangeImage = styled.div`
  width: 100%;
  display: flex;
`

export const BeanLeftUp = styled.div`
  position: absolute;
  top: -86px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BeanLeftDown = styled.div`
  position: absolute;
  bottom: -135px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BeanMiddleDown = styled.div`
  position: absolute;
  bottom: -40px;
  right: 40%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LeafRightDown = styled.div`
  position: absolute;
  bottom: -90px;
  right: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ButtonsContainer = styled.div`
  position: absolute;
  top: -30px;
  min-width: 66%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    top: -25px;
  }
  @media screen and (max-width: 767px) {
    top: -20px;
  }
`

export const Button = styled.button`
  border: none;
  background: #fff;
  box-shadow: 0 0 20px 0 grey;
  font-size: calc(16px + 20 * ((100vw - 320px) / 1280));
  padding: 10px 50px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding: 10px 30px;
  }
`
