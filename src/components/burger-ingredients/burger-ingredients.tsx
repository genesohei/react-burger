import React, {useContext} from "react";
import styles from "./burger-ingredients.module.css";
import scrollbar from "../../styles/scrollbar.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {IModalContext, Ingredient} from "../../utils/interfaces";
import {INGREDIENT_TITLE} from "../../utils/constants";
import IngredientList from "../ingredient-list/ingredient-list";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {ModalContext} from "../../contexts/modalContext";
import {IngredientsContext} from "../../contexts/ingredientsContext";
import {ingredientReducer} from "../../utils/helpers";

function BurgerIngredients() {
    const [current, setCurrent] = React.useState(INGREDIENT_TITLE.BUN);
    const { showModal } = useContext(ModalContext) as IModalContext;
    const { ingredients } = useContext(IngredientsContext);
    const { bun, sauce, main } = ingredientReducer(ingredients);

    const handleIngredientClick = (item: Ingredient) => {
        showModal({
            component: <IngredientDetails item={item}/>,
            props: {
                title: 'Детали ингредиента'
            }
        });
    }

    return (
        <>
            <h1 className={`${styles.title} text text_type_main-large mb-5`}>Соберите бургер</h1>
            <div className={`${styles.menu} text text_type_main-default mb-10`}>
                <Tab value={INGREDIENT_TITLE.BUN} active={current === INGREDIENT_TITLE.BUN} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value={INGREDIENT_TITLE.SAUCE} active={current === INGREDIENT_TITLE.SAUCE} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value={INGREDIENT_TITLE.MAIN} active={current === INGREDIENT_TITLE.MAIN} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <section className={`${styles.container} ${scrollbar.scrollbar}`}>
                <IngredientList title={INGREDIENT_TITLE.BUN} list={bun} handleIngredientClick={handleIngredientClick}/>
                <IngredientList title={INGREDIENT_TITLE.SAUCE} list={main} handleIngredientClick={handleIngredientClick}/>
                <IngredientList title={INGREDIENT_TITLE.MAIN} list={sauce} handleIngredientClick={handleIngredientClick}/>
            </section>
        </>
    )
}

export default BurgerIngredients;