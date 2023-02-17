import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import {Images} from "./defaultGallery";

const StyledLightBoxContainer = styled.div`
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: ${(props: {isVisible:boolean}) => (props.isVisible? 'grid' : 'none')};
    grid-template-columns: 30px auto 30px;
`;

const StyledLinkContainer = styled.div`
    display: flex;
`;

const StyledLink = styled.a`    
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

const StyledImageContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const StyledImageLabel = styled.div`
    
`;

const StyledImg = styled.img`    
    margin: auto;
    width: 95%;
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
    const imageRef = useRef(null);

    console.log(selectedImg);

   useEffect(() => {
        setSelectedImg(imageCollection[selectedIndex]);
    }, [isOpen]);

    const onBackgroundClick = (event: MouseEvent) => {
        // improve: https://usehooks-ts.com/react-hook/use-on-click-outside
        const currentImageContainer = imageContainer?.current;
        const currentImage = imageRef?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (currentImageContainer && currentImage && currentImageContainer.contains(event.target) && !currentImage.contains(event.target) ) {
            console.log("close");
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
                onClick={(event: MouseEvent) => onBackgroundClick(event)}>
                <StyledImg
                    ref={imageRef}
                    src={selectedImg.src}
                    alt={selectedImg.title}
                />
                <StyledImageLabel>
                    {selectedImg.title}
                    {selectedImg.content}
                </StyledImageLabel>
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