import React from 'react';
import {StyledIntroduction} from "../styles/Introduction.styled.jsx";
import {IntroTitle} from "../styles/Title.styled.jsx";

function Introduction() {
    return (  
        <StyledIntroduction>
            <IntroTitle>Check the weather</IntroTitle>
            <IntroTitle>Quickly, Painlessly</IntroTitle>
        </StyledIntroduction>
    );
}

export default Introduction;