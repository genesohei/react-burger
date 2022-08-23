import React from "react";
import {IModalContext} from "../utils/interfaces";

export const ModalContext = React.createContext<IModalContext | null>(null);