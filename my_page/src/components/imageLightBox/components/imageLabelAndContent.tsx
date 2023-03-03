import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Images} from "../../defaultGallery";
import constants from "../../../assets/js/constants";
import DefaultSection from "../../defaultSection";

const StyledImageLabel = styled.div`
    margin-top: 10px;
`;

const StyledLabel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const StyledLink = styled.a`    
    border-radius: 5px;
    background-color: ${constants.colorArt1};
    :hover {
        background-color: ${constants.colorArt2};
    }
`;

const StyledIcon = styled.img`
    width: 30px;
    transform: ${(props: {show:boolean}) => (props.show? 'rotate(90deg)' : 'rotate(0deg)')};
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
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <StyledImageLabel>
            <StyledLabel>
                {/**(selectedImg.imageInfo && selectedImg.imageInfo.length > 0) &&
                    <StyledLink onClick={() => toggleShowMore()}>
                        <StyledIcon src="src/assets/img/right-arrow.png" title="show more" show={showMore}/>
                    </StyledLink>
                **/}
                <StyledImageTitle>
                    {selectedImg.title}
                </StyledImageTitle>
                <StyledSize>
                    {selectedImg.size}
                </StyledSize>
            </StyledLabel>
            {/**(showMore && selectedImg.imageInfo && selectedImg.imageInfo.length > 0) &&
                <div>
                    {selectedImg.imageInfo.map((value, index) => (
                        <DefaultSection
                            topic={'art'}
                            title={'Story'}
                        >
                            {value.content}
                        </DefaultSection>
                    ))}
                </div>
            **/}
        </StyledImageLabel>
    )
}

export default ImageLabelAndContent;