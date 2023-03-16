import React, {useState} from 'react';
import styled from 'styled-components';
import ImageLightBox from "./imageLightBox/imageLightBox";
import constants from "../js/constants";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    max-height: 320px;
    overflow: hidden;
    border: 5px solid ${constants.defaultBackgroundColor};
    &:hover {
        border: 5px solid ${(props: { topic: string}) => {
            if (props.topic == 'design') {
                return constants.colorDesign2;
            } else if(props.topic == 'art') {
                return constants.colorArt2;
            } else if(props.topic == 'digital') {
                return constants.colorDigital2;
            } else if(props.topic == 'other') {
                return constants.colorMe1;
            } else {
                return 'black';
            }}};
        background-color: ${(props: { topic: string}) => {
            if (props.topic == 'design') {
                return constants.colorDesign2;
            } else if(props.topic == 'art') {
                return constants.colorArt2;
            } else if(props.topic == 'digital') {
                return constants.colorDigital2;
            } else if(props.topic == 'other') {
                return constants.colorMe1;
            } else {
                return 'black';
            }}};
        }
`;

const StyledImg = styled.img`    
    margin: auto;
    object-fit: cover;
`;

export interface ImageInfo {
    src: string
    content: string
}

export interface Images {
    title: string
    content?: string
    src: string
    size: string
    isSold: boolean
    imageInfo?: ImageInfo[]
}

type GalleryProps = {
    topic: 'design' | 'art' | 'digital' | 'other';
    imageCollection: Images[];
}

const DefaultGallery = ({topic, imageCollection}:GalleryProps) => {
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
                    return <StyledImageContainer topic={topic} key={key} onClick={() => onImageClick(key)}>
                        <LazyLoadImage
                            src={data.src}
                            alt={data.title}
                            effect="blur"
                        />
                    </StyledImageContainer>;
                })}

            </StyledGalleryContainer>
            <ImageLightBox
                imageCollection={imageCollection}
                selectedIndex={selectedImgIndex}
                isOpen={isLightBoxOpen}
                onCloseLightBox={closeLightBox}
                topic={topic}
            />
        </>
    )
};

export default DefaultGallery;