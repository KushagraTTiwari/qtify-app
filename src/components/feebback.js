import styles from "./Navbar.module.css"
const FeedBackcompo = (props) => {
    return (
        <button className={styles.feedbtn}>{props.message}</button>        
    )
}

export default FeedBackcompo;