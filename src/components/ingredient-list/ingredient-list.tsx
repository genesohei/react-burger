import React, {forwardRef} from "react";
import styles from "./ingredient-list.module.css";
import { Ingredient } from "../../utils/interfaces";
import IngredientItem from "../ingredient-item/ingredient-item";

interface IngredientListProps {
    title: string
    list: Ingredient[]
    handleIngredientClick: Function
}

type Ref = HTMLDivElement;

const IngredientList = forwardRef<Ref, IngredientListProps>(({ title, list, handleIngredientClick }, ref) => {
    return (
        <section className={'mb-10'} ref={ref}>
            <h2 className={'text text_type_main-medium mb-6'}>{title}</h2>
            <ul className={`${styles.list} ml-4`}>
                { list.map((item) => <IngredientItem
                    item={item}
                    key={item._id}
                    handleIngredientClick={handleIngredientClick}
                />) }
            </ul>
        </section>
    )
});

export default IngredientList;