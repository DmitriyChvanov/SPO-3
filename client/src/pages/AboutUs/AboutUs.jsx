import BannerFifth from "../../components/BannerFifth/BannerFifth"
import MyFooter from "../../components/MyFooter/MyFooter"
import MyMap from "../../components/MyMap/MyMap"
import MyHeader from "../../components/header/MyHeader"
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div>
            <MyHeader/>
            <div className={styles.about}>
                <h1>О нас</h1>
                <p><b>Kosmetos: Вдохновленная природой, созданная для вас.</b> <br />

                Погрузитесь в мир естественной красоты с Kosmetos - брендом, который объединяет силу природы и науки для создания уникальных решений для вашей красоты и здоровья кожи. Наши продукты - это не просто косметика, это забота о вашей коже на уровне ее здоровья.

                В каждом бьюти-решении Kosmetos вы найдете инновационные формулы, разработанные с использованием натуральных ингредиентов высочайшего качества, которые призваны привнести к вашей коже внутреннее сияние. Мы уделяем особое внимание экологически чистым и натуральным компонентам, чтобы ваша кожа получала только лучшее.

                Позвольте себе ощутить мощь природы с Kosmetos. Наша цель - подарить вашей коже здоровье и красоту, дарить уверенность и радость каждый день. Почувствуйте разницу с Kosmetos - вашим надежным компаньоном в уходе за кожей.</p>
            </div>
            <BannerFifth/>
            <MyMap/>
            <MyFooter/>
        </div>
    )
}

export default AboutUs