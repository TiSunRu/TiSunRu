import styled from "styled-components";

export const StyledModal = styled.div`
padding: 20px;
box-sizing: border-box;
`

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  line-height: 42px;
  font-weight: bold;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ModalCloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`


export const FormTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  line-height: 20px;
`

export const InputContainer = styled.div`
/* background-color:red; */
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

`

export const InputLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: calc(10px + 8 * ((100vw - 320px) / 1280));
  color: #fff;
  font-weight: bold;
`

export const Input = styled.input`
  width: 75%;
  height: 35px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`

export const TextArea = styled.textarea`
  width: 75%;
  height: 100px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`

export const Button = styled.button`
  padding: 10px;
  width: 160px;
  height: 40px;
  margin-left: 27.5%;
  margin-top: 10px;
  border: none;
  cursor: pointer;

  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  color: #FFFFFF;
  @media screen and (max-width: 767px) {
    width: 80%;
    margin: 10px 10% 0 10%;
  }
  @media screen and (max-width: 479px) {
    margin: 10px 5% 0 5%;
    width: 90%;
  }
`;

export const ButtonPartners = styled(Button)`
  background: #434343;
`

export const ButtonClients = styled(Button)`
  background: #3C9D40;
`
