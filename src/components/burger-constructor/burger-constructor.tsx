import React, { useContext } from "react";
import styles from "./burger-constructor.module.css";
import scrollbar from "../../styles/scrollbar.module.css";
import OrderDetails from "../order-details/order-details";
import {IModalContext} from "../../utils/interfaces";
import {API_ORDERS} from "../../utils/constants";
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {ModalContext} from "../../contexts/modalContext";
import {ConstructorContext} from "../../contexts/constructorContext";

function BurgerConstructor() {
    const { showModal } = useContext(ModalContext) as IModalContext;
    const { constructor, setConstructor } = useContext(ConstructorContext);
    const { bun, ingredients } = constructor;

    const getTotalPrice = () => {
        if (!bun) return 0;
        return bun.price * 2 + ingredients.reduce((acc, i) => acc + i.price, 0);
    }

    const handleRemoveIngredientClick = (id: string) => {
        if (!id) return;
        setConstructor({
            ...constructor,
            ingredients: constructor.ingredients.filter(ingredient => ingredient._id !== id)
        });
    }

    const handleOrderClick = () => {
        makeAnOrder((orderNumber: number) => {
            setConstructor({
                ...constructor,
                orderNumber
            });
            showModal({
                component: <OrderDetails orderNumber={orderNumber}/>
            });
        })
    }

    const makeAnOrder = async (resolve: Function, reject?: Function) => {
        try {
            const options = { ingredients: constructor.ingredients.map(item => item._id) };
            const result = await fetch(API_ORDERS, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(options)
            });
            if (!result.ok) {
                return Promise.reject(`Ошибка ${result.status}`);
            }
            const data = await result.json();
            if (data.success && data.hasOwnProperty('order') && data.order.hasOwnProperty('number')) {
                resolve(data.order.number);
            } else {
                return Promise.reject(data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <ul className={`${styles.list} ml-4 mt-25 mb-10 pr-4`}>
                <li className='pl-8' key="bun-top">
                    {
                        bun &&
                        <ConstructorElement
                            type='top'
                            isLocked={true}
                            text={bun.name + ' (верх)'}
                            thumbnail={bun.image}
                            price={bun.price}
                        />
                    }
                </li>
                <ul className={`${styles.list} ${scrollbar.scrollbar} ${styles['draggable-list']} pr-2`} key="items">
                    {constructor.ingredients.map((item, index: number) => (
                        <li key={item._id + '_' + index}>
                            <span className={styles['draggable-icon']}>
                                <DragIcon type='primary'/>
                            </span>
                            <ConstructorElement
                                text={item.name}
                                thumbnail={item.image}
                                price={item.price}
                                handleClose={()=> handleRemoveIngredientClick(item._id)}
                            />
                        </li>
                    ))}
                </ul>
                <li className='pl-8' key="bun-bottom">
                    {
                        bun &&
                        <ConstructorElement
                            isLocked={true}
                            type='bottom'
                            text={bun.name + ' (низ)'}
                            thumbnail={bun.image}
                            price={bun.price}
                        />
                    }
                </li>
            </ul>
            <div className={`${styles.order} mr-4 mb-10`}>
                <p className="text text_type_digits-medium">
                    {getTotalPrice()}
                </p>
                <span className='ml-2 mr-10'>
                    <CurrencyIcon type="primary"/>
                </span>
                <Button type="primary" size="medium" onClick={handleOrderClick}>Оформить заказ</Button>
            </div>
        </>
    )
}

export default BurgerConstructor;