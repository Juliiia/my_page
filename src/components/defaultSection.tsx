import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js'
import {DefaultTFuncReturn} from "i18next";

const StyledSMainSectionDiv = styled.div`
    padding: 10px;
    max-width: ${constants.sectionMaxWidthDefault};
    margin: 30px auto;
`;

const StyledColoredTitle = styled.h1`
    font-size: ${constants.fontSizeSectionTitle};
    color: ${(props: { topic: string, level: number }) => {
        if(props.level != 1){
            return constants.defaultTextColor;
        } else if (props.topic == 'design') {
            return constants.colorDesign2;
        } else if(props.topic == 'art') {
            return constants.colorArt2;
        } else if(props.topic == 'digital') {
            return constants.colorDigital2;
        } else if(props.topic == 'other') {
            return constants.colorMe1;
        } else {
            return 'black';
        }
    }};
    font-weight: bold;
`;

const StyledTitle = styled.h1`
    font-size: ${constants.fontSizeSectionTitle};
    font-weight: bold;
`;

const StyledSubSectionTitle = styled.h2`
    font-size: ${constants.fontSizeSubSectionTitle};
    font-weight: bold;
`;

type SectionProps = {
    topic?: 'design' | 'art' | 'digital' | 'other';
    level?: number;
    title: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
    children?: string | JSX.Element | JSX.Element[];
};

const DefaultSection = ({topic, level = 1, title, children}:SectionProps) => {

    return (
        <StyledSMainSectionDiv>
            {level == 1 ? 
                <StyledTitle>{title}</StyledTitle>
                :
                <StyledSubSectionTitle>{title}</StyledSubSectionTitle>
            }
            
            {children}
        </StyledSMainSectionDiv>
    )
};

export default DefaultSection;