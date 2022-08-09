import React from "react";
import styles from "./burger-ingredients.module.css";
import scrollbar from "../../styles/scrollbar.module.css";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientList from "../ingredient-list/ingredient-list";

// @ts-ignore
function BurgerIngredients({ bun, main, sauce }) {
    const [current, setCurrent] = React.useState('Булки');
    return (
        <>
            <h1 className={`${styles.title} text text_type_main-large mb-5`}>Соберите бургер</h1>
            <div className={`${styles.menu} text text_type_main-default mb-10`}>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <section className={`${styles.container} ${scrollbar.scrollbar}`}>
                <IngredientList title='Булки' list={bun}/>
                <IngredientList title='Соусы' list={main}/>
                <IngredientList title='Начинки' list={sauce}/>
            </section>
        </>
    )
}

export default BurgerIngredients;