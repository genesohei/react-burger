import React from "react";
import styles from "./burger-constructor.module.css";
import scrollbar from "../../styles/scrollbar.module.css";
import { Ingredient } from "../../utils/interfaces";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details/order-details";

interface BurgerConstructorProps {
    topItem: Ingredient
    bottomItem: Ingredient
    items: Ingredient[]
    setModal: Function
}

function BurgerConstructor({ topItem, bottomItem, items, setModal }: BurgerConstructorProps) {
    const handleOrderClick = () => {
        setModal({
            isVisible: true,
            content: <OrderDetails/>
        })
    }

    return (
        <>
            <ul className={`${styles.list} ml-4 mt-25 mb-10 pr-4`}>
                <li className='pl-8' key="bun-top">
                    <ConstructorElement
                        type='top'
                        isLocked={true}
                        text={topItem.name + ' (верх)'}
                        thumbnail={topItem.image}
                        price={topItem.price}
                    />
                </li>
                <ul className={`${styles.list} ${scrollbar.scrollbar} ${styles['draggable-list']} pr-2`} key="items">
                    {items.map((item, index: number) => (
                        <li key={item._id + '_' + index}>
                            <span className={styles['draggable-icon']}>
                                <DragIcon type='primary'/>
                            </span>
                            <ConstructorElement
                                text={item.name}
                                thumbnail={item.image}
                                price={item.price}
                            />
                        </li>
                    ))}
                </ul>
                <li className='pl-8' key="bun-bottom">
                    <ConstructorElement
                        isLocked={true}
                        type='bottom'
                        text={bottomItem.name + ' (низ)'}
                        thumbnail={bottomItem.image}
                        price={bottomItem.price}
                    />
                </li>
            </ul>
            <div className={`${styles.order} mr-4 mb-10`}>
                <p className="text text_type_digits-medium">
                    {topItem.price + items.reduce((acc, p) => acc + p.price, 0) + bottomItem.price}
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