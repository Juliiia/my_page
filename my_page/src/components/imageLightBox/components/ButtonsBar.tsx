import React from 'react';
import styled from 'styled-components';
import constants from "../../../assets/js/constants";
import {CloseButton, CloseIcon, NextButton, NextIcon, PreviousButton, PreviousIcon} from "./Buttons";

const StyledLinkContainer = styled.div`
    display: none;
    @media (max-width: ${constants.mobileScreenSize}) {
        display: grid;
        align-items: center;
        grid-template-columns: 2fr 1fr  2fr;
        grid-column-gap: 10px;
        height: 50px;
        border-radius: 5px;
    }
`;

const StyledLink = styled.a` 
    height: inherit;
    background-color: ${constants.colorArt1};
    :hover {
        background-color: ${constants.colorArt2};
    }
`;

type ButtonsBarProps = {
    onPrevious: ()=>void;
    onClose: ()=>void;
    onNext: ()=>void;
}

export const ButtonsBar = ({onPrevious, onClose, onNext}:ButtonsBarProps) => {
    return (
        <StyledLinkContainer>
            <StyledLink onClick={onPrevious}>
                <PreviousIcon />
            </StyledLink>

            <a onClick={onClose} >
                <CloseIcon />
            </a>

            <StyledLink onClick={onNext}>
                <NextIcon />
            </StyledLink>
        </StyledLinkContainer>
    )
}