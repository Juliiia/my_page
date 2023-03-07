import React from 'react';
import styled from 'styled-components';
import constants from '../assets/js/constants.js'

const StyledSpan = styled.span`
    cursor: pointer;
    color: ${constants.defaultTextColor};
    background-color: ${(props: { topic: string; }) => {
    if(props.topic == 'design') {
        return constants.colorDesign0;
    } else if(props.topic == 'art') {
        return constants.colorArt0;
    } else {
        return 'black';
    }
    }};
        &:hover {
            color: ${constants.defaultTextColor};
            background-color: ${(props: { topic: string; }) => {
        if(props.topic == 'design') {
            return constants.colorDesign1;
        } else if(props.topic == 'art') {
            return constants.colorArt1;
        } else {
            return 'black';
        }
    }};
  }
`;

type ColoredTextProps = {
    topic: 'design' | 'art';
    children: string | JSX.Element | JSX.Element[];
}

export const ColoredText = ({topic, children}:ColoredTextProps) => {
    return <StyledSpan topic={topic}>{children}</StyledSpan>
}