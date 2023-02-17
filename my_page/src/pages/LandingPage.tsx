import React from 'react';
import styled from 'styled-components';
import DefaultSection from "../components/defaultSection";
import DefaultCard from "../components/defaultCard";
import DefaultGallery from "../components/defaultGallery";
import {artGallery} from "../assets/js/artGallery";
import TopSection from "./TopSection";
import Footer from "./Footer";
import TextLink from "../components/textLink";
import constants from "../assets/js/constants";

const StyledTextContainer = styled.p`
    font-size: ${constants.fontSizeBigText};
    line-height: initial;
`;

const LandingPage = () => {
    return (
        <>
            <TopSection />
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
                        goToLink = "/casestudyclimbing"
                        labels={['Case Study', 'UX Research', 'UX&UI Design']}
                    />
            </DefaultSection>

            <DefaultSection
                topic = "art"
                title = "Fine Art - Shaps and colors"
                content = "My art focuses on colors and shapes mostly created with acrylics and watercolors. I travel a lot and paint in nature, so I also like to use materials from the environment, such as sand and leaves."
            >
                <DefaultGallery imageCollection={artGallery} />
            </DefaultSection>
            <DefaultSection
                topic={"art"}
                level={2}
                title={"Exhibitions"}
                content={"I exhibited for the first time as part of \link Kunst aus vielen Händen \link. I find the exchange with other artists and people interested in art very exciting, so I am already looking forward to the next opportunity to exhibit."}
            />
            <DefaultSection
                topic={"other"}
                title={"About me"}
                content={"I am Julia. I love to travel, to climb and to collect many impressions. These are my basis for new ideas. \n I am a self-taught designer and artist. I studied computer science of media at the technical university of Dresden and therefore have a software development background. \n I love to implement new ideas analog or digital and to accompany existing projects creatively and energetically."}
            >
                <StyledTextContainer>
                    If you are interested in my <TextLink topic={'art'} linkTo={'test'}>art</TextLink> or if I can help you with <TextLink topic={'design'} linkTo={'test'}>UX/UI topics</TextLink>, write me at: <TextLink topic={'design'} linkTo={'test'}>mail@juliamucha.de</TextLink>
                </StyledTextContainer>
            </DefaultSection>
            <Footer />
        </>
    )
}

export default LandingPage;