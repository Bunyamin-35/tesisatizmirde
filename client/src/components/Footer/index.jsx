import styles from "./footer.module.scss"
import { Link } from "react-router-dom";

import {
    InstagramOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    UserOutlined,
    PhoneOutlined
} from "@ant-design/icons"

const Footer = () => {
    return (
        <section className={styles.footer}>
            <article className={styles.footer_up}>
                <Link to={"/"} className={styles.logo}>tesisatizmirde</Link>
                <div className={styles.service_list}>
                    <div className={styles.service_item}>Su Tesisatı</div>
                    <div className={styles.service_item}>Kalorifer Tesisatı</div>
                    <div className={styles.service_item}>Tadilat</div>
                    <div className={styles.service_item}>Yerden Isıtma</div>
                    <div className={styles.service_item}>Gömme Rezervuar</div>
                    <div className={styles.service_item}>Banyo Tadilatı</div>
                    <div className={styles.service_item}>Mutfak Tadilatı</div>
                    <div className={styles.service_item}>3D/3 Boyutlu Mimari Çizim</div>
                    <div className={styles.service_item}>Su Sayaç Kollektör Yenileme/Dizayn</div>
                    <div className={styles.service_item}>Çoklu Sayaç Dönüşümü</div>
                </div>
            </article>
            <article className={styles.footer_down}>
                <div className={styles.social_media}>
                    <Link to={"/"}><InstagramOutlined className={`${styles.icon} ${styles.instagram_icon}`} /></Link>
                    <Link to={"/"}><WhatsAppOutlined className={`${styles.icon} ${styles.whatsapp_icon}`} /></Link>
                    <Link to={"/"}><WhatsAppOutlined className={`${styles.icon} ${styles.whatsapp_icon}`} /></Link>
                </div>
                <div className={styles.links}>
                    <Link className={`${styles.link} ${styles.home}`} to={"/"}>
                        <span className={styles.link_text}>Anasayfa</span>
                        <HomeOutlined className={styles.link_icon} />
                    </Link>
                    <Link className={`${styles.link} ${styles.about}`} to={"/hakkimizda"}>
                        <span className={styles.link_text}>Hakkımızda</span>
                        <UserOutlined className={styles.link_icon} />
                    </Link>
                    <Link className={`${styles.link} ${styles.contact}`} to={"/iletisim"}>
                        <span className={styles.link_text}>İletişim</span>
                        <PhoneOutlined className={styles.link_icon} />
                    </Link>
                </div>
                <div className={styles.developer}>
                    @2023.All rights reserved.
                </div>
            </article>
        </section>
    )
}

export default Footer;