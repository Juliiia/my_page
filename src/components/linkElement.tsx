import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js'

/*const StyledColorLink = styled.a`
    cursor: pointer;
    color: ${constants.defaultTextColor};
    background-color: ${(props: { topic: string; }) => {
        if(props.topic == 'design') {
            return constants.colorDesign0;
        } else if(props.topic == 'art') {
            return constants.colorArt0;
        } else if(props.topic == 'digital') {
            return constants.colorDigital0;
        } else if(props.topic == 'other') {
            return constants.colorGrey2;
        } else {
            return 'transparent';
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
            } else if(props.topic == 'other') {
                return constants.colorGrey3;
            } else {
                return 'transparent';
            }
        }};
        text-decoration: none;
  }
`;*/

const StyledColorLink = styled.a`
    padding: 3px;
    text-decoration: none;
    background-color: ${constants.colorArt0};
    &:hover {
        background-color: ${constants.colorArt1};
        text-decoration: none;
    }
`;

export const StyledSimpleLink = styled.a`
    text-decoration: underline;
    &:hover {
        background-color: ${constants.colorArt1};
        text-decoration: none;
    }
`;

const StyledIconLabelDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

const StyledSocialImg = styled.img`
    height: 45px;
    max-width: inherit;
    padding: 5px;
`;

type ScrollToProps = {
    topic: 'design' | 'art';
    scrollTo: (c: string) => void;
    children: string | JSX.Element | JSX.Element[];
}

type LinkToProps = {
    topic: 'design' | 'art' | 'digital' | 'other';
    linkTo: string;
    newTab: boolean;
    children?: string | JSX.Element | JSX.Element[];
}

type IconLinkTo = {
    topic?: 'design' | 'art' | 'digital' | 'other';
    icon: string;
    alt: string;
    linkTo: string;
    label?: string;
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
        <StyledSimpleLink
            onClick={() => props.scrollTo('test')}
        >
            {props.children}
        </StyledSimpleLink>
    )
}

const LinkToComponent = (props:LinkToProps) => {
    if(props.newTab) {
        return <StyledSimpleLink href={props.linkTo} target="_blank"> {props.children} </StyledSimpleLink>
    } else {
        return <StyledSimpleLink href={props.linkTo}> {props.children} </StyledSimpleLink>
    }
}

export const TextLink = (props: GeneralTypes) => {
    if(isLinkToComponent(props)){
        return <LinkToComponent {...props} children={props.children} />;
    } else if(isScrollToProps(props)) {
        return <ScrollToComponent {...props}  children={props.children} />;
    } else {
        return <span></span>;
    }
};

export const IconLink = (props:IconLinkTo) => {
    return (
        <StyledColorLink href={props.linkTo} target="_blank">
            <StyledIconLabelDiv>
                <StyledSocialImg src={props.icon} alt={props.alt}/>
                {props.label && props.label}
            </StyledIconLabelDiv>
        </StyledColorLink>
    )
}
