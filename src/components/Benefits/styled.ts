import styled from 'styled-components'

export const BenefitsWrapper = styled.div`
  position: relative;
  padding: 50px 10px;
`

export const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
`

export const LeafLeftUp = styled.div`
  /* position: absolute;
  top: 0;
  left: 5.7%; */
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LeafRightUp = styled.div`
  position: absolute;
  top: 3%;
  right: 10%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LeafMiddleDown = styled.div`
  position: absolute;
  bottom: -190px;
  right: 2%;
  z-index: 1;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const CardWrapper = styled.div`
  flex: 1;
  margin: 0 10px;
  @media screen and (max-width: 767px) {
    flex: 0 0 70%;
    margin: 20px auto;
  }
  @media screen and (max-width: 479px) {
    flex: 0 0 90%;
  }
`

export const CardContainer = styled.div`
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 10px lightgrey;
  }
  @media screen and (max-width: 767px) {
    height: auto;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    @media screen and (min-width: 1024px) {
      width: 60%;
      height: 60%;
    }
  }
`

export const Title = styled.div`
  margin: 30px 0 15px 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #000000;
`

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`