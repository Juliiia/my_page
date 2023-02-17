import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'
import TextLink from "../components/textLink";

const StyledTopSectionDiv = styled.div`
    padding: 10px;
    max-width: ${constants.sectionMaxWidthDefault};
    margin-left: auto;
    margin-right: auto;
    font-size: ${constants.fontSizeBigText};
    line-height: initial;
`;

const TopSection = () => {
    return (
        <StyledTopSectionDiv>
            <p>
                I'm Julia, nice to have you here.
            </p>
            <p>
                I do <TextLink topic={'design'} linkTo={'test'}>UX & UI design</TextLink> with a developer background and I'm a passionate <TextLink topic={'art'} linkTo={'test'}>artist</TextLink>.
            </p>
        </StyledTopSectionDiv>
    )
};

export default TopSection;