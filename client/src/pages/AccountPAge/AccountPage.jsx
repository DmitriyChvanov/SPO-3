import { useContext, useEffect, useState } from "react";
import BannerFifth from "../../components/BannerFifth/BannerFifth";
import MyFooter from "../../components/MyFooter/MyFooter";
import MyHeader from "../../components/header/MyHeader";
import styles from "./AccountPage.module.css"
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import axios from "axios";

const AccountPage = observer(({basketId}) => {

    const {user} = useContext(Context)


    const [randomString, setRandomString] = useState('');

    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        const fetchBasketItems = async () => {
            const result = await axios.get('http://localhost:5000/api/basket?basketId=1');
            setBasketItems(result.data);
        };

        fetchBasketItems()
    }, [basketId])


  useEffect(() => {
    const generateRandomString = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    };

    const randomStr = generateRandomString();
    setRandomString(randomStr);
  }, []); 
    

    return (
        <div>
            <MyHeader/>
            <div className={styles.main_account}>
                <h1>Здравствуй, {user.email}</h1>
                <h1>Заказы</h1>
                <div className={styles.order}>
                    <p>Ваш заказ: #{randomString}</p>
                    <div className={styles.order_cards}>
                        {basketItems.map(item => (
                            <div className={styles.card} style={{background: `url(http://localhost:5000/${item.item.img})`}}>
                                <p>{item.item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <BannerFifth/>
            <MyFooter/>
        </div>
    )

})

export default AccountPage;