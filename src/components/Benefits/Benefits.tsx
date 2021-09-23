import React, { FC } from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import TitleSection from "../common/TitleSection/TitleSection";
import BenefitCard from "./BenefitCard";
import natural from '../../assets/images/svg/natural.svg';
import own from '../../assets/images/svg/own.svg';
import organic from '../../assets/images/svg/organic.svg';
import leafLeftUp from '../../assets/images/svg/benefits-leaf-left-up.svg'
import leafRightUp from '../../assets/images/svg/benefits-leaf-right-up.svg'
import leafMiddleDown from '../../assets/images/svg/benefits-leaf-middle-down.svg'
import {
    BenefitsContainer,
    BenefitsWrapper,
    LeafLeftUp,
    LeafRightUp,
    LeafMiddleDown
} from './styled'

const ICONS = [ natural, own, organic ];

const Benefits: FC = () => {
    const { benefits: { frontmatter } } = useStaticQuery(
        graphql`
            query {
                benefits: markdownRemark(frontmatter: {type: { eq: "benefits" }}) {
                    frontmatter {
                        title
                        benefits {
                            title
                            description
                        }
                    }
                }
            }
        `
    )

    const { t } = useTranslation();

    const { title, benefits } = frontmatter;

    return (
        <BenefitsWrapper>
            {/*<LeafLeftUp>*/}
            {/*    <img src={leafLeftUp} alt="leafLeftUp" />*/}
            {/*</LeafLeftUp>*/}

            <TitleSection text={t(title)} />

            <LeafRightUp>
                <img src={leafRightUp} alt="leafRightUp" />
            </LeafRightUp>

            <BenefitsContainer>
                {
                    benefits?.map((benefit: any, index: number) => {
                        const { title, description } = benefit;
                        return <BenefitCard title={t(title)} description={t(description)} icon={ICONS[index]} />
                    })
                }
            </BenefitsContainer>

            <LeafMiddleDown>
                <img src={leafMiddleDown} alt="leafMiddleDown" />
            </LeafMiddleDown>
        </BenefitsWrapper>
    )
}

export default Benefits;
