import React, {useState} from 'react';
import styled from 'styled-components';
import ImageLightBox from "./imageLightBox/imageLightBox";
import constants from "../assets/js/constants";

const StyledGalleryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
    margin: 30px auto;
    @media (max-width: ${constants.mobileScreenSize}) {
        grid-template-columns: 1fr 1fr;
    }
`;

const StyledImageContainer = styled.div`
    cursor: pointer;
    border: 5px solid ${constants.defaultBackgroundColor};
    &:hover {
        border: 5px solid ${constants.colorArt2};
        background-color: ${constants.colorArt2};
    }
`;

const StyledImg = styled.img`    
    margin: auto;
    max-height: 100%;
`;

export interface ImageInfo {
    src: string
    content: string
}

export interface Images {
    title: string
    content: string
    src: string
    size: string
    isSold: boolean
    imageInfo: ImageInfo[]
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