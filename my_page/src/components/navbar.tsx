// @ts-ignore
import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js';
import { useNavigate } from "react-router-dom";

const StyledNavbarDiv = styled.div`
	height: 50px;
	position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${constants.defaultBackgroundColor};
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
    cursor: pointer;
`;

const StyledNavbarLink = styled.a`
    padding: 5px;
    border-radius: 5px;
    color: ${constants.defaultTextColor};
`;

const StyledNavbarLinkDesign = styled(StyledNavbarLink)`
    background-color: ${constants.colorDesign0};
    font-size: ${constants.fontSizeText};
    :hover {
        color: ${constants.defaultTextColor};
        background-color: ${constants.colorDesign1};
    }
`;

const StyledNavbarLinkArt = styled(StyledNavbarLink)`
    background-color: ${constants.colorArt0};
    font-size: ${constants.fontSizeText};
    :hover {
        color: ${constants.defaultTextColor};
        background-color: ${constants.colorArt1};
    }
`;

type NavbarProps = {
    onButtonClicked:(c: string) => void;
}

const Navbar = ({onButtonClicked}:NavbarProps) => {
    const navigate = useNavigate();

    return (
        <StyledNavbarDiv>
            <StyledNavbarLogo
                src="src/assets/img/logo.png"
                alt="Logo"
                onClick={() => {
                    navigate('/');
                }}
            />
            <StyledNavbarItem>
                <StyledNavbarLinkDesign
                    onClick={() => {
                        onButtonClicked('design');
                    }}
                >
                    UX UI Design
                </StyledNavbarLinkDesign>
            </StyledNavbarItem>
            <StyledNavbarItem>
                <StyledNavbarLinkArt
                    onClick={() => {
                        onButtonClicked('art');
                    }}
                >
                    Fine Art
                </StyledNavbarLinkArt>
            </StyledNavbarItem>
        </StyledNavbarDiv>
    )
}


export default Navbar;