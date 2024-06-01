import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./MyMap.module.css"
import x_logo from  "./../../assets/img/x_logo.svg"
import ig_logo from "./../../assets/img/ig_logo.svg"
import fb_logo from "./../../assets/img/fb_logo.svg"

const MyMap = () => {
    return (
        <div className={styles.map_main}>
            <div className={styles.map_container}>
                <div className={styles.txt_card}>
                    <h2>Контакты</h2>
                        <div className={styles.item}>
                            <h3>Адрес</h3>
                            <p>Москва, <br /> ул. Пушкина, 1337</p>
                        </div>
                        <div className={styles.item}>
                            <h3>Телефон</h3>
                            <a href='tel:+7 (999) 228-13-37'>+7 (999) 228-13-37</a>
                        </div>
                        <div className={styles.item}>
                            <h3>E-mail</h3>
                            <a href="mailto:info@kosmetos.com">info@kosmetos.com</a>
                        </div>
                        <div className={styles.socials}>
                            <img src={fb_logo} alt="" />
                            <img src={ig_logo} alt="" />
                            <img src={x_logo} alt="" />
                        </div>
                </div>
            
                <YMaps>
                    <div className={styles.map}>
                    
                    <Map defaultState={{ 
                        center: [55.76, 37.63],
                        zoom: 10 
                        }}
                        width={"670px"}
                        height={"400px"}>

                    <Placemark geometry={[55.764041, 37.639305]} />

                    </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    )
}

export default MyMap