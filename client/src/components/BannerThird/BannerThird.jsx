import styles from "./BannerThird.module.css"

const BannerThird = () => {
    return(
        <div className={styles.BannerThird_main}>
            <div className={styles.card}>
                <div className={styles.card_txt}>
                <p>
                Не всегда очевидно, какие элементы <br />и минералы необходимы коже,   <br />      а многочисленные эксперименты  <br />  
                с разными средствами только <br /> ухудшают ее качество. <br /> <br />
                Заполните анкету, и мы подберем <br /> уход, подходящий именно вам, <br /> учитывая ваш образ жизни, место <br />жительства и другие факторы. 
                </p>
                </div>
            </div>
        </div>
    )
}

export default BannerThird