import BannerFifth from "../../components/BannerFifth/BannerFifth"
import ItemList from "../../components/ItemList/ItemList"
import MyBtn from "../../components/MyBtn/MyBtn"
import MyFooter from "../../components/MyFooter/MyFooter"
import MyMap from "../../components/MyMap/MyMap"
import MyHeader from "../../components/header/MyHeader"
import styles from "./Shop.module.css"

const Shop = () => {
    return(
        <div>
            <MyHeader/>
            <div className={styles.main_shop}>
                <div className={styles.shop_head}>
                    <h1>Каталог</h1>
                    <MyBtn>Фильтр</MyBtn>
                </div>
                {/* <div className={styles.kostyl}>
                    <ul className={styles.filter_menu}>
                        <li className={styles.filter_item}>
                            Уход для лица
                            <ul>
                                <label className={styles.container}>
                                    <input type="radio" name="creme"/><p>Крема</p>
                                    <span className={styles.checkmark}></span>
                                </label> 
                                <label className={styles.container}>
                                    <input type="radio" name="mask"/><p>Маски</p>
                                    <span className={styles.checkmark}></span>
                                </label> 
                                <label className={styles.container}>
                                    <input type="radio" name="patch"/><p>Патчи</p>
                                    <span className={styles.checkmark}></span>
                                </label> 

                            </ul>
                            
                        </li>
                        <li className={styles.filter_item}>
                            Уход для тела
                            <ul>
                                <label className={styles.container}>
                                    <input type="radio" name="cr1212eme"/><p>Скрабы</p>
                                    <span className={styles.checkmark}></span>
                                </label> 
                                <label className={styles.container}>
                                    <input type="radio" name="1212"/><p>Гели</p>
                                    <span className={styles.checkmark}></span>
                                </label> 
                                <label className={styles.container}>
                                    <input type="radio" name="12"/><p>Маски</p>
                                    <span className={styles.checkmark}></span>
                                </label> 

                            </ul>
                            
                        </li>
                    </ul>

                    <div className={styles.btns}>
                        <MyBtn>Применить</MyBtn>
                        <MyBtn>Сбросить</MyBtn>
                    </div>

                </div> */}
            </div>

            <ItemList/>
            <BannerFifth/>
            <MyMap/>
            <MyFooter/>
        </div>
    )
}

export default Shop