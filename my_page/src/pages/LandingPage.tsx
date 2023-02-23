import React, {useRef} from 'react';
import DefaultSection from "../components/defaultSection";
import DefaultCard from "../components/defaultCard";
import DefaultGallery from "../components/defaultGallery";
import {artGallery} from "../assets/js/artGallery";
import TopSection from "./TopSection";
import Footer from "./Footer";
import TextLink from "../components/textLink";
import DefaultParagraph from "../components/defaultParagraph";

const LandingPage = () => {
    const uxuiSectionRef = useRef(null);
    const artSectionRef = useRef(null);

    const executeScrollTo = () => myRef.current.scrollIntoView()
    // run this function from an event handler or an effect to execute scroll

    return (
        <>
            <TopSection />

            <span ref = {uxuiSectionRef} />
            <DefaultSection
                topic = "design"
                title = "UX/UI Design"
            >
                <DefaultParagraph>
                    I’m a UX & UI Designer with experience as a frontend and backend developer.
                </DefaultParagraph>

                <DefaultCard
                    title = "Redesign of Climbing App"
                    content = "The Climbing Diary is an Android App for climbers and boulderers to log their projects and ascents. The goal of the case study is a redesign by focusing on the main functionalities the user expects from a climbing App. Therefore, we conducted a user survey and a comparison of other famous applications in this area."
                    imgSrc = "src/assets/img/logo.jpg"
                    imgAlt = "test"
                    goToLink = "/casestudyclimbing"
                    labels={['Case Study', 'UX Research', 'UX&UI Design']}
                />
            </DefaultSection>

            <span ref = {artSectionRef} />
            <DefaultSection
                topic = "art"
                title = "Fine Art - Shaps and colors"
            >
                <DefaultParagraph>
                    My art focuses on colors and shapes mostly created with acrylics and watercolors. I travel a lot and paint in nature, so I also like to use materials from the environment, such as sand and leaves.
                </DefaultParagraph>

                <DefaultGallery imageCollection={artGallery} />
            </DefaultSection>

            <DefaultSection
                topic={"art"}
                level={2}
                title={"Exhibitions"}
            >
                <DefaultParagraph>
                <>
                    I exhibited for the first time as part of <TextLink topic={'art'} linkTo={'test'}>Kunst aus vielen Händen</TextLink> . I find the exchange with other artists and people interested in art very exciting, so I am already looking forward to the next opportunity to exhibit.
                </>
                </DefaultParagraph>
            </DefaultSection>


            <DefaultSection
                topic={"other"}
                title={"About me"}
            >
                <>
                    <DefaultParagraph>
                        I’m Julia. I love to travel, to climb and to collect many impressions. These are my basis for new ideas.
                    </DefaultParagraph>
                    <DefaultParagraph>
                        I’m a self-taught designer and artist. I studied computer science of media at the technical university of Dresden and therefore have a software development background.
                    </DefaultParagraph>
                    <DefaultParagraph>
                       I love to implement new ideas analog or digital and to accompany existing projects creatively and energetically.
                    </DefaultParagraph>
                    <DefaultParagraph textSize={'big'}>
                        <>
                            If you are interested in my <TextLink topic={'art'} linkTo={'test'}>art</TextLink> or if I can help you with <TextLink topic={'design'} linkTo={'test'}>UX/UI topics</TextLink>, write me at: <TextLink topic={'design'} linkTo={'test'}>mail@juliamucha.de</TextLink>
                        </>
                    </DefaultParagraph>
                </>
            </DefaultSection>
            <Footer />
        </>
    )
}

export default LandingPage;