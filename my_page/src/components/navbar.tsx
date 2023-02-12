// @ts-ignore
import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js';

const StyledNavbarDiv = styled.div`
	height: 50px;
	position: sticky;
    top: 0px;
    display: flex;
`;

const StyledNavbarItem = styled.div`
    padding: 10px 5px;
    cursor: pointer;
`;

const StyledNavbarLogo = styled.img`    
    height: 45px;
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5px;
    margin-right: 10px;
`;

const StyledNavbarLink = styled.a`
    padding: 5px;
    color: ${constants.defaultTextColor};
`;

const StyledNavbarLinkDesign = styled(StyledNavbarLink)`
    background-color: ${constants.colorDesign1};
    font-size: ${constants.fontSizeText};
`;

const StyledNavbarLinkArt = styled(StyledNavbarLink)`
    background-color: ${constants.colorArt1};
`;

const Navbar = () => {

    return (
        <StyledNavbarDiv>
            <StyledNavbarLogo src="src/assets/img/logo.jpg" alt="Logo"/>
            <StyledNavbarItem>
                <StyledNavbarLinkDesign>
                    UX UI Design
                </StyledNavbarLinkDesign>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <StyledNavbarLinkArt>
                    Fine Art
                </StyledNavbarLinkArt>
            </StyledNavbarItem>
        </StyledNavbarDiv>
    )
}


export default Navbar;