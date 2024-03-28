import heroimage from "../assets/hero-img.png"
import styles from "../components/HeroSection.module.css"
const Hero = () => {
    return (
        <div className={styles.heroimg}>
            <div className={styles.text}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div className={styles.imgdiv}>
                <img src={heroimage} alt="heroimage"/>
            </div>
        </div>
    )
}

export default Hero;