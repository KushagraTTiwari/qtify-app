import logo from "../assets/logo.png";
import search from "../assets/search-icon.png";
import styles from "./Navbar.module.css";
import FeedBackcompo from "./feebback.js"



const Navbar = () => {
  const data = "Give Feedback"
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search a album of your choice" />
        <button>
          <img src={search} alt="icon"/>
        </button>
      </div>
      <FeedBackcompo message={data}/>
    </div>
  );
};

export default Navbar;
