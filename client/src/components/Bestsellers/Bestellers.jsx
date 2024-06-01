import MyBtn from "../MyBtn/MyBtn"
import Slider from "../Slider/Slider"
import styles from "./Bestellers.module.css"

const Bestellers = () => {
return(
    <div className={styles.main_Bestellers}>
        
        <div className={styles.txt_card}>
            <h2>Бестселлеры</h2>
            <p>Легендарные продукты, <br />завоевавшие любовь <br />наших клиентов</p>
            <MyBtn>Смотреть все</MyBtn>
        </div>

        <Slider/>

        

    </div>
)
}

export default Bestellers