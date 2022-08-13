import React from "react";
import styles from "./app-header.module.css";
import {
    Logo, BurgerIcon, ListIcon, ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.group}>
                    <div className={`${styles['group-item']} mr-2`}>
                        <BurgerIcon type={"primary"}/>
                        <span className="text text_type_main-default">Конструктор</span>
                    </div>
                    <div className={styles['group-item']}>
                        <ListIcon type={"secondary"}/>
                        <span className="text text_type_main-default">Лента заказов</span>
                    </div>
                </div>
                <div className={`${styles.group} ${styles.logo}`}>
                    <Logo/>
                </div>
                <div className={styles.group}>
                    <div className={styles['group-item']}>
                        <ProfileIcon type={"secondary"} />
                        <span className="text text_type_main-default">Личный кабинет</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;