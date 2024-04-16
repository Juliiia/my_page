import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js'
import TextLink from "../components/textLink";
import DefaultParagraph from "../components/defaultParagraph";
import {Trans, useTranslation} from "react-i18next";
// @ts-ignore
import blattPng from '../assets/img/Blatt.png'

const StyledTopSectionDiv = styled.div`
    margin: auto;
    @media (min-width: ${constants.mobileScreenSize}) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 5px;
        row-gap: 5px;
        max-width: 1000px;
        align-items: center;
    }
`;

const StyledTopSectionTextDiv = styled.div`
    padding: 10px;
    max-width: ${constants.sectionMaxWidthDefault};
    margin-left: auto;
    margin-right: auto;
    font-size: ${constants.fontSizeBigText};
    line-height: initial;
`;

const StyledImg = styled.img`    
    display: block;
`;

type TopSectionProps = {
    onScrollTo: (c:string) => void;
}

const TopSection = ({onScrollTo}:TopSectionProps) => {
    const {t, i18n} = useTranslation('common');

    return (
        <StyledTopSectionDiv>
            <StyledImg src={blattPng} alt='colorful leaf' />
            <StyledTopSectionTextDiv>
                <DefaultParagraph textSize={'big'}>
                    {t('topSection.me')}
                </DefaultParagraph>
                <DefaultParagraph textSize={'big'}>
                    <>
                        <Trans
                            t={t}
                            i18nKey="topSection.IDo"
                            components={{
                                link2: <TextLink topic={'art'} linkTo={'#art_section'} newTab={false} />,
                                link3: <TextLink topic={'digital'} linkTo={'#digital_section'} newTab={false} />
                            }}
                        />
                    </>
                </DefaultParagraph>
            </StyledTopSectionTextDiv>
        </StyledTopSectionDiv>
    )
};

export default TopSection;
