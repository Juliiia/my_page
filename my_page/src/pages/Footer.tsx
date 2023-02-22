import React from 'react';
import styled from 'styled-components';
import constants from '../assets/js/constants.js';

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
    max-width: inherit;
    padding: 5px;
`;

const Footer = () => {
    return (
        <StyledFooterContainer>
            <div></div>
            <StyledSocialLinkContainer>
                <StyledSocialLink>
                    <StyledSocialImg src="src/assets/img/mail.png" alt="Mail" />
                </StyledSocialLink>
                <StyledSocialLink>
                    <StyledSocialImg src="src/assets/img/instagram.png" alt="Instagram" />
                </StyledSocialLink>
                <StyledSocialLink>
                    <StyledSocialImg src="src/assets/img/linkedin-logo.png" alt="LinkedIn" />
                </StyledSocialLink>
            </StyledSocialLinkContainer>
        </StyledFooterContainer>
    )
}

export default Footer;