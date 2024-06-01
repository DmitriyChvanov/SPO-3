import styles from "./MyFooter.module.css"
import logo from "./../../assets/img/logo.svg"
import fb_logo from "./../../assets/img/fb_logo.svg"
import ig_logo from "./../../assets/img/ig_logo.svg"
import x_logo from "./../../assets/img/x_logo.svg"
import { NavLink } from "react-router-dom"
import { ABOUT_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "../../utils/consts"

const MyFooter = () => {
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_wo_copyright}>
                <div className={styles.nav}>
                    <NavLink to={MAIN_ROUTE}><img src={logo} alt="" /></NavLink>
                    <ul>
                        <li><NavLink to={SHOP_ROUTE}>Каталог</NavLink></li>
                        <li><NavLink to={ABOUT_ROUTE}>О нас</NavLink></li>
                        <li><NavLink to={ABOUT_ROUTE}>Магазины</NavLink></li>
                        <li><NavLink to={CONTACTS_ROUTE}>Контакты</NavLink></li>
                    </ul>
                </div>

                <div className={styles.socials}>
                    <img src={fb_logo} alt="" />
                    <img src={ig_logo} alt="" />
                    <img src={x_logo} alt="" />
                </div>
            </div>

            <hr />

            <div className={styles.copyright}>
                <p>Kosmetos © 2024 Все права защищены</p>
                <p>Политика конфиденциальности</p>
            </div>

        </div>
    )
}

export default MyFooter