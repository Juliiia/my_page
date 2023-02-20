import React from 'react';
import styled from 'styled-components';
import {Images} from "./defaultGallery";

const StyledImageLabel = styled.div`
    margin-top: 10px;
`;

const StyledLabel = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

const StyledImageTitle = styled.span`
    font-weight: bold;
`;

const StyledSize = styled.span`
    
`;

type ImageLabelAndContentProps = {
    selectedImg: Images;
}

const ImageLabelAndContent = ({selectedImg}:ImageLabelAndContentProps) => {

    return (
        <StyledImageLabel>
            <StyledLabel>
                <StyledImageTitle>{selectedImg.title}</StyledImageTitle>
                <StyledSize>{selectedImg.size}</StyledSize>
            </StyledLabel>
            <div>
                more
            </div>
        </StyledImageLabel>
    )
}

export default ImageLabelAndContent;