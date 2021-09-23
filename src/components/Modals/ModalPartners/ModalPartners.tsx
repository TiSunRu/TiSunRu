import React, { FC, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ModalTemplate from "../../common/Modal/ModalTemplate";
import ModalManager from "../../common/Modal/ModalManager";
import { Description, ListTitle, ListItem } from './styled'
import {
    ButtonPartners,
    Input,
    InputContainer,
    InputLabel,
    TextArea
} from "../../common/Modal/styled";
import { ErrorModal } from '../../common/Errors/ErrorModal'
import emailjs from "emailjs-com";

interface ModalPartnersProps {
    onClose: () => void;
    isOpen: boolean;
}

const ModalPartners: FC<ModalPartnersProps> = ({ onClose, isOpen }) => {
    const { partners: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                partners: markdownRemark(frontmatter: {type: { eq: "partners" }}) {
                    frontmatter {
                        title
                        description
                        listTitle
                        listItem1
                        listItem2
                        listItem3
                        listItem4
                        listItem5
                        listItem6
                    }
                }
            }
        `
    )

    const { t } = useTranslation();

    const [ name, setName ] = useState("");
    const [ company, setCompany ] = useState("");
    const [ position, setPosition ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ comment, setComment ] = useState("");

    const [ isError, setIsError ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);

    const {
        title,
        description,
        listTitle,
        listItem1,
        listItem2,
        listItem3,
        listItem4,
        listItem5,
        listItem6,
    } = frontmatter;

    const onName = ({ target: { value } }: any) => {
        setIsError(false)
        setName(value);
    }

    const onCompany = ({ target: { value } }: any) => {
        setIsError(false)
        setCompany(value);
    }

    const onPosition = ({ target: { value } }: any) => {
        setIsError(false)
        setPosition(value);
    }

    const onPhone = ({ target: { value } }: any) => {
        setIsError(false)
        setPhone(value);
    }

    const onEmail = ({ target: { value } }: any) => {
        setIsError(false)
        setEmail(value);
    }

    const onComment = ({ target: { value } }: any) => {
        setIsError(false)
        setComment(value);
    }

    const onSubmit = async (event: any) => {
        try {
            event.preventDefault();
            const data = [name, company, position, phone, email, comment];
            if (data.some(el => el === "")) {
                setIsError(true)
                return
            }
            setIsError(false)

            const sendData = {
                name,
                company,
                position,
                phone,
                email,
                comment,
                type: "партнера"
            };

            setDisabled(true)

            await emailjs.send('feedback', 'template_ndvqjkc', sendData, 'user_33Snq8wbtl4IGD7ZRgUgW')

            onClose();
        } catch (e) {
            console.error("Error: ", e)
        }

    }

    return (
        <ModalTemplate onClose={onClose} isOpen={isOpen} title={t(title)} type="partners" onSubmit={onSubmit}>
            <Description>{t(description)}</Description>
            <ListTitle>{t(listTitle)}</ListTitle>
            <ListItem>{t(listItem1)}</ListItem>
            <ListItem>{t(listItem2)}</ListItem>
            <ListItem>{t(listItem3)}</ListItem>
            <ListItem>{t(listItem4)}</ListItem>
            <ListItem>{t(listItem5)}</ListItem>
            <ListItem>{t(listItem6)}</ListItem>

            <ModalManager />

            <InputContainer>
                <InputLabel>{t("ФИО")}</InputLabel>
                <Input value={name} onChange={onName} />
            </InputContainer>
            <InputContainer>
                <InputLabel>{t("Компания")}</InputLabel>
                <Input value={company} onChange={onCompany} />
            </InputContainer>
            <InputContainer>
                <InputLabel>{t("Должность")}</InputLabel>
                <Input value={position} onChange={onPosition} />
            </InputContainer>
            <InputContainer>
                <InputLabel>{t("Телефон")}</InputLabel>
                <Input type="phone" value={phone} onChange={onPhone} />
            </InputContainer>
            <InputContainer>
                <InputLabel>{t("Электронная почта")}</InputLabel>
                <Input type="email" value={email} onChange={onEmail} />
            </InputContainer>
            <InputContainer>
                <InputLabel>{t("Комментарий")}</InputLabel>
                <TextArea value={comment} onChange={onComment} />
            </InputContainer>

            {
                isError
                    &&
                <InputContainer>
                    <ErrorModal>{t("Все поля должны быть заполнены!")}</ErrorModal>
                </InputContainer>
            }

            <ButtonPartners disabled={disabled} onClick={onSubmit}>{t("Отправить")}</ButtonPartners>
        </ModalTemplate>
    )
}

export default ModalPartners;
