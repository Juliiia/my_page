import React, {useEffect, useRef} from 'react';
import DefaultSection from "../components/defaultSection";
import DefaultGallery from "../components/defaultGallery";
import {artGallery} from "../js/artGallery";
import {monsterGallery} from "../js/monsterGallery";
import TopSection from "./TopSection";
import Footer from "./Footer";
import TextLink from "../components/textLink";
import DefaultParagraph from "../components/defaultParagraph";
import {Trans, useTranslation} from "react-i18next";
// @ts-ignore
import bilder from "../assets/bilderliste.pdf"

type LandingPageProps = {
    navbarClickedButton?: string;
}

const LandingPage = ({navbarClickedButton}:LandingPageProps) => {
    const {t, i18n} = useTranslation('common');
    const uxuiSectionRef = useRef<HTMLInputElement>(null);
    const artSectionRef = useRef<HTMLInputElement>(null);
    const digitalSectionRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(navbarClickedButton){
            scrollToSection(navbarClickedButton);
        }
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

            <span ref = {artSectionRef} id='art_section'/>
            <DefaultSection
                topic = "art"
                title = {t('fineArt.section.title')}
            >
                <DefaultParagraph>
                    <Trans
                        t={t}
                        i18nKey='fineArt.section.content'
                        components={{
                            link1: <TextLink topic={'art'} linkTo={'https://www.instagram.com/julia_farbe/'} newTab={true} />
                        }}
                    />
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
                            link2: <TextLink topic={'art'} linkTo={bilder} newTab={true} />
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
                title={t('aboutMe.section.title')}
            >
                <>
                    <DefaultParagraph>
                        {t('aboutMe.section.personal')}
                    </DefaultParagraph>
                    <DefaultParagraph>
                        <Trans
                            t={t}
                            i18nKey='aboutMe.section.professional'
                            components={{
                                link1: <TextLink topic={'other'} linkTo={'https://www.linkedin.com/in/julia-krause-b543a912a/'} newTab={true} />
                            }}
                        />
                    </DefaultParagraph>
                    <DefaultParagraph>
                       {t('aboutMe.section.claim')}
                    </DefaultParagraph>
                </>
            </DefaultSection>
            <Footer />
        </>
    )
}

export default LandingPage;
