import React from 'react';
import {Buttons} from "./buttons/Buttons";
import {NameAndTitle} from "./titleAndName/NameAndTitle";
import {Photo} from "./photo/Photo";
import {MainPhoto, MyDescMain} from "./styled/StyledDesc";

export const MainDesc = () => {
    return (
        <MainPhoto>
            <Photo/>
            <MyDescMain>
                <NameAndTitle/>
                <Buttons />
            </MyDescMain>
        </MainPhoto>
    );
};

