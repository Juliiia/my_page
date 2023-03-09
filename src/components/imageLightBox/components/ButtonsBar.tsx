import React from 'react';
import styled from 'styled-components';
import constants from "../../../js/constants";
import {CloseIcon, NextIcon, PreviousIcon} from "./Buttons";

const StyledLinkContainer = styled.div`
    display: none;
    @media (max-width: ${constants.mobileScreenSize}) {
        display: grid;
        align-items: center;
        grid-template-columns: 2fr 1fr  2fr;
        grid-column-gap: 10px;
        height: 50px;
    }
`;

const StyledLink = styled.a` 
    height: inherit;
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
    display: flex;
    justify-content: center;
    border-radius: 5px;
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
`;

type ButtonsBarProps = {
    onPrevious: ()=>void;
    onClose: ()=>void;
    onNext: ()=>void;
    topic: 'design' | 'art' | 'digital' | 'other';
}

export const ButtonsBar = ({onPrevious, onClose, onNext, topic}:ButtonsBarProps) => {
    return (
        <StyledLinkContainer>
            <StyledLink onClick={onPrevious} topic={topic}>
                <PreviousIcon />
            </StyledLink>

            <StyledLink onClick={onClose} topic={topic}>
                <CloseIcon />
            </StyledLink>

            <StyledLink onClick={onNext} topic={topic}>
                <NextIcon />
            </StyledLink>
        </StyledLinkContainer>
    )
}