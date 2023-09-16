import React from 'react'
import styles from "./hero.module.scss"
import hero2 from "../../assets/hero2.webp"

import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref: titleRef, inView: isTitleVisible } = useInView()

    return (
        <section className={styles.hero}>
            <article className={styles.hero_left}>
                <h1 className={`${styles.title} ${styles.hidden} ${isTitleVisible && styles.visible}`} ref={titleRef} >İŞİMİZİN <span>ARKASINDAYIZ</span></h1>
            </article>
            <article className={styles.hero_right}>
                <img src={hero2} alt="" />
            </article>
        </section>
    )
}

export default Hero;