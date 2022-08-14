import React from "react";
import styles from "./order-details.module.css";
import checkIcon from "../../images/check.svg"

function OrderDetails() {
    return (
        <div className={styles.order}>
            <h1 className={`${styles['order-title']} text text_type_digits-large mb-8`}>034536</h1>
            <p className={`${styles['order-text']} text text_type_main-medium`} > идентификатор заказа</p>
            <img src={checkIcon} alt='иконка' className={`${styles['order-image']} mt-15 mb-15`}/>
            <p className={`${styles['order-text']} text text_type_main-default mb-2`}> Ваш заказ начали готовить</p>
            <p className={`${styles['order-text']} text text_type_main-default text_color_inactive`}> Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

export default OrderDetails;