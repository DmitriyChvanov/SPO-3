import { observer } from "mobx-react-lite"
import styles from "./ItemList.module.css"
import { useContext } from "react"
import { Context } from "../.."
import Item from "../Item/Item"

const ItemList = observer(() => {
    
    const {item} = useContext(Context)

    return(
        <div className={styles.main_item_list}>
            {item.items.map(item => 
                <Item key={item.id} item={item}/>
            )}
        </div>
    )
}) 

export default ItemList