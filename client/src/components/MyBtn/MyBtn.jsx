import styles from "./MyBtn.module.css"

const MyBtn = (props) => {
    return (
      <button className={styles.MyBtn}>
            {props.children}
      </button>
    );
  }
  
  export default MyBtn;