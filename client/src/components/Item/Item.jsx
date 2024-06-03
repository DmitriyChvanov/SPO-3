import { Link } from "react-router-dom"
import styles from "./Item.module.css"
import { ITEM_ROUTE } from "../../utils/consts"



const Item = ({item}) => {

    let bg = item.img
    

    return(
        <div className={styles.main_item} style={{background: `url(http://localhost:5000/${bg})`}}>
                <Link to={ITEM_ROUTE + '/' + item.id}>
                    <div className={styles.card_info}>
                        <div className={styles.txt}>{item.name}</div>
                        <div className={styles.price}>{item.price} ₽</div>
                    </div>
                </Link>
        </div>
    )
}

export default Item