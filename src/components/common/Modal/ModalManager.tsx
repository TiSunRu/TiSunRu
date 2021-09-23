import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import managerIcon from "../../../assets/images/svg/modal-manager-icon.svg";
import managerMessage from "../../../assets/images/svg/modal-manager-message.svg";
import managerMessageRectangle from "../../../assets/images/svg/modal-manager-message-rectangle.svg";

const ModalManager = () => {
    const { t } = useTranslation();

    return (
        <ManagerContainer>
            <div>
                <img src={managerIcon} alt="manager" style={{ width: "80px" }} />
            </div>
            <div>
                <p style={{ position: "absolute", fontSize: "20px", left: "160px", fontFamily: "'Montserrat', sans-serif" }}>
                    {t('Здравствуйте, вы можете оставить заявку.')}
                </p>
                <img src={managerMessage} alt="message" style={{ width: "500px" }} />
                <img src={managerMessageRectangle} alt="managerMessageRectangle" style={{ position: "absolute", left: "97px", top: "64px" }} />
            </div>
        </ManagerContainer>
    )
}

export const ManagerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  padding: 20px 0;
  position: relative;
  @media screen and (max-width: 767px) {
      display: none;
  }
`

export default ModalManager;
