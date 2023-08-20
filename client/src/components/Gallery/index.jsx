import React from 'react'
import styles from "./gallery.module.scss"

import { Image } from 'antd';
import { galleryimage } from '../../constants/index.jsx'

const Gallery = () => {

    return (
        <section className={styles.gallery}>
            <h2>Yapılan <span>İşler</span></h2>
            <Image.PreviewGroup>
                <article className={styles.gallery_images}>
                    {galleryimage.map((img, key) => (
                        <div key={key} className={styles.gallery_image}>
                            <Image width={500} className={styles.img} src={img.src} />
                        </div>
                    ))}
                </article>
            </Image.PreviewGroup>
        </section>

    )
}

export default Gallery;