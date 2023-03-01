import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'

const StyledLink = styled.a`
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
        text-decoration: none;
  }
`;

type LinkProps = {
    topic: 'design' | 'art';
    linkTo: string;
    children: string | JSX.Element | JSX.Element[];
}

const TextLink = ({topic, linkTo, children}:LinkProps) => {
    return (
        <StyledLink topic={topic} href={linkTo} target="_blank">
            {children}
        </StyledLink>
    )
};

export default TextLink;