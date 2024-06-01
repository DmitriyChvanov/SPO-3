import styles from "./BannerFifth.module.css"
import banner from "../../assets/img/BannerFifth.png" 
import MyBtn from "../MyBtn/MyBtn"
import { NavLink } from "react-router-dom"
import { ABOUT_ROUTE } from "../../utils/consts"


const BannerFifth = () => {
    return(
        <div className={styles.BannerFifth_main}>
            <img src={banner} alt="" />
            <div className={styles.txt_card}>
                <h2>Присоединяйтесь к нам</h2>
                <p>Подпишитесь на наш аккаунт @kosmetos_official <br />и узнавайте о новиках и акциях первыми</p>
                <NavLink to={ABOUT_ROUTE}><MyBtn>Подписаться</MyBtn></NavLink>
            </div>
        </div>
    )
}

export default BannerFifth