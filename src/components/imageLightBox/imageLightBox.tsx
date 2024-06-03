import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Images} from "../defaultGallery";
import constants from '../../js/constants.js'
import ImageLabelAndContent from "./components/imageLabelAndContent";
import {NextButton, PreviousButton} from "./components/Buttons";
import {ButtonsBar} from "./components/ButtonsBar";

const StyledLightBoxContainer = styled.div`
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.8);
    display: ${(props: {isVisible:boolean}) => (props.isVisible? 'grid' : 'none')};
    grid-template-columns: 40px auto 40px;
    align-items: center;
    @media (max-width: ${constants.mobileScreenSize}) {
        display: ${(props: {isVisible:boolean}) => (props.isVisible? 'flex' : 'none')};
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledImageContainer = styled.div`
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
    justify-content: center;
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
    topic: 'design' | 'art' | 'digital' | 'other';
}

const ImageLightBox = ({imageCollection, selectedIndex, isOpen, onCloseLightBox, topic}:LightBoxProps) => {
    const [selectedImg, setSelectedImg] = useState(imageCollection[selectedIndex]);
    const imageContainer = useRef<HTMLInputElement>(null);
    const imageFrameRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
        setSelectedImg(imageCollection[selectedIndex]);

        if(isOpen){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.removeProperty('overflow');
        }
    }, [isOpen]);

    const onBackgroundClick = (target: EventTarget) => {
        console.log("on Backgound");
        // improve: https://usehooks-ts.com/react-hook/use-on-click-outside
        const currentImageContainer = imageContainer?.current;
        const currentImageFrame = imageFrameRef?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (currentImageContainer && currentImageFrame && currentImageContainer?.contains(target as Node) && !currentImageFrame.contains(target as Node)) {
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
        <StyledLightBoxContainer
            isVisible={isOpen}
            onClick={(event:React.MouseEvent<HTMLDivElement>) => onBackgroundClick(event.target)}
        >

            <PreviousButton onClickAction={getPrevious} topic={topic}/>

            <StyledImageContainer
                ref={imageContainer}
            >
                <StyledImageContentFrame ref={imageFrameRef}>
                    <StyledImg
                        src={selectedImg.src}
                        alt={selectedImg.title}
                    />
                    <ImageLabelAndContent selectedImg={selectedImg}/>
                </StyledImageContentFrame>
            </StyledImageContainer>

            <NextButton onClickAction={getNext} topic={topic}/>

            <ButtonsBar
                onPrevious={getPrevious}
                onClose={onCloseLightBox}
                onNext={getNext}
                topic={topic}
            />

        </StyledLightBoxContainer>
    )
}

export default ImageLightBox;