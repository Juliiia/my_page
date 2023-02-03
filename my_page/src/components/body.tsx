import styled from 'styled-components';
import React from 'react';
import TopSection from "./topSection";
import DefaultSection from "./defaultSection";
import DefaultCard from "./defaultCard";

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
                >
                    <DefaultCard
                        title = "Redesign of Climbing App"
                        content = "The Climbing Diary is an Android App for climbers and boulderers to log their projects and ascents. The goal of the case study is a redesign by focusing on the main functionalities the user expects from a climbing App. Therefore, we conducted a user survey and a comparison of other famous applications in this area."
                        imgSrc = "src/assets/img/logo.jpg"
                        imgAlt = "test"
                    />
                </DefaultSection>



                <DefaultSection
                    topic = "art"
                    title = "Fine Art - Shaps and colors"
                    content = "My art focuses on colors and shapes mostly created with acrylics and watercolors. I travel a lot and paint in nature, so I also like to use materials from the environment, such as sand and leaves."
                >
                </DefaultSection>
            </StyledBodyDiv>
        </>
    )
}

export default Body;