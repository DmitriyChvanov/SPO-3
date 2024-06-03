import { useEffect, useState } from "react"
import BannerFifth from "../../components/BannerFifth/BannerFifth"
import MyFooter from "../../components/MyFooter/MyFooter"
import MyMap from "../../components/MyMap/MyMap"
import MyHeader from "../../components/header/MyHeader"
import styles from "./ItemPage.module.css"
import { useParams } from "react-router-dom"
import { fetchOneItem } from "../../http/itemAPI"
import MyBtn from "../../components/MyBtn/MyBtn"
import axios from "axios"

const ItemPage = ({basketId}) => {

    const [item, setItem] = useState({info: []})
    const {id} = useParams()
    useEffect(()=> {
            fetchOneItem(id).then(data => setItem(data))
    }, [])

    const addToBasket = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/basket?basketId=1', {
                basketId: 1,
                itemId: item.id,
                quantity: 1,
            });
            console.log('added', response.data)
        } catch (err) {
            console.error("adding err", err)
        }
    };



    return(
        <div className={styles.hasan}>
            <MyHeader/>
            <hr noshade/>

                <div className={styles.main_itempage}>
                    <img src={'http://localhost:5000/' + item.img} alt="idi naxuy" />
                    <div className={styles.txt_area}>
                        <h1>{item.name}</h1>
                        {item.info.map(info => 
                            <p key={info.id}>
                                {info.description}
                            </p>    
                        )}
                        <div className={styles.price}>
                            <h2>{item.price}  ₽</h2>
                            <div onClick={addToBasket}>
                            <MyBtn onClick={addToBasket}>Добавить в корзину</MyBtn>
                            </div>
                        </div>
                        

                    </div>
                </div>
        
            <BannerFifth/>
            <MyMap/>
            <MyFooter/>
        </div>
    )
}

export default ItemPage