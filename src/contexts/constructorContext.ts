import React from "react";
import {IConstructorContext} from "../utils/interfaces";

const defaultState = {
    ingredients: [],
    bun: null,
    orderNumber: 0
}

export const ConstructorContext = React.createContext<IConstructorContext>({
    constructor: defaultState,
    setConstructor: () => {}
});