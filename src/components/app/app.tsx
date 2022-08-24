import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import AppMain from "../app-main/app-main";
import Modal from "../modal/modal";
import {INGREDIENT_TYPE} from "../../utils/constants.js";
import {Ingredient, IModalState, IConstructorState} from "../../utils/interfaces";
import {IngredientsContext} from "../../contexts/ingredientsContext";
import {ModalContext} from "../../contexts/modalContext";
import {ConstructorContext} from "../../contexts/constructorContext";
import {Ingredients} from "../../utils/api";

interface MainState {
    isLoading: boolean
}

function App() {
    const [state, setState] = useState({
        isLoading: true
    } as MainState);

    const [modal, setModal] = React.useState<IModalState>({
        component: null,
        props: null,
    });

    const showModal = (modal: IModalState) => {
        setModal({component: modal.component, props: modal.props});
    };

    const hideModal = () => {
        setModal({...modal, component: null, props: null});
    };

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const [constructor, setConstructor] = React.useState<IConstructorState>({
        ingredients: [],
        bun: null,
        orderNumber: 0
    });

    useEffect(() => {
        setState({...state, isLoading: true});
        Ingredients.getIngredients().then((data) => {
            setIngredients(data.data);
            setConstructor({
                ...constructor,
                ingredients: data.data.filter((ingredient: Ingredient) => ingredient.type !== INGREDIENT_TYPE.BUN),
                bun: (data.data.find((ingredient: Ingredient) => ingredient.type === INGREDIENT_TYPE.BUN) as Ingredient)
            });
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setState({...state, isLoading: false});
        });
    }, []);

    return (
        <div className={styles.app}>
            <ModalContext.Provider value={{ modal, showModal, hideModal }}>
                <IngredientsContext.Provider value={{ ingredients }}>
                    <ConstructorContext.Provider value={{ constructor, setConstructor }}>
                        <AppHeader/>
                        {ingredients && ingredients.length && <AppMain/>}
                        {modal && modal.component && <Modal/>}
                    </ConstructorContext.Provider>
                </IngredientsContext.Provider>
            </ModalContext.Provider>
        </div>
    );
}

export default App;