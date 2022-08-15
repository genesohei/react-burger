import React from "react";
import styles from "./ingredient-details.module.css";
import { Ingredient } from "../../utils/interfaces";

interface IngredientDetailsProps {
    item: Ingredient
}

function IngredientDetails({ item }: IngredientDetailsProps) {
    const {name, proteins, fat, carbohydrates, calories, image} = item;
    return (
        <div className={styles.content}>
            <div className={`${styles['content-product']} pr-15 pl-15`}>
                <img src={image} alt='иконка' className={styles['content-image']}/>
                <div className={`${styles['content-text']} text text_type_main-medium`}>{name}</div>
                <ul className={styles['product-list']}>
                    <li className={`${styles['product-item']} text text_type_main-default text_color_inactive`}>
                        <div className={`${styles['product-text']}`}>Калории, ккал</div>
                        <span className={'text_type_digits-default'}>{calories}</span>
                    </li>
                    <li className={`${styles['product-item']} text text_type_main-default text_color_inactive`}>
                        <div className={`${styles['product-text']}`}>Белки, г</div>
                        <span className={'text_type_digits-default'}>{proteins}</span>
                    </li>
                    <li className={`${styles['product-item']} text text_type_main-default text_color_inactive`}>
                        <div className={`${styles['product-text']}`}>Жиры, г</div>
                        <span className={'text_type_digits-default'}>{fat}</span>
                    </li>
                    <li className={`${styles['product-item']} text text_type_main-default text_color_inactive`}>
                        <div className={`${styles['product-text']}`}>Углеводы, г</div>
                        <span className={'text_type_digits-default'}>{carbohydrates}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default IngredientDetails;