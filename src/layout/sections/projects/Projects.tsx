import React from 'react';
import {ButtonsProject} from "./buttons/ButtonsProject";
import {CardsProject} from "./buttons/cardsProject/CardsProject";
import {ProjectSection, TitleProject} from "./buttons/styledProjects/StyledProjects";

export const Projects = () => {
    return (
        <ProjectSection>
            <TitleProject>Projects</TitleProject>
            <ButtonsProject/>
            <CardsProject/>
        </ProjectSection>
    );
};

