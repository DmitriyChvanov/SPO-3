import { NavLink } from "react-router-dom"
import MyBtn from "../MyBtn/MyBtn"

import styles from "./BannerSecond.module.css"
import {SHOP_ROUTE } from "../../utils/consts"

const BannerSecond = () => {
    return(
        <div className={styles.BannerSecond_main}>
            <div className={styles.card_txt}>
                <h2>Встречайте лето <br />вместе с нами</h2>
                <p>Попробуйте новую коллекцию <br />ухаживающих средств для лица <br />с SPF защитой</p>
                <NavLink to={SHOP_ROUTE}><MyBtn>Подробнее</MyBtn></NavLink>
            </div>


        </div>
    )
}

export default BannerSecond

