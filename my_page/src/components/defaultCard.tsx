import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js';
import { useNavigate } from "react-router-dom";

const StyledCardDiv = styled.a`
    padding: 15px;
    border: 1px solid black;
    display: grid;
    column-gap: 10px;
    grid-template-columns: auto auto auto;
    margin: 30px 0px;
    cursor: pointer;
`;

const StyledContentContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    color: ${constants.defaultTextColor};
`;

const StyledImg = styled.img`    
    display: block;
    margin: auto;
    max-height: 100%;
`;

type CardProps = {
    title: string;
    content: string;
    imgSrc: string;
    imgAlt: string;
    goToLink: string;
};

const DefaultCard = ({title, content, imgSrc, imgAlt, goToLink}:CardProps) =>{
    const navigate = useNavigate();

    return (
        <StyledCardDiv onClick={() => {
            navigate(goToLink);
        }}>
            <StyledContentContainer>
                <h3>{title}</h3>
                <p>{content}</p>
            </StyledContentContainer>
            <div>
                <StyledImg src={imgSrc} alt={imgAlt} />
            </div>
        </StyledCardDiv>
    )
};

export default DefaultCard;