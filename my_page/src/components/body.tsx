import styled from 'styled-components';
import React from 'react';
import TopSection from "./topSection";
import MainSection from "./mainSection";

const StyledBodyDiv = styled.div`
	height: 100%;
`;


const Body = () => {
    return (
        <StyledBodyDiv>
            <TopSection />
            <MainSection
                title = "UX/UI Design"
                content = "I’m a UX & UI Designer with experience as a frontend and backend developer."
            />
        </StyledBodyDiv>
    )
}

export default Body;