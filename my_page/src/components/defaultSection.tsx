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
    color: ${(props: { topic: string, level: number }) => {
        if(props.level != 1){
            return constants.defaultTextColor;
        } else if (props.topic == 'design') {
            return constants.colorDesign3;
        } else if(props.topic == 'art') {
            return constants.colorArt3;
        } else {
            return 'black';
        }
    }};
    font-weight: bold;
`;

const StyledParagraph = styled.div`
    font-size: ${constants.fontSizeText};
    font-weight: lighter;
`;

type SectionProps = {
    topic: 'design' | 'art';
    level?: number;
    title: string;
    content: string;
    children?: string | JSX.Element | JSX.Element[];
};

const DefaultSection = ({topic, level = 1, title, content, children}:SectionProps) => {

    const formatText = (text:string) => {
        if(text.includes('/n')){
            console.log("includes n");
            return text.split("/n").map(str => <p>{str}</p>);
        }
        return text;
    }

    return (
        <StyledSMainSectionDiv>
            <StyledTitle level={level} topic={topic}>{title}</StyledTitle>
            <StyledParagraph>{formatText(content)}</StyledParagraph>
            {children}
        </StyledSMainSectionDiv>
    )
};

export default DefaultSection;