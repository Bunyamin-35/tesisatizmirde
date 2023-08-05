import React from 'react'
import styles from "./gallery.module.scss"
import gallery1 from "../../assets/gallery1.webp"
import gallery2 from "../../assets/gallery2.webp"
import gallery3 from "../../assets/gallery3.webp"
import gallery4 from "../../assets/gallery4.webp"
import gallery5 from "../../assets/gallery5.webp"
import gallery6 from "../../assets/gallery6.webp"
import gallery7 from "../../assets/gallery7.webp"
import gallery8 from "../../assets/gallery8.webp"
import gallery9 from "../../assets/gallery9.webp"
import gallery10 from "../../assets/gallery10.webp"
import gallery11 from "../../assets/gallery11.webp"
import gallery12 from "../../assets/gallery12.webp"
import gallery13 from "../../assets/gallery13.webp"

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2>Yapılan <span>İşler</span></h2>
            <article className={styles.gallery_images}>
                <div className={styles.gallery_image}>
                    <img src={gallery1} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery2} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery3} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery4} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery5} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery6} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery7} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery8} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery9} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery10} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery11} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery12} alt="" />
                </div>
                <div className={styles.gallery_image}>
                    <img src={gallery13} alt="" />
                </div>
            </article>

        </section>
    )
}

export default Gallery;