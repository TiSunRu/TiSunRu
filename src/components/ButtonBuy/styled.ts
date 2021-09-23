import styled from "styled-components";

export const ButtonWrapper = styled.a`
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #474242;
  height: 40px;
  width: 100%;

  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  transition: .4s;

  &:hover {
    background-color: #7e7777;
    transition: .4s;
  }
`;
