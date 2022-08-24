import React from "react";
import {Ingredient} from "../utils/interfaces";

interface IngredientsContext {
    ingredients: Ingredient[],
}

const defaultContext: IngredientsContext = {
    ingredients: [],
};

export const IngredientsContext = React.createContext<IngredientsContext>(defaultContext);