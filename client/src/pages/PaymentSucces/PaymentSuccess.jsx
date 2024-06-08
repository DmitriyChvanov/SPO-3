import { useEffect, useState } from "react";
import MyFooter from "../../components/MyFooter/MyFooter";
import MyHeader from "../../components/header/MyHeader";

import styles from "./PaymentSuccess.module.css"
import MyBtn from "../../components/MyBtn/MyBtn";
import { NavLink } from "react-router-dom";
import { ACCOUNT_ROUTE } from "../../utils/consts";

const PaymentSucces = () => {

    const [randomString, setRandomString] = useState('');

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

    return  (
        <div>
            <MyHeader/>
            <div className={styles.main_success}>
                <h1>Поздравляем с покупкой</h1>
                <h1>Ваш номер заказа: #{randomString} </h1>
                <p>Дорогой покупатель! <br />

Спасибо, что выбрали магазин Kosmetos для покупки нашей натуральной косметики. <br />

Мы искренне ценим ваше доверие и рады, что вы решили заботиться о своей коже с помощью наших продуктов. Ваша покупка не только поддерживает наше стремление к качеству и натуральности, но и помогает нам продолжать разрабатывать и предлагать лучшие средства для ухода за вашей кожей. <br />

Мы надеемся, что наша продукция принесет вам удовольствие и станет неотъемлемой частью вашей ежедневной рутины по уходу за собой. Если у вас возникнут вопросы или пожелания, не стесняйтесь обращаться к нам — мы всегда готовы помочь. <br />

Спасибо за ваш выбор и за то, что являетесь частью сообщества Kosmetos. <br />

С наилучшими пожеланиями,
Команда Kosmetos</p>

            <NavLink to={ACCOUNT_ROUTE}>
              <MyBtn>К заказам</MyBtn>
            </NavLink>

            </div>
            <MyFooter/>
        </div>
    )
}

export default PaymentSucces;