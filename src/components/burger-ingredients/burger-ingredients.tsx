import React from "react";
import styles from "./burger-ingredients.module.css";
import scrollbar from "../../styles/scrollbar.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "../../utils/interfaces";
import IngredientList from "../ingredient-list/ingredient-list";
import IngredientDetails from "../ingredient-details/ingredient-details";

interface BurgerIngredientsProps {
    bun: Ingredient[]
    main: Ingredient[]
    sauce: Ingredient[]
    setModal: Function
}

function BurgerIngredients({ bun, main, sauce, setModal }: BurgerIngredientsProps) {
    const [current, setCurrent] = React.useState('Булки');

    const handleIngredientClick = (item: Ingredient) => {
        setModal({
            isVisible: true,
            title: 'Детали ингредиента',
            content: <IngredientDetails
                name={item.name}
                proteins={item.proteins}
                fat={item.fat}
                carbohydrates={item.carbohydrates}
                calories={item.calories}
                image={item.image}
            />
        })
    }

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
                <IngredientList title='Булки' list={bun} handleIngredientClick={handleIngredientClick}/>
                <IngredientList title='Соусы' list={main} handleIngredientClick={handleIngredientClick}/>
                <IngredientList title='Начинки' list={sauce} handleIngredientClick={handleIngredientClick}/>
            </section>
        </>
    )
}

export default BurgerIngredients;