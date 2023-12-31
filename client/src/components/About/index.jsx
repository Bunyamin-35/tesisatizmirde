import React from 'react'
import styles from "./about.module.scss"
import hero from "../../assets/hero.webp"
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { ref: titleRef, inView: isTitleVisible } = useInView()
  const { ref: textRef, inView: isTextVisible } = useInView()
  const { ref: imgRef, inView: isImageVisible } = useInView()

  return (
    <section className={styles.about}>
      <article className={styles.about_text}>
        <h2 className={`${styles.title} ${styles.hidden} ${isTitleVisible && styles.visible}`} ref={titleRef}>Biz <span>Kimiz?</span></h2>
        <p ref={textRef} className={`${styles.text} ${styles.hidden} ${isTextVisible && styles.visible}`} >Sektörde geçen on yılı aşkın süre boyunca, binlerce başarılı projeye imza attık ve müşterilerimize en yüksek kalitede hizmet sunma konusundaki taahhüdümüzü sürdürdük. Alanında uzman ekip arkadaşlarımızla bir araya gelerek, her türlü sıhhi tesisat ihtiyacınızı karşılamak için donanımlıyız.</p>
      </article>
      <article className={styles.about_image}>
        <img className={`${styles.hidden_img} ${isImageVisible && styles.visible_img}`} src={hero} alt="" ref={imgRef} />
      </article>
    </section>
  )
}

export default About;