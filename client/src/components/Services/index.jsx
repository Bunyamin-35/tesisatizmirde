import styles from "./services.module.scss"
import hero3  from "../../assets/hero3.webp"
import bathroom  from "../../assets/bathroom.jpeg"
import render  from "../../assets/render.avif"
const Services = () => {
    return (
        <div className={styles.services}>
            <h2>Verilen <span>Hizmetler</span></h2>
            <div className={styles.card_container}>
                <div className={styles.card_item}>
                    <img src={hero3} alt="" />
                    <h3 className={styles.title}>Tesisat</h3>
                </div>
                <div className={styles.card_item}>
                    <img src={bathroom} alt="" />
                    <h3 className={styles.title}>Banyo Tadilatı</h3>
                </div>
                <div className={styles.card_item}>
                    <img src={render} alt="" />
                    <h3 className={styles.title}>3 Boyutlu Çizim</h3>
                </div>
            </div>
        </div>
    )
}

export default Services;