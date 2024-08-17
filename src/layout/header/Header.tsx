import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {MoonLightNightTheme} from "../../components/moon/MoonLightNightTheme";
import {Menu} from "../../components/menu/Menu";
import {StyledHeader} from "./styled/StyledHeader";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <MoonLightNightTheme/>
        </StyledHeader>
    );
};


