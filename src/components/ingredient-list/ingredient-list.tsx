import React from "react";
import styles from "./ingredient-list.module.css";
import { Ingredient } from "../../utils/interfaces";
import IngredientItem from "../ingredient-item/ingredient-item";

interface IngredientListProps {
    title: string
    list: Ingredient[]
}

function IngredientList({ title, list }: IngredientListProps) {
    return (
        <section className={'mb-10'}>
            <h2 className={'text text_type_main-medium mb-6'}>{title}</h2>
            <ul className={`${styles.list} ml-4`}>
                { list.map((item) => <IngredientItem name={item.name} price={item.price} image={item.image} value={item.__v} key={item._id}/>) }
            </ul>
        </section>
    )
}

export default IngredientList;