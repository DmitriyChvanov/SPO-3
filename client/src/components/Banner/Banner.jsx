import MyHeader from "..//header/MyHeader";
import styles from "./Banner.module.css"
import face_care from "./../../assets/img/face_care.png"
import body_care from "./../../assets/img/body_care.png"
import big_logo from "./../../assets/img/big_logo.svg"
import arrow from "./../../assets/img/arrow.svg"
import MyBtn from "../../components/MyBtn/MyBtn";
import { NavLink } from "react-router-dom";
import { ABOUT_ROUTE } from "../../utils/consts";


const Banner = () => {
  return (
    <div className={styles.main_main_page}>
      <MyHeader/>
        <div className={styles.content}>
            
            <div className={styles.card}>
                <img src={face_care} alt="" />
                <div className={styles.card_txt}>
                  <p>Уход для лица</p>
                  <img src={arrow} alt="" />
                </div>


            </div>
            <div className={styles.txt_block}>
                <img src={big_logo} alt="" />
                <p>Натуральная косметика <br />для бережного ухода за кожей</p>
                <NavLink to={ABOUT_ROUTE}><MyBtn>Подробнее</MyBtn></NavLink>
            </div>
            <div className={styles.card}>
                <img src={body_care} alt="" />
                <div className={styles.card_txt}>
                  <p>Уход для тела</p>
                  <img src={arrow} alt="ч" />
                </div>
            </div>

        </div>
    </div>
  );
}

export default Banner;
