import styled from 'styled-components'

export const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  font-weight: bold;
  line-height: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const BranImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 310px;
`

export const Label = styled.p`
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 20px;
`
