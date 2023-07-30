import React from 'react'
import styles from "./hero.module.scss"
import hero2 from "../../assets/hero2.webp"


const Hero = () => {
    return (
        <section className={styles.hero}>
            <article className={styles.hero_left}>
                <h2>İŞİMİZİN <span>ARKASINDAYIZ</span></h2>
            </article>
            <article className={styles.hero_right}>
                <img src={hero2} alt="" />
            </article>
        </section>
    )
}

export default Hero;