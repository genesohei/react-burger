import React from "react";
import styles from "./burger-constructor.module.css";
import scrollbar from "../../styles/scrollbar.module.css";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

// @ts-ignore
function BurgerConstructor(props) {
    return (
        <>
            <ul className={`${styles.list} ml-4 mt-25 mb-10 pr-4`}>
                <li className='pl-8' key="bun-top">
                    <ConstructorElement
                        type='top'
                        isLocked={true}
                        text={props.topItem.name + ' (верх)'}
                        thumbnail={props.topItem.image}
                        price={props.topItem.price}
                    />
                </li>
                <ul className={`${styles.list} ${scrollbar.scrollbar} ${styles['draggable-list']} pr-2`} key="items">
                    {props.items.map((item: any, index: number) => (
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
                        text={props.bottomItem.name + ' (низ)'}
                        thumbnail={props.bottomItem.image}
                        price={props.bottomItem.price}
                    />
                </li>
            </ul>
            <div className={`${styles.order} mr-4 mb-10`}>
                <p className="text text_type_digits-medium">
                    {props.topItem.price + props.items.reduce((acc: any, p: any) => acc + p.price, 0) + props.bottomItem.price}
                </p>
                <span className='ml-2 mr-10'>
                    <CurrencyIcon type="primary"/>
                </span>
                <Button type="primary" size="medium">Оформить заказ</Button>
            </div>
        </>
    )
}

export default BurgerConstructor;