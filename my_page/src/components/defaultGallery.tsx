import React, {useState} from 'react';
import styled from 'styled-components';
import ImageLightBox from "./imageLightBox";

const StyledGalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    margin: 30px auto;
`;

const StyledImageContainer = styled.div`
    cursor: pointer;
`;

const StyledImg = styled.img`    
    margin: auto;
    max-height: 100%;
`;

export interface Images {
    title: string
    content: string
    src: string
    isSold: boolean
}

type GalleryProps = {
    imageCollection: Images[];
}

const DefaultGallery = ({imageCollection}:GalleryProps) => {
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    const onImageClick = (selectedIndex:number) => {
        setSelectedImgIndex(selectedIndex);
        setIsLightBoxOpen(true);
    }

    const closeLightBox = () => {
        setIsLightBoxOpen(false);
    }

    return (
        <>
            <StyledGalleryContainer>
                {imageCollection.map((data, key) => {
                    return <StyledImageContainer key={key} onClick={() => onImageClick(key)}>
                        <StyledImg src={data.src} alt={data.title} />
                    </StyledImageContainer>;
                })}

            </StyledGalleryContainer>
            <ImageLightBox
                imageCollection={imageCollection}
                selectedIndex={selectedImgIndex}
                isOpen={isLightBoxOpen}
                onCloseLightBox={closeLightBox}
            />
        </>
    )
};

export default DefaultGallery;