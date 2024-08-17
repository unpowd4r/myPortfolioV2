import React from 'react';
import {MainSkillsSection} from "../mainSkills/MainSkills";
import {MainDesc} from "../mainDesc/MainDesc";
import {MainSection} from "./styled/MainStyled";


export const Main = () => {
    return (
        <MainSection>
            <MainDesc/>
            <MainSkillsSection/>
        </MainSection>
    );
};




