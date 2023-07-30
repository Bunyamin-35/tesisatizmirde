import React from 'react'
import styles from "./about.module.scss"
import hero from "../../assets/hero.webp"

const About = () => {
  return (
    <section className={styles.about}>
      <article className={styles.about_text}>
        <h2>Biz <span>Kimiz?</span></h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae velit asperiores ducimus, fugit aliquam hic reiciendis accusamus nulla voluptates adipisci deleniti molestias impedit vel beatae. Voluptatem quae odit aliquam cum!</p>
        <button>Daha Fazlası...</button>
      </article>
      <article className={styles.about_image}>
        <img src={hero} alt="" />
      </article>
    </section>
  )
}

export default About;