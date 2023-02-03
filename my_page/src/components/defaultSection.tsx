import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'

const StyledSMainSectionDiv = styled.div`
    padding: 10px;
    max-width: 600px;
    margin: 30px auto;
`;

const StyledTitle = styled.h1`
    font-size: ${constants.fontSizeSectionTitle};
    color: ${(props: { topic: string; }) => {
        if(props.topic == 'design') {
            return constants.colorDesign2;
        } else if(props.topic == 'art') {
            return constants.colorArt2;
        } else {
            return 'black';
        }
    }};
    font-weight: bold;
`;

const StyledParagraph = styled.p`
    font-size: ${constants.fontSizeText};
    font-weight: lighter;
`;

type SectionProps = {
    topic: 'design' | 'art';
    title: string;
    content: string;
    children: string | JSX.Element | JSX.Element[];
};

const DefaultSection = ({topic, title, content, children}:SectionProps) => {
    return (
        <StyledSMainSectionDiv>
            <StyledTitle topic={topic}>{title}</StyledTitle>
            <StyledParagraph>{content}</StyledParagraph>
            {children}
        </StyledSMainSectionDiv>
    )
};

export default DefaultSection;