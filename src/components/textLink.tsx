import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js'

const StyledLink = styled.a`
    cursor: pointer;
    color: ${constants.defaultTextColor};
    background-color: ${(props: { topic: string; }) => {
        if(props.topic == 'design') {
            return constants.colorDesign0;
        } else if(props.topic == 'art') {
            return constants.colorArt0;
        } else if(props.topic == 'digital') {
            return constants.colorDigital0;
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
            } else if(props.topic == 'digital') {
                return constants.colorDigital1;
            } else {
                return 'black';
            }
        }};
        text-decoration: none;
  }
`;

type ScrollToProps = {
    topic: 'design' | 'art';
    scrollTo: (c: string) => void;
    children: string | JSX.Element | JSX.Element[];
}

type LinkToProps = {
    topic: 'design' | 'art' | 'digital';
    linkTo: string;
    newTab: boolean;
    children?: string | JSX.Element | JSX.Element[];
}

type GeneralTypes = ScrollToProps | LinkToProps;

const isLinkToComponent = (props: GeneralTypes): props is LinkToProps => {
    return 'linkTo' in props;
}

const isScrollToProps = (props: GeneralTypes): props is ScrollToProps => {
    return 'scrollTo' in props;
}

const ScrollToComponent = (props:ScrollToProps) => {
    return (
        <StyledLink
            topic={props.topic}
            onClick={() => props.scrollTo('test')}
        >
            {props.children}
        </StyledLink>
    )
}

const LinkToComponent = (props:LinkToProps) => {
    if(props.newTab) {
        return <StyledLink topic={props.topic} href={props.linkTo} target="_blank"> {props.children} </StyledLink>
    } else {
        return <StyledLink topic={props.topic} href={props.linkTo}> {props.children} </StyledLink>
    }
}

const TextLink = (props: GeneralTypes) => {
    if(isLinkToComponent(props)){
        return <LinkToComponent {...props} children={props.children} />;
    } else if(isScrollToProps(props)) {
        return <ScrollToComponent {...props}  children={props.children} />;
    } else {
        return <span></span>;
    }
};

export default TextLink;