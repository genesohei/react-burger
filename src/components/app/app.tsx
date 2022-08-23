import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';
import {API_INGREDIENTS, INGREDIENT_TYPE} from '../../utils/constants.js';
import {ingredientData} from "../../utils/data";
import {Ingredient, IModalState, IConstructorState} from "../../utils/interfaces";
import {IngredientsContext} from "../../contexts/ingredientsContext";
import {ModalContext} from "../../contexts/modalContext";
import {ConstructorContext} from "../../contexts/constructorContext";

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
        getIngredientData().then((data) => {
            setConstructor({
                ...constructor,
                ingredients: data.filter((ingredient: Ingredient) => ingredient.type !== INGREDIENT_TYPE.BUN),
                bun: (data.find((ingredient: Ingredient) => ingredient.type === INGREDIENT_TYPE.BUN) as Ingredient)
            });
            setIngredients(data);
        });
    }, []);

    const getIngredientData = async () => {
        setState({...state, isLoading: true});
        try {
            const result = await fetch(API_INGREDIENTS);
            if (!result.ok) {
                return Promise.reject(`Ошибка ${result.status}`);
            }
            const data = await result.json();
            if (data.success && data.data && Array.isArray(data.data)) {
                setState({ isLoading: false });
                return Promise.resolve(data.data);
            } else {
                return Promise.reject('Отсутствуют данные');
            }
        } catch (err) {
            setState({ isLoading: false });
            setIngredients(ingredientData);
        }
    }

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