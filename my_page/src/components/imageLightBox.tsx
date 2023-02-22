import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import {Images} from "./defaultGallery";
import constants from '../assets/js/constants.js'
import ImageLabelAndContent from "./imageLabelAndContent";

const StyledLightBoxContainer = styled.div`
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.5);
    display: ${(props: {isVisible:boolean}) => (props.isVisible? 'grid' : 'none')};
    grid-template-columns: 40px auto 40px;
`;

const StyledLinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled.a`    
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: ${constants.colorArt1};
    :hover {
        background-color: ${constants.colorArt2};
    }
`;

const StyledImageContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;

const StyledImageContentFrame = styled.div`
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #f2f2f2;
`;

const StyledImg = styled.img`    
    margin: auto;
    width: 100%;
    max-height: 800px;
    object-fit: contain;
`;

type LightBoxProps = {
    imageCollection: Images[];
    selectedIndex: number;
    isOpen: boolean;
    onCloseLightBox: ()=>void;
}

const ImageLightBox = ({imageCollection, selectedIndex, isOpen, onCloseLightBox}:LightBoxProps) => {
    const [selectedImg, setSelectedImg] = useState(imageCollection[selectedIndex]);
    const imageContainer = useRef(null);
    const imageFrameRef = useRef(null);

   useEffect(() => {
        setSelectedImg(imageCollection[selectedIndex]);

        if(isOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [isOpen]);

    const onBackgroundClick = (event: MouseEvent) => {
        // improve: https://usehooks-ts.com/react-hook/use-on-click-outside
        const currentImageContainer = imageContainer?.current;
        const currentImageFrame = imageFrameRef?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (currentImageContainer && currentImageFrame && currentImageContainer.contains(event.target) && !currentImageFrame.contains(event.target)) {
            onCloseLightBox();
        }
    }

    const getNext = () => {
        let indexNext = imageCollection.indexOf(selectedImg)+1;
        if(indexNext > imageCollection.length-1) indexNext = 0;
        setSelectedImg(imageCollection[indexNext]);
    }

    const getPrevious = () => {
        let indexPrevious = imageCollection.indexOf(selectedImg)-1;
        if(indexPrevious < 0) indexPrevious = imageCollection.length-1;
        setSelectedImg(imageCollection[indexPrevious]);
    }

    return (
        <StyledLightBoxContainer isVisible={isOpen}>

            <StyledLinkContainer>
                <StyledLink onClick={getPrevious}>
                    <img src="src/assets/img/left-arrow.png"
                         title="previous"/>
                </StyledLink>
            </StyledLinkContainer>

            <StyledImageContainer
                ref={imageContainer}
                onClick={(event: MouseEvent) => onBackgroundClick(event)}
            >
                <StyledImageContentFrame ref={imageFrameRef}>
                    <StyledImg
                        src={selectedImg.src}
                        alt={selectedImg.title}
                    />
                    <ImageLabelAndContent selectedImg={selectedImg}/>
                </StyledImageContentFrame>
            </StyledImageContainer>

            <StyledLinkContainer>
                <StyledLink onClick={getNext}>
                    <img
                        src="src/assets/img/right-arrow.png"
                        title="next"/>
                </StyledLink>
            </StyledLinkContainer>

        </StyledLightBoxContainer>
    )
}

export default ImageLightBox;