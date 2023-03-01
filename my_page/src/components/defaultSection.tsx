import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'

const StyledSMainSectionDiv = styled.div`
    padding: 10px;
    max-width: ${constants.sectionMaxWidthDefault};
    margin: 30px auto;
`;

const StyledTitle = styled.h1`
    font-size: ${constants.fontSizeSectionTitle};
    color: ${(props: { topic: string, level: number }) => {
        if(props.level != 1){
            return constants.defaultTextColor;
        } else if (props.topic == 'design') {
            return constants.colorDesign2;
        } else if(props.topic == 'art') {
            return constants.colorArt2;
        } else if(props.topic == 'other') {
            return constants.colorMe1;
        } else {
            return 'black';
        }
    }};
    font-weight: bold;
`;

type SectionProps = {
    topic: 'design' | 'art' | 'other';
    level?: number;
    title: string;
    content?: string;
    children?: string | JSX.Element | JSX.Element[];
};

const DefaultSection = ({topic, level = 1, title, content, children}:SectionProps) => {

    return (
        <StyledSMainSectionDiv>
            <StyledTitle level={level} topic={topic}>{title}</StyledTitle>
            {children}
        </StyledSMainSectionDiv>
    )
};

export default DefaultSection;