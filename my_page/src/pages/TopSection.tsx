import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'
import TextLink from "../components/textLink";
import DefaultParagraph from "../components/defaultParagraph";

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
    return (
        <StyledTopSectionDiv>
            <StyledImg src='src/assets/img/Blatt.png' alt='colorful leaf' />
            <StyledTopSectionTextDiv>
                <DefaultParagraph textSize={'big'}>
                    I'm Julia, nice to have you here.
                </DefaultParagraph>
                <DefaultParagraph textSize={'big'}>
                    <>
                        I do <TextLink topic={'design'} linkTo={'#design_section'} newTab={false}>UX & UI design</TextLink> with a developer background and I'm a passionate <TextLink topic={'art'} linkTo={'#art_section'} newTab={false}>artist</TextLink>.
                    </>
                </DefaultParagraph>
            </StyledTopSectionTextDiv>
        </StyledTopSectionDiv>
    )
};

export default TopSection;