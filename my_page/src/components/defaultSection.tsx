import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'

const StyledSMainSectionDiv = styled.div`
    padding: 10px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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
//children?: React.ReactNode

type SectionProps = {
    topic: 'design' | 'art';
    title: string;
    content: string;
};

const DefaultSection = ({topic, title, content}:SectionProps) => {
    return (
        <StyledSMainSectionDiv>
            <StyledTitle topic={topic}>{title}</StyledTitle>
            <StyledParagraph>{content}</StyledParagraph>
        </StyledSMainSectionDiv>
    )
};

export default DefaultSection;