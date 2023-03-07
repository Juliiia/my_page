import React from 'react';
import DefaultSection from "../components/defaultSection";
import DefaultParagraph from "../components/defaultParagraph";

const CSClimbingPage = () => {
    return(
        <>
            <DefaultSection
                topic="design"
                title="Redesign of Climbing App"
            >
                <DefaultParagraph>
                    The Climbing Diary is an Android App for climbers and boulderers to log their projects and ascents. The goal of the case study is a redesign by focusing on the main functionalities the user expects from a climbing App. Therefore, we conducted a user survey and a comparison of other famous applications in this area.
                </DefaultParagraph>
            </DefaultSection>

            <DefaultSection
                topic="design"
                level={2}
                title="Current State"
            >
                <DefaultParagraph>
                    To note an ascent in climbing or bouldering there are several tools. A well-known and widely used tool is the route database and community site 8a.nu. But also theCrag offers the possibility to create a logbook. In addition, there are other digital tools, but our survey has also shown that users like to develop individual solutions in the form of their own tables or analog notes prefer.
                </DefaultParagraph>
            </DefaultSection>

            <DefaultSection
                topic="design"
                level={2}
                title="Problem & Goal"
            >
                <DefaultParagraph>
                    I want to understand what a user expects from a Climbing logbook, so they will love to use it and to gain new insights about there skills based on past climbs. So we focus on two topics: logging a route or a project, and getting information gained from visualizations. As a result, the Climbing Diary App should be redesigned.
                </DefaultParagraph>
            </DefaultSection>

            <DefaultSection
                topic="design"
                level={2}
                title="Costumer survey"
            >
                <DefaultParagraph>
                    I created a questionnaire consisting of 11 questions to learn more from climbers about how they track their climbs and what evaluations they use. For the link to the questionnaire I created a QR code to distribute it faster and easier to people I met in the crag.
                </DefaultParagraph>
            </DefaultSection>

            <DefaultSection
                topic="design"
                level={2}
                title="Results of the costumer survey"
            >
                <DefaultParagraph>
                    <>
                        The two main take-away of the survey in which 21 people participated:
                        <ul>
                            <li>Users would like to add more information (such as GPS coordinates, photos, route character, belayer, etc.) to a route to better remember it later.</li>
                            <li>User want an individual and customizable analysis of there data.</li>
                        </ul>
                    </>
                </DefaultParagraph>
            </DefaultSection>
        </>
    )
}

export default CSClimbingPage;