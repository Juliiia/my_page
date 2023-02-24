import React, {createContext, useContext} from "react";

export type NavbarContext = {
    navbarButtonClicked: string
    setNavbarButtonClicked:(c: string) => void
}
export const NavbarContext = createContext<NavbarContext>({
    navbarButtonClicked: '' , // set a default value
    setNavbarButtonClicked: () => {},
})
export const useNavbarContext = () => useContext(NavbarContext)