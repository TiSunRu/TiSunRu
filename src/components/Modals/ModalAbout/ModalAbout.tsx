import React, {FC} from "react";
import Modal from "react-modal";
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image";
import TitleSection from "../../common/TitleSection/TitleSection";
import { ModalCloseIcon } from "../../common/Modal/styled";
import { Text } from "../../About/styled";
import close from '../../../assets/images/svg/close.svg';

Modal.setAppElement(`#___gatsby`);

const customStyles = {
    content: {
        top: '120px',
        left: '50%',
        transform: 'translate(-50%, 0)',
        right: 'auto',
        bottom: 'auto',
        marginTop: "30px",
        marginRight: '-50%',
        maxHeight: "calc(85% - 70px)",
        width: "70%",
        borderRadius: '10px',
        padding: "0px",
        zIndex: 9999,
    },
};

interface ModalAboutProps {
    onClose: () => void;
    isOpen: boolean;
}

const ModalAbout: FC<ModalAboutProps> = ({ onClose, isOpen }) => {
    const { about: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                about: markdownRemark(frontmatter: {type: { eq: "about" }}) {
                    frontmatter {
                        title
                        titleParagraph1
                        paragraph1
                        titleParagraph2
                        paragraph2item1
                        paragraph2item2
                        backgroundImageModal {
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

    const {
        title,
        titleParagraph1,
        paragraph1,
        titleParagraph2,
        paragraph2item1,
        paragraph2item2,
        backgroundImageModal
    } = frontmatter;

    const backgroundImg = getImage(backgroundImageModal)
    const bgImage = convertToBgImage(backgroundImg)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <BackgroundImage {...bgImage} preserveStackingContext style={{ paddingTop: "20px", width: "100%", paddingBottom: "100px", zIndex: 9999 }}>
                <ModalCloseIcon onClick={onClose}>
                    <img src={close} alt="close"/>
                </ModalCloseIcon>
                <TitleSection text={t(title)} />
                <Text>{t(titleParagraph1)}</Text>
                <Text>{t(paragraph1)}</Text>
                <Text>{t(titleParagraph2)}</Text>
                <Text>{t(paragraph2item1)}</Text>
                <Text>{t(paragraph2item2)}</Text>
            </BackgroundImage>
        </Modal>
    )
}

export default ModalAbout;
