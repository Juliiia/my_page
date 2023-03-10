import React from 'react';
import styled from 'styled-components';
import constants from "../../../js/constants";
// @ts-ignore
import leftArrow from '../../../assets/img/left-arrow.png';
// @ts-ignore
import rightArrow from '../../../assets/img/right-arrow.png';
// @ts-ignore
import close from '../../../assets/img/close.png';

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
    return <StyledLinkImg src={leftArrow} title="previous"/>;
}

export const NextIcon = () => {
    return <StyledLinkImg src={rightArrow} title="next"/>;
}

export const CloseIcon = () => {
    return <StyledLinkImg src={close} title="close"/>
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
