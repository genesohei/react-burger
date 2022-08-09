import React from "react";
import styles from "./ingredient-item.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientItem({ name, price, image }: any) {
    return (
        <li className={styles.item}>
            <div className={styles.image} style={{backgroundImage: `url(${image})`}}>
                <Counter count={1}/>
            </div>
            <div className={`${styles.price} text text_type_main-default`}>
                <p className="pr-2 text text_type_digits-default">{price}</p> <CurrencyIcon type="primary"/>
            </div>
            <div className={`${styles.name} text text_type_main-default`}>{name}</div>
        </li>
    )
}

export default IngredientItem;