import React, {useEffect, useRef} from 'react';
import DefaultSection from "../components/defaultSection";
import DefaultCard from "../components/defaultCard";
import DefaultGallery from "../components/defaultGallery";
import {artGallery} from "../assets/js/artGallery";
import {monsterGallery} from "../assets/js/monsterGallery";
import TopSection from "./TopSection";
import Footer from "./Footer";
import TextLink from "../components/textLink";
import DefaultParagraph from "../components/defaultParagraph";
import {Trans, useTranslation} from "react-i18next";

type LandingPageProps = {
    navbarClickedButton: string;
}

const LandingPage = ({navbarClickedButton}:LandingPageProps) => {
    const {t, i18n} = useTranslation('common');
    const uxuiSectionRef = useRef(null);
    const artSectionRef = useRef(null);
    const digitalSectionRef = useRef(null);

    useEffect(() => {
        scrollToSection(navbarClickedButton);
    }, [navbarClickedButton]);

    const scrollToSection = (sectionName:string) => {
        if(sectionName == 'design' && uxuiSectionRef){
            uxuiSectionRef.current?.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        } else if (navbarClickedButton == 'art' && artSectionRef) {
            artSectionRef.current?.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        } else if (navbarClickedButton == 'digital' && digitalSectionRef) {
            digitalSectionRef.current?.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        }
    }

    return (
        <>
            <TopSection onScrollTo={scrollToSection}/>

            <span ref = {uxuiSectionRef} id='design_section'/>
            <DefaultSection
                topic = "design"
                title = "UX/UI Design"
            >
                <DefaultParagraph>
                    {t('uxui.section.content')}
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

            <span ref = {artSectionRef} id='art_section'/>
            <DefaultSection
                topic = "art"
                title = {t('fineArt.section.title')}
            >
                <DefaultParagraph>
                    {t('fineArt.section.content')}
                </DefaultParagraph>

                <DefaultGallery topic={'art'} imageCollection={artGallery} />
            </DefaultSection>

            <DefaultSection
                topic={"art"}
                level={2}
                title={t('fineArt.exhibitions.title')}
            >
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey="fineArt.exhibitions.content"
                        components={{
                            link1: <TextLink topic={'art'} linkTo={'https://www.kunst-aus-vielen-haenden.de/'} newTab={true} />,
                        }}
                    />
                </DefaultParagraph>
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey="fineArt.exhibitions.KaterMurr"
                        components={{
                            link1: <TextLink topic={'art'} linkTo={'https://kater-murr.com/'} newTab={true} />,
                        }}
                    />
                </DefaultParagraph>
            </DefaultSection>

            <span ref = {digitalSectionRef} id='digital_section'/>
            <DefaultSection
                topic={'digital'}
                title={t('digital.section.title')}
            >
                <DefaultParagraph>
                    {t('digital.section.content')}
                </DefaultParagraph>
                <DefaultGallery topic={'digital'} imageCollection={monsterGallery} />
            </DefaultSection>

            <DefaultSection
                topic={"other"}
                title={"About me"}
            >
                <>
                    <DefaultParagraph>
                        I’m Julia. I love to travel, to climb and to collect many impressions. These are my basis for new ideas. I always carry around at least a pen and paper, but if space allows, I take my colors with me.
                    </DefaultParagraph>
                    <DefaultParagraph>
                        I’m a self-taught designer and artist. I studied computer science of media at the technical university of Dresden and therefore have a software development background.
                    </DefaultParagraph>
                    <DefaultParagraph>
                       I love to implement new ideas analog or digital and to accompany existing projects creatively and energetically.
                    </DefaultParagraph>
                </>
            </DefaultSection>
            <Footer />
        </>
    )
}

export default LandingPage;