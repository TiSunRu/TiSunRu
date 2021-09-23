import React, { FC } from 'react';
import { useI18next } from "gatsby-plugin-react-i18next";
import { LanguageItem, LanguageLink, LanguageList } from './styled'

const SelectLanguage: FC = () => {
    const { languages, changeLanguage } = useI18next();
    const [ ru, en ] = languages;

    return (
        <LanguageList>
            <LanguageItem>
                <LanguageLink style={{ marginRight: "10px" }} to="#" onClick={(e: { preventDefault: () => void; }) => {
                    e.preventDefault();
                    changeLanguage(ru);
                }}>
                    {ru.toUpperCase()}
                </LanguageLink>
            </LanguageItem>

            <div style={{ fontSize: "40px", color: "#fff" }}>|</div>

            <LanguageItem>
                <LanguageLink style={{ marginLeft: "10px" }} to="#" onClick={(e: { preventDefault: () => void; }) => {
                    e.preventDefault();
                    changeLanguage(en)
                }}>
                    {en.toUpperCase()}
                </LanguageLink>
            </LanguageItem>
        </LanguageList>
    )
}

export default SelectLanguage;
