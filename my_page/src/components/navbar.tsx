// @ts-ignore
import styled from 'styled-components';
import React from 'react';

const StyledNavbarDiv = styled.div`
	height: 50px;
	position: sticky;
    top: 0px;
    display: flex;
`;

const StyledNavbarItem = styled.div`
    padding: 10px 5px;
`;

const StyledNavbarLogo = styled.img`    
    height: 45px;
    display: block;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 5px;
    margin-right: 10px;
`;

const StyledNavbarLink = styled.div`
    padding: 5px;
`;

const StyledNavbarLinkDesign = styled(StyledNavbarLink)`
    background-color: #E0E7FF;
`;

const StyledNavbarLinkArt = styled(StyledNavbarLink)`
    background-color: #FFE5BF;
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