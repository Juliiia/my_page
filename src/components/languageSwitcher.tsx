import React, {useState} from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import { StyledSimpleLink } from './linkElement.js';

export const LanguageSwitcher = () => {
    const labelForGermanPage = 'switch to English';
    const labelForEnglishPage = 'Wechsel zu Deutsch';

    const [t, i18n] = useTranslation('common');
    const [selectedLanguage, setSelectedLanguage] = useState(labelForGermanPage);

    const switchLanguage = () => {
        if (selectedLanguage == labelForEnglishPage) return changeLanguage('de', labelForGermanPage);
        if (selectedLanguage ==labelForGermanPage) return changeLanguage('en', labelForEnglishPage);

    }

    const changeLanguage = (language:string, label:string) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(label);
    }

    return (
        <StyledSimpleLink
            onClick={() => {
                switchLanguage()
            }}
        >
            {selectedLanguage}
        </StyledSimpleLink>
    )
}