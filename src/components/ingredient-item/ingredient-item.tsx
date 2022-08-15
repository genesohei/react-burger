import React from "react";
import styles from "./ingredient-item.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../../utils/interfaces";

interface IngredientItemProps {
    item: Ingredient
    handleIngredientClick: Function
}

function IngredientItem({ item, handleIngredientClick }: IngredientItemProps) {
    const onIngredientClick = () => {
        handleIngredientClick(item);
    }

    return (
        <li className={styles.item} onClick={onIngredientClick}>
            <div className={styles.image} style={{backgroundImage: `url(${item.image})`}}>
                <Counter count={1}/>
            </div>
            <div className={`${styles.price} text text_type_main-default`}>
                <p className="pr-2 text text_type_digits-default">{item.price}</p> <CurrencyIcon type="primary"/>
            </div>
            <div className={`${styles.name} text text_type_main-default`}>{item.name}</div>
        </li>
    )
}

export default IngredientItem;