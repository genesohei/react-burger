import React from "react";

export interface Ingredient {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

interface IModalProps {
    title: string
}

export interface IModalState {
    component: React.ReactNode | null
    props?: IModalProps | null
}

export interface IModalContext {
    modal: IModalState
    showModal: (modal: IModalState) => void
    hideModal: () => void
}

export interface IConstructorState {
    ingredients: Ingredient[]
    bun: Ingredient | null
    orderNumber: number
}

export interface IConstructorContext {
    constructor: IConstructorState,
    setConstructor: React.Dispatch<React.SetStateAction<IConstructorState>>
}