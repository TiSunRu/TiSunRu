import styled from "styled-components";

export const NavigationTitleWrapper = styled.div`
  margin-top: 50px;
  width: 96%;
  display: flex;
  justify-content: flex-end;
`;

export const NavigationTitleText = styled.a`
  text-align: end;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #000;
  cursor: pointer;
  text-decoration: none;

  display: inline-block;
  position: relative;
  transition: .3s;
  
  &:hover {
    transition: .3s;
    color: #000;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
