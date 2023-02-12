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
    grid-template-columns: 20px auto 20px;
`;

const StyledLink = styled.a`    
    background-color: red;
    height: 100%;
    width: 100%;
`;

const StyledImageContainer = styled.div`
    padding: 10px;
    display: flex;
`;

const StyledImg = styled.img`    
    margin: auto;
    width: 90%;
`;

type LightBoxProps = {
    imageCollection: Images[];
    selectedIndex: number;
    isOpen: boolean;
    onCloseLightBox: ()=>void;
}

const ImageLightBox = ({imageCollection, selectedIndex, isOpen, onCloseLightBox}:LightBoxProps) => {
    const [selectedImg, setSelectedImg] = useState(imageCollection[selectedIndex]);
    const backgroundRef = useRef(null);
    const imageRef = useRef(null);



    const onBackgroundClick = (event: MouseEvent) => {
        // improve: https://usehooks-ts.com/react-hook/use-on-click-outside
        const currentBackground = backgroundRef?.current;
        const currentImage = imageRef?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (currentBackground && currentImage && currentBackground.contains(event.target) && !currentImage.contains(event.target) ) {
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
        <StyledLightBoxContainer ref={backgroundRef} onClick={(event: MouseEvent) => onBackgroundClick(event)} isVisible={isOpen}>
            <StyledLink onClick={getPrevious}>
                <img src="src/assets/img/left-arrow.png"
                     title="previous"/>
            </StyledLink>
                <StyledImageContainer>
                    <StyledImg ref={imageRef} src={selectedImg.src} alt={selectedImg.title} />
                </StyledImageContainer>
            <StyledLink onClick={getNext}>
                <img src="src/assets/img/right-arrow.png"
                     title="next"/>
            </StyledLink>
        </StyledLightBoxContainer>
    )
}

export default ImageLightBox;