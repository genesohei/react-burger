import React, {useContext, useRef} from "react";
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

    const bunRef = useRef<HTMLDivElement>(null);
    const sauceRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    function handleTabClick(tab: string) {
        const scrollParams = { behavior: 'smooth', block: 'start' } as ScrollIntoViewOptions;
        setCurrent(tab);
        if (tab === INGREDIENT_TITLE.BUN && bunRef && bunRef.current) {
            bunRef.current.scrollIntoView(scrollParams);
        }
        if (tab === INGREDIENT_TITLE.SAUCE && sauceRef && sauceRef.current) {
            sauceRef.current.scrollIntoView(scrollParams);
        }
        if (tab === INGREDIENT_TITLE.MAIN && mainRef && mainRef.current) {
            mainRef.current.scrollIntoView(scrollParams);
        }
    }

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
                <Tab value={INGREDIENT_TITLE.BUN} active={current === INGREDIENT_TITLE.BUN} onClick={handleTabClick}>
                    Булки
                </Tab>
                <Tab value={INGREDIENT_TITLE.SAUCE} active={current === INGREDIENT_TITLE.SAUCE} onClick={handleTabClick}>
                    Соусы
                </Tab>
                <Tab value={INGREDIENT_TITLE.MAIN} active={current === INGREDIENT_TITLE.MAIN} onClick={handleTabClick}>
                    Начинки
                </Tab>
            </div>
            <section className={`${styles.container} ${scrollbar.scrollbar}`}>
                <IngredientList title={INGREDIENT_TITLE.BUN} ref={bunRef} list={bun} handleIngredientClick={handleIngredientClick}/>
                <IngredientList title={INGREDIENT_TITLE.SAUCE} ref={sauceRef} list={main} handleIngredientClick={handleIngredientClick}/>
                <IngredientList title={INGREDIENT_TITLE.MAIN} ref={mainRef} list={sauce} handleIngredientClick={handleIngredientClick}/>
            </section>
        </>
    )
}

export default BurgerIngredients;