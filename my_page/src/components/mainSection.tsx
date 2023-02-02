import styled from 'styled-components';
import React from 'react';

const StyledSMainSectionDiv = styled.div`
    padding: 10px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

//children?: React.ReactNode

type SectionProps = {
    title: string;
    content: string;
};

const MainSection = ({title, content}:SectionProps) => {
    return (
        <StyledSMainSectionDiv>
            <h2>{title}</h2>
            <p>{content}</p>
        </StyledSMainSectionDiv>
    )
};

export default MainSection;