import styled from 'styled-components'

export const AboutWrapper = styled.div`
  text-align: start;
  .backgroundImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
  }
`

export const DescriptionWrapper = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
  transform: translate(0, -50%);
  max-width: 60%;
  box-sizing: border-box;
  padding: 30px 50px;
  text-align: center;
  background-color: #fff;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    margin: 0 20px;
    padding: 10px;
  }
`

export const DescriptionContainer = styled.div`
`

export const Title = styled.h3`
  margin: 0 0 40px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(18px + 30 * ((100vw - 320px) / 1280));
  line-height: 120%;
  color: #036c46;
  @media screen and (max-width: 479px) {
    margin: 0 0 15px 0;
  }
`

export const Text = styled.div`
  margin: 10px;
  padding: 0 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(10px + 15 * ((100vw - 320px) / 1280));
  line-height: 120%;
  color: #036c46;
  @media screen and (max-width: 479px) {
    padding: 0px 10px;
  }
`

export const Button = styled.button`
  position: absolute;
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 15px 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(8px + 14 * ((100vw - 320px) / 1280));
  color: #ffffff;
  background: #1d723a;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 479px) {
    padding: 15px 10px;
    bottom: -40%;
  }
`

export const AboutLeafLeft = styled.div`
  position: absolute;
  @media screen and (max-width: 767px) {
    display: none;
  }
  top: 0;
`

export const AboutLeafRight = styled.div`
  position: absolute;
  position: absolute;
  bottom: -140px;
  right: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

// export const ModalAboutLogo = styled.div`
//   position: absolute;
//   @media screen and (max-width: 767px) {
//     display: none;
//   }
//   position: absolute;
//   left: 13%;
//   top: 33%;
// `