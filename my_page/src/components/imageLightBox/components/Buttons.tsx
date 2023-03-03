import React from 'react';
import styled from 'styled-components';
import constants from "../../../assets/js/constants";

const StyledLink = styled.a`    
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${constants.colorArt1};
    :hover {
        background-color: ${constants.colorArt2};
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
}

export const PreviousButton = ({onClickAction}:ButtonProps) => {
    return (
        <StyledLink onClick={onClickAction}>
            <PreviousIcon />
        </StyledLink>
    )
};

export const NextButton = ({onClickAction}:ButtonProps) => {
    return (
        <StyledLink onClick={onClickAction}>
            <NextIcon />
        </StyledLink>
    )
};

export const CloseButton = ({onClickAction}:ButtonProps) => {
    return (
        <StyledLink onClick={onClickAction}>
            <CloseIcon />
        </StyledLink>
    )
}
