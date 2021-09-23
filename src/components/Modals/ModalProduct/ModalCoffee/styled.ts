import styled from "styled-components";

export const BeanTemplate = styled.div`
  position: absolute;
`;

export const Bean1 = styled(BeanTemplate)`
  left: 0;
  top: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Bean2 = styled(BeanTemplate)`
  top: 0;
  right: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Bean3 = styled(BeanTemplate)`
  bottom: -10px;
  left: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
