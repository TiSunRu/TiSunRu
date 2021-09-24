import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`
export const ProductImage = styled.div`
  width: 100%; 
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const LeafWrapper = styled.div`
  position: absolute;
  top: -120px;
  right: 25%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
