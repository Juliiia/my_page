import styled from 'styled-components';
import React from 'react';
import constants from '../assets/js/constants.js'
import {DefaultTFuncReturn} from "i18next";

const StyledParagraph = styled.div`
    font-size: ${(props: {textSize:string}) => {
        if(props.textSize == 'big'){
            return constants.fontSizeBigText;
        } else if (props.textSize == 'small') {
            return constants.fontSizeSmallText;
        } else {
            return constants.fontSizeText;
        }
    }};
    margin: 10px 0px;
`;

type DefaultParagraphProps = {
    textSize?: 'big' | 'normal' | 'small';
    children?: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
};

const DefaultParagraph = ({children, textSize='normal'}:DefaultParagraphProps) => {
    return(
        <StyledParagraph textSize={textSize}>
            {children}
        </StyledParagraph>
    )
}

export default DefaultParagraph;