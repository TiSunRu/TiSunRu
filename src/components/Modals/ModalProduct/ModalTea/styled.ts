import styled from "styled-components";

export const LeafTemplate = styled.div`
  position: absolute;
`;

export const Leaf1 = styled(LeafTemplate)`
  top: 0;
  right: 30%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Leaf2 = styled(LeafTemplate)`
  top: 5%;
  right: 5%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Leaf3 = styled(LeafTemplate)`
  right: 6%;
  bottom: 10%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Leaf4 = styled(LeafTemplate)`
  right: 0;
  bottom: -10%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Leaf5 = styled(LeafTemplate)`
  left: 5%;
  bottom: -10%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
