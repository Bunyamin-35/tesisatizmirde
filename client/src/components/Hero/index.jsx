import React from 'react'
import styles from "./hero.module.scss"


const Hero = () => {
    return (
        <section className={styles.hero}>
            <article className={styles.hero_left}>
                <h2>İŞİMİZİN <span>ARKASINDAYIZ</span></h2>
                {/* <ul>
                    <li>Alanında Uzman Personel</li>
                    <li>Kaliteli Malzeme</li>
                    <li>Teknik Destek</li>
                </ul> */}
            </article>
            <article className={styles.hero_right}>
                <div className={styles.hero_image}></div>
            </article>
        </section>
    )
}

export default Hero;