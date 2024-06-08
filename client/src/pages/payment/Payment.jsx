import { NavLink, useLocation } from "react-router-dom"
import BannerFifth from "../../components/BannerFifth/BannerFifth"
import MyFooter from "../../components/MyFooter/MyFooter"
import MyHeader from "../../components/header/MyHeader"
import styles from "./Payment.module.css"
import { useState } from "react"
import InputMask from 'react-input-mask'
import MyBtn from "../../components/MyBtn/MyBtn"
import { SUCCESS_ROUTE } from "../../utils/consts"

const Payment = () => {

    const location = useLocation();
    const { totalPrice } = location.state || { totalPrice: 0 };

    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        // Обработка оплаты
        console.log("Оплата произведена:", { phoneNumber, address, cardNumber, expiryDate, cvv });
    };


    return(
        <div>
            <MyHeader/>
            <div className={styles.paymentContainer}>
                <h1>Оплата</h1>
                <h2>Сумма к оплате: {totalPrice} ₽</h2>
                <form onSubmit={handlePayment}>
                    <label>Номер телефона:</label>
                    <InputMask 
                        mask="+7(999)-999-99-99" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required 
                    >
                        {(inputProps) => <input {...inputProps} type="tel" placeholder="+7(123)-456-78-90" />}
                    </InputMask>
                    <label>Адрес:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                    <label>Номер карты:</label>
                    <InputMask 
                        mask="9999 9999 9999 9999" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        required 
                    >
                        {(inputProps) => <input {...inputProps} type="text" placeholder="1234 5678 9123 4567" />}
                    </InputMask>
                    <label>Срок действия:</label>
                    <InputMask 
                        mask="99/99" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        required 
                    >
                        {(inputProps) => <input {...inputProps} type="text" placeholder="MM/YY" />}
                    </InputMask>
                    <label>CVV:</label>
                    <InputMask 
                        mask="999" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        required 
                    >
                        {(inputProps) => <input {...inputProps} type="text" placeholder="123" />}
                    </InputMask>
                    <NavLink to={SUCCESS_ROUTE}>
                        <MyBtn>Оплатить</MyBtn>
                    </NavLink>
                </form>
            </div>
            <BannerFifth/>
            <MyFooter/>
    </div>
    )
}

export default Payment