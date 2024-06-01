import React from 'react'
import styles from "./MyHeader.module.css"
import logo from "./../../assets/img/logo.svg"
import account from "./../../assets/img/account.svg"
import basket from "./../../assets/img/basket.svg"
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'


const MyHeader = () => {
    return (
      <div className={styles.header_main}>
        <NavLink to={MAIN_ROUTE}><img src={logo} alt="" /></NavLink>
        <ul className={styles.nav}>
            <li><NavLink to={SHOP_ROUTE}>Каталог</NavLink></li>
            <li><NavLink to={ABOUT_ROUTE}>О наc</NavLink></li>
            <li><NavLink to={CONTACTS_ROUTE}>Контакты</NavLink></li>
            

            <li><NavLink to={LOGIN_ROUTE}><img src={account} alt="" /></NavLink></li>
            <li><NavLink to={BASKET_ROUTE}><img src={basket} alt="" /></NavLink></li>
        </ul>
      </div>
    );
  }
  
  export default MyHeader;
  