import { NavLink } from "react-router-dom"
import MyBtn from "../MyBtn/MyBtn"
import Slider from "../Slider/Slider"
import styles from "./Bestellers.module.css"
import { SHOP_ROUTE } from "../../utils/consts"

const Bestellers = () => {
return(
    <div className={styles.main_Bestellers}>
        
        <div className={styles.txt_card}>
            <h2>Бестселлеры</h2>
            <p>Легендарные продукты, <br />завоевавшие любовь <br />наших клиентов</p>
            <NavLink to={SHOP_ROUTE}><MyBtn>Смотреть все</MyBtn></NavLink>
        </div>

        <Slider/>

        

    </div>
)
}

export default Bestellers