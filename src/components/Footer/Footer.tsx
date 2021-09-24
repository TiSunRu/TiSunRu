import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import logo from '../../assets/images/svg/tisun-logo.svg';
import facebook from '../../assets/images/svg/facebook.svg';
import instagram from '../../assets/images/svg/instagram.svg';
import pinterest from '../../assets/images/svg/pinterest.svg';
import verticalLine from "../../assets/images/svg/verticalLine.svg";
import leaf from '../../assets/images/svg/footer-leaf.svg'
import beans from '../../assets/images/svg/footer-beans.svg'
import TitleSection from "../common/TitleSection/TitleSection";
import {
    FooterContainer,
    FooterWrapper,
    LinksContainer,
    CardLinks,
    Social,
    TextItem,
    ExtraWrapperIcon,
    VerticleLine,
    IconWrapper,
    LinkItem,
    Leaf,
    Beans,
} from './styled'
import {isRu} from "../../helpers/isRu";
import { URL_FACEBOOK_FOOTER, URL_INSTAGRAM_FOOTER, URL_WILDBERRIES_FOOTER } from "../../contstants";

const Footer: FC = () => {
    const { footer: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                footer: markdownRemark(frontmatter: {type: { eq: "footer" }}) {
                    frontmatter {
                        item1
                        item2
                        item5
                        description
                    }
                }
            }
        `
    )

    const { t } = useTranslation();

    const { item1, item2, item5 } = frontmatter;

    return (
        <FooterWrapper>
            <FooterContainer>
                <TitleSection icon={logo} />
                <LinksContainer>
                    <CardLinks>
                        <TextItem><LinkItem href={`${isRu() ? `/ru/#cooperation` : `/#cooperation`}`}>{t(item1)}</LinkItem></TextItem>
                        <TextItem><LinkItem href={`${isRu() ? `/ru/#cooperation` : `/#cooperation`}`}>{t(item2)}</LinkItem></TextItem>
                        <TextItem><LinkItem href={`${isRu() ? `/ru/#about` : `/#about`}`}>{t(item5)}</LinkItem></TextItem>
                    </CardLinks>
                    <VerticleLine>
                        <img src={verticalLine} alt="verticalLine"/>
                    </VerticleLine>
                    <CardLinks>
                        <Social>
                            <IconWrapper href={URL_FACEBOOK_FOOTER} target="_blank">
                                <img src={facebook} alt="facebook" />
                            </IconWrapper>
                            <ExtraWrapperIcon>
                                <IconWrapper href={URL_WILDBERRIES_FOOTER} target="_blank">
                                    <img src={pinterest} alt="wildberries" />
                                </IconWrapper>
                            </ExtraWrapperIcon>
                            <IconWrapper href={URL_INSTAGRAM_FOOTER} target="_blank">
                                <img src={instagram} alt="instagram" />
                            </IconWrapper>
                        </Social>
                    </CardLinks>
                </LinksContainer>

                <Leaf>
                    <img src={leaf} alt="leaf" />
                </Leaf>

            </FooterContainer>
            <Beans>
                <img src={beans} alt="beans" style={{ height: "80%" }} />
            </Beans>
        </FooterWrapper>
    )
}

export default Footer;
