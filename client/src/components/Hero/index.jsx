import React from 'react'
import styles from "./hero.module.scss"


const Hero = () => {
    return (
        <section className={styles.hero}>
            <article className={styles.hero_left}>
                <h2>İŞİMİZİN <span>ARKASINDAYIZ</span></h2>
            </article>
            <article className={styles.hero_right}>
                <div className={styles.hero_image}></div>
            </article>
        </section>
    )
}

export default Hero;