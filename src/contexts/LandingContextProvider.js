import React, { createContext, useContext, useReducer, useState } from "react";
import { siteConfig } from "../helpers/siteConfig";

const LandingStateContext = createContext();

const initialState = {

}
export const LandingStateProvider = ({ children }) => {
    const [sitedetails, setSiteDetails] =useState(siteConfig)

    return (
        <LandingStateContext.Provider value={{}}>
            {children}
        </LandingStateContext.Provider>
    )
}
