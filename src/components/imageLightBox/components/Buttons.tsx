import React from 'react';
import styled from 'styled-components';
import constants from "../../../js/constants";

const StyledLink = styled.a`    
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
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
    :hover {
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
    }
    @media (max-width: ${constants.mobileScreenSize}) {
        display: none;
    }
`;

const StyledLinkImg = styled.img`    
    max-width: 100%;
    height: inherit;
`;

export const PreviousIcon = () => {
    return <StyledLinkImg src="src/assets/img/left-arrow.png" title="previous"/>;
}

export const NextIcon = () => {
    return <StyledLinkImg src="src/assets/img/right-arrow.png" title="next"/>;
}

export const CloseIcon = () => {
    return <StyledLinkImg src="src/assets/img/close.png" title="close"/>
}

type ButtonProps = {
    onClickAction: ()=>void;
    topic: 'design' | 'art' | 'digital' | 'other';
}

export const PreviousButton = ({onClickAction, topic}:ButtonProps) => {
    return (
        <StyledLink onClick={onClickAction} topic={topic}>
            <PreviousIcon />
        </StyledLink>
    )
};

export const NextButton = ({onClickAction, topic}:ButtonProps) => {
    return (
        <StyledLink onClick={onClickAction} topic={topic}>
            <NextIcon />
        </StyledLink>
    )
};

export const CloseButton = ({onClickAction, topic}:ButtonProps) => {
    return (
        <StyledLink onClick={onClickAction} topic={topic}>
            <CloseIcon />
        </StyledLink>
    )
}
