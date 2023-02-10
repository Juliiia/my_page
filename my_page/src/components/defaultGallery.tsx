import styled from 'styled-components';
import React from 'react';

const StyledGalleryContainer = styled.div`
    display: flex;
`;

const StyledImageContainer = styled.div`
    width: 50px;
    height: 50px;
    background-color: blue;
`;

type GalleryProps = {
    imageCollection: Object;
}

const DefaultGallery = ({imageCollection}:GalleryProps) => {
    return (
        <StyledGalleryContainer>
            {Object.keys(imageCollection).map((value, index, array) => {
                console.log(array);
                return <StyledImageContainer>{value[3]}</StyledImageContainer>;
            })}
        </StyledGalleryContainer>
    )
};

export default DefaultGallery;