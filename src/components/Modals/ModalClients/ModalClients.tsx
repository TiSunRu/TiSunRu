import React, { FC, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import emailjs from "emailjs-com";
import ModalTemplate from "../../common/Modal/ModalTemplate";
import ModalManager from "../../common/Modal/ModalManager";
import { BrandContainer, BranImageContainer } from './styled'
import { Description, ListTitle, ListItem } from "../ModalPartners/styled";
import {
    ButtonClients,
    Input,
    InputContainer,
    InputLabel,
    TextArea
} from "../../common/Modal/styled";
import {ErrorModal} from "../../common/Errors/ErrorModal";

interface ModalClientsProps {
    onClose: () => void;
    isOpen: boolean;
}

const ModalClients: FC<ModalClientsProps> = ({ onClose, isOpen }) => {
    const { clients: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                clients: markdownRemark(frontmatter: {type: { eq: "clients" }}) {
                    frontmatter {
                        title
                        description
                        list1Title
                        list1Item1
                        list1Item2
                        list1Item3
                        image1 {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        image2 {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        image3 {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
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
        list1Title,
        list1Item1,
        list1Item2,
        list1Item3,
        image1,
        image2,
        image3,
    } = frontmatter;

    const img1: any = getImage(image1);
    const img2: any = getImage(image2);
    const img3: any = getImage(image3);


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
            const data = [ name, company, position, phone, email, comment ];
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
                type: "??????????????"
            };

            setDisabled(true)

            await emailjs.send('service_j5l9iq5', 'template_ohn96ck', sendData, 'user_FEQ3kl657rlQs51bO9m2m')

            onClose();
        } catch (e) {
            console.error("Error: ", e)
        }

    }

    return (
        <ModalTemplate onClose={onClose} isOpen={isOpen} title={t(title)} type="clients" onSubmit={onSubmit}>
                <Description>{t(description)}</Description>
                <ListTitle>{t(list1Title)}</ListTitle>
                <ListItem>{t(list1Item1)}</ListItem>
                <ListItem>{t(list1Item2)}</ListItem>
                <ListItem>{t(list1Item3)}</ListItem>

                <BrandContainer>
                    <BranImageContainer>
                        <GatsbyImage alt="image1" image={img1} />
                    </BranImageContainer>
                    <BranImageContainer>
                        <GatsbyImage alt="image2" image={img2} />
                    </BranImageContainer>
                    <BranImageContainer>
                        <GatsbyImage alt="image3" image={img3} />
                    </BranImageContainer>
                </BrandContainer>

                <ModalManager />

                <div>
                    <InputContainer>
                        <InputLabel>{t("??????")}</InputLabel>
                        <Input value={name} onChange={onName} name="name" />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>{t("????????????????")}</InputLabel>
                        <Input value={company} onChange={onCompany} name="company" />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>{t("??????????????????")}</InputLabel>
                        <Input value={position} onChange={onPosition} name="position" />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>{t("??????????????")}</InputLabel>
                        <Input type="phone" value={phone} onChange={onPhone} name="phone" />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>{t("?????????????????????? ??????????")}</InputLabel>
                        <Input type="email" value={email} onChange={onEmail} name="email" />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>{t("??????????????????????")}</InputLabel>
                        <TextArea value={comment} onChange={onComment} name="comment" />
                    </InputContainer>

                    {
                        isError
                        &&
                        <InputContainer>
                            <ErrorModal>{t("?????? ???????? ???????????? ???????? ??????????????????!")}</ErrorModal>
                        </InputContainer>
                    }

                    <ButtonClients disabled={disabled} onClick={onSubmit}>{t("??????????????????")}</ButtonClients>
                </div>
            </ModalTemplate>
    )
}

export default ModalClients;
