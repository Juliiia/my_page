import styled from 'styled-components';
import React from 'react';

const StyledTopSectionDiv = styled.div`
    padding: 10px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
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