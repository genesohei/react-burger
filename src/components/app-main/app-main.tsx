import React from "react";
import styles from "./app-main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { Ingredient } from "../../utils/interfaces";

interface AppMainProps {
    ingredientData: Ingredient[]
    setModal: Function
}

function AppMain({ ingredientData, setModal }: AppMainProps) {
    const bunIngredients: Array<Ingredient> = [];
    const mainIngredients: Array<Ingredient> = [];
    const sauceIngredients: Array<Ingredient> = [];
    const topItem = ingredientData[0];
    const bottomItem = ingredientData[0];
    const items = ingredientData.slice(1, ingredientData.length - 1);

    ingredientData.forEach(item => {
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
                <BurgerIngredients bun={bunIngredients} main={mainIngredients} sauce={sauceIngredients} setModal={setModal}/>
            </section>
            <section className={styles.column}>
                <BurgerConstructor topItem={topItem} bottomItem={bottomItem} items={items} setModal={setModal}/>
            </section>
        </main>
    )
}

export default AppMain;