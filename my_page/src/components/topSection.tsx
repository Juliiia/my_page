import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'

const StyledTopSectionDiv = styled.div`
    padding: 10px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${constants.fontSizeTopSection};
    line-height: initial;
`;

const TopSection = () => {
    return (
        <StyledTopSectionDiv>
            <p>
                I'm Julia, nice to have you here.
            </p>
            <p>
                I do <a>UX & UI design</a> with a developer background and I'm a passionate <a>artist</a>.
            </p>
        </StyledTopSectionDiv>
    )
};

export default TopSection;