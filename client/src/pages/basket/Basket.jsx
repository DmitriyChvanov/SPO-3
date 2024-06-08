import MyFooter from "../../components/MyFooter/MyFooter"
import MyMap from "../../components/MyMap/MyMap"
import MyHeader from "../../components/header/MyHeader"
import styles from "./Basket.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import MyBtn from "../../components/MyBtn/MyBtn"
import { observer } from "mobx-react-lite"

const Basket = observer(({basketId}) => {


    const navigate = useNavigate();

    const [basketItems, setBasketItems] = useState([]);

    const removeFromBasket = async (basketItemId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/basket/${basketItemId}`);
            return response.data;
        } catch (error) {
            console.error('Error removing item from basket:', error);
            throw error;
        }
    };

    const handleRemove = async (basketItemId) => {
        try {
            await removeFromBasket(basketItemId);
            setBasketItems(basketItems.filter(item => item.id !== basketItemId));
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    useEffect(() => {
        const fetchBasketItems = async () => {
            const result = await axios.get('http://localhost:5000/api/basket?basketId=1');
            setBasketItems(result.data);
        };

        fetchBasketItems()
    }, [basketId])

    let totalPrice = 0
    basketItems.map(item => (totalPrice += parseInt(item.item.price)))

    console.log(totalPrice)
    

    

    return(
        <div>
            <MyHeader/>
            <ul className={styles.main_basket}>
                {basketItems.map(item => (
                    <li key={item.item.id}className={styles.basket_card}>
                        <img src={'http://localhost:5000/' + item.item.img} alt="" />
                        <div className={styles.card_txt}>
                            <h1>{item.item.name}</h1>
                            <p>
                                Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей. <br />
                                Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток. 
                            </p>
                            <div className={styles.basket_price}>
                                <h2>{item.item.price} ₽</h2>
                                <div onClick={() => handleRemove(item.id)}>
                                    <MyBtn>Удалить</MyBtn>
                                </div>
                            </div> 
                        </div>
                    </li>
                ))}

                <div className={styles.purchase}>
                    <h1>{totalPrice} ₽</h1>
                    <div onClick={() => navigate('/payment', {state: {totalPrice} })}>
                        <MyBtn>Перейти к оплате</MyBtn>
                    </div>
                </div>
            </ul>
            <MyMap/>
            <MyFooter/>
        </div>
    )
})

export default Basket