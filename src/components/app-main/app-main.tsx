import React from "react";
import styles from "./app-main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { data } from "../../utils/data";
import { Ingredient } from "../../utils/interfaces";

function AppMain() {
    const bunIngredients: Array<Ingredient> = [];
    const mainIngredients: Array<Ingredient> = [];
    const sauceIngredients: Array<Ingredient> = [];
    const topItem = data[0];
    const bottomItem = data[0];
    const items = data.slice(1, data.length - 1);

    data.forEach(item => {
        if (item.type === 'bun') {
            bunIngredients.push(item);
        } else if (item.type === 'main') {
            mainIngredients.push(item);
        } else if (item.type === 'sauce') {
            sauceIngredients.push(item);
        }
    });

    return (
        <main className={styles.main}>
            <section className={styles.column}>
                <BurgerIngredients bun={bunIngredients} main={mainIngredients} sauce={sauceIngredients}/>
            </section>
            <section className={styles.column}>
                <BurgerConstructor topItem={topItem} bottomItem={bottomItem} items={items}/>
            </section>
        </main>
    )
}

export default AppMain;