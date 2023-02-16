import React from 'react';
import styled from 'styled-components';
import constants from '../assets/js/constants.js';
import TextLink from "../components/textLink";

const StyledFooterContainer = styled.div`
    background-color: ${constants.darkSection};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px 5px;
`;

const StyledTextContainer = styled.p`
    padding: 5px;
    font-size: ${constants.fontSizeBigText};
    line-height: initial;
`;

const StyledSocialLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledSocialLink = styled.a`
    max-width: 40px;
`;

const StyledSocialImg = styled.img`
    max-width: inherit;
    padding: 5px;
`;

const Footer = () => {
    return (
        <StyledFooterContainer>
            <StyledTextContainer>
                If you are interested in my <TextLink topic={'art'} linkTo={'test'}>art</TextLink> or if I can help you with <TextLink topic={'design'} linkTo={'test'}>UX/UI topics</TextLink>, write me at: <TextLink topic={'design'} linkTo={'test'}>mail@juliamucha.de</TextLink>
            </StyledTextContainer>
            <StyledSocialLinkContainer>
                <StyledSocialLink>
                    <StyledSocialImg src="src/assets/img/mail.png" alt="Mail" />
                </StyledSocialLink>
                <StyledSocialLink>
                    <StyledSocialImg src="src/assets/img/instagram.png" alt="Instagram" />
                </StyledSocialLink>
            </StyledSocialLinkContainer>
        </StyledFooterContainer>
    )
}

export default Footer;