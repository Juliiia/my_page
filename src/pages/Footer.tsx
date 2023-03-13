import React from 'react';
import styled from 'styled-components';
import constants from '../js/constants.js';
// @ts-ignore
import envelope from '../assets/img/envelope.svg'
// @ts-ignore
import instagram from '../assets/img/instagram.png';
// @ts-ignore
import linkedIn from '../assets/img/linkedin-logo.png';

const StyledFooterContainer = styled.div`
    background-color: ${constants.darkSection};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 5px;
`;

const StyledSocialLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledSocialLink = styled.a`
    max-width: 40px;
`;

const StyledSocialImg = styled.img`
    height: 35px;
    max-width: inherit;
    padding: 5px;
`;

const Footer = () => {
    return (
        <StyledFooterContainer>
            <div></div>
            <StyledSocialLinkContainer>
                <StyledSocialLink href="mailto:mail@juliamucha.de?subject=Mail from juliamucha.de">
                    <StyledSocialImg src={envelope} alt="Mail" />
                </StyledSocialLink>
                <StyledSocialLink href="https://www.linkedin.com/in/julia-krause-b543a912a/" target="_blank">
                    <StyledSocialImg src={linkedIn} alt="LinkedIn" />
                </StyledSocialLink>
            </StyledSocialLinkContainer>
        </StyledFooterContainer>
    )
}

export default Footer;
