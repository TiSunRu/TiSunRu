import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`

export const TextWrapper = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: calc(18px + 30 * ((100vw - 320px) / 1280));
  margin: 15px;
`

export const LineUp = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const LineDown = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
