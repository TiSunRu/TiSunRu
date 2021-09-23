import styled from "styled-components";

export const CooperationWrapper = styled.div`
  padding: 50px 10px;
  text-align: center;
  background-color: #DA8836;
`;

export const CooperationContainer = styled.div``;

export const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: calc(18px + 30 * ((100vw - 320px) / 1280));
  line-height: 130%;
  color: #FFFFFF;
`;

export const Text = styled.p`
  padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(8px + 14 * ((100vw - 320px) / 1280));
  line-height: 120%;
  color: #FFFFFF;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 40px auto 0 auto;
`;

const ButtonTemplate = styled.button`
  width: 45%;
  max-width: 380px;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: calc(8px + 14 * ((100vw - 320px) / 1280));
  line-height: 128.69%;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 60%;
    margin: 10px auto;
  }
`;

export const LightButton = styled(ButtonTemplate)`
  color: #434343;
  background: #FFFFFF;
  transition: .4s;
  &:hover {
    color: #fffefe;
    background: #bbbaba;
  }
`;

export const DarkButton = styled(ButtonTemplate)`
  color: #FFFFFF;
  background: #434343;
  transition: .4s;
  &:hover {
    color: #e1dede;
    background: #646363;
  }
`;