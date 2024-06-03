import styled from 'styled-components';
import constants from '../js/constants.js';
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";
// @ts-ignore
import logo from '../assets/img/logo.png';
import { StyledSimpleLink } from './linkElement.js';

const StyledNavbarDiv = styled.div`
	height: 50px;
	position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${constants.defaultBackgroundColor};
    z-index: 100;
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

/*const StyledNavbarLinkDesign = styled(StyledNavbarLink)`
    background-color: ${constants.colorDesign0};
    font-size: ${constants.fontSizeText};
    :hover {
        color: ${constants.defaultTextColor};
        background-color: ${constants.colorDesign1};
    }
`;*/

type NavbarProps = {
    onButtonClicked:(c: string) => void;
}

const Navbar = ({onButtonClicked}:NavbarProps) => {
    const [t, i18n] = useTranslation('common');
    const navigate = useNavigate();

    return (
        <StyledNavbarDiv>
            <StyledNavbarLogo
                src={logo}
                alt="Logo"
                onClick={() => {
                    navigate('/');
                }}
            />

            <StyledNavbarItem>
                <StyledSimpleLink
                    onClick={() => {
                        onButtonClicked('art');
                    }}
                >
                    Fine Art
                </StyledSimpleLink>
            </StyledNavbarItem>

&

            <StyledNavbarItem>
                <StyledSimpleLink
                    onClick={() => {
                        onButtonClicked('digital');
                    }}
                >
                    Digital Art
                </StyledSimpleLink>
            </StyledNavbarItem>
        </StyledNavbarDiv>
    )
}


export default Navbar;
