import styled from 'styled-components';
import React from 'react';
import TopSection from "./topSection";
import DefaultSection from "./defaultSection";

const StyledBodyDiv = styled.div`
	height: 100%;
`;


const Body = () => {
    return (
        <>
            <TopSection />
            <StyledBodyDiv>
                <DefaultSection
                    topic = "design"
                    title = "UX/UI Design"
                    content = "I’m a UX & UI Designer with experience as a frontend and backend developer."
                />

                <DefaultSection
                    topic = "art"
                    title = "Fine Art - Shaps and colors"
                    content = "My art focuses on colors and shapes mostly created with acrylics and watercolors. I travel a lot and paint in nature, so I also like to use materials from the environment, such as sand and leaves."
                />
            </StyledBodyDiv>
        </>
    )
}

export default Body;