import { NavLink } from "react-router-dom"
import MyBtn from "../MyBtn/MyBtn"
import styles from "./BannerFourth.module.css"
import { ABOUT_ROUTE } from "../../utils/consts"

const BannerFourth = () => {
    return(
        <div className={styles.BannerFourth_main}>
            <div className={styles.card}>
                <div className={styles.card_txt}>
                    <h2>“Мы стремимся сделать уход за кожей доступным <br />
                    и приятным ритуалом для всех, кто хочет<br />
                    заботиться о себе и своем теле”  
                    </h2>
                    <NavLink to={ABOUT_ROUTE}><MyBtn>Наша история</MyBtn></NavLink>
                </div>
            </div>
        </div>
    )
}

export default BannerFourth