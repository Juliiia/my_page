import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'

const StyledLink = styled.a`
    color: ${(props: { topic: string; }) => {
        if(props.topic == 'design') {
            return constants.colorDesign2;
        } else if(props.topic == 'art') {
            return constants.colorArt2;
        } else {
            return 'black';
        }
    }};
    &:hover {
        color: ${(props: { topic: string; }) => {
            if(props.topic == 'design') {
                return constants.colorDesign2;
            } else if(props.topic == 'art') {
                return constants.colorArt2;
            } else {
                return 'black';
            }
        }};
        text-decoration: underline;
  }
`;

type LinkProps = {
    topic: 'design' | 'art';
    linkTo: string;
    children: string | JSX.Element | JSX.Element[];
}

const TextLink = ({topic, linkTo, children}:LinkProps) => {
    return (
        <StyledLink topic={topic}>
            {children}
        </StyledLink>
    )
};

export default TextLink;