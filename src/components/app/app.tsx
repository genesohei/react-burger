import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';
import { API_INGREDIENTS } from '../../utils/constants.js';
import { ingredientData } from "../../utils/data";
import { Ingredient } from "../../utils/interfaces";

interface MainState {
    ingredientData: Ingredient[]
    isLoading: boolean
}

interface ModalState {
    isVisible: boolean
    title: string
    content: React.ReactNode
}

function App() {
    const [state, setState] = useState({
        ingredientData: [],
        isLoading: true
    } as MainState);

    const [modal, setModal] = useState({
        isVisible: false,
        title: '',
        content: null
    } as ModalState);

    useEffect(() => {
        getIngredientData();
    }, [])

    const getIngredientData = async () => {
        setState({...state, isLoading: true});
        try {
            const result = await fetch(API_INGREDIENTS);
            if (!result.ok) {
                return Promise.reject(`Ошибка ${result.status}`);
            }
            const data = await result.json();
            if (data.success && data.data && Array.isArray(data.data)) {
                setState({ ingredientData: data.data, isLoading: false });
            } else {
                return Promise.reject('Отсутствуют данные');
            }
        } catch (err) {
            setState({ ingredientData, isLoading: false });
        }
    }

    return (
        <div className={styles.app}>
            <AppHeader/>
            <AppMain ingredientData={ingredientData} setModal={setModal}/>
            {modal.isVisible && <Modal title={modal.title} setModal={setModal}>{modal.content}</Modal>}
        </div>
    );
}

export default App;