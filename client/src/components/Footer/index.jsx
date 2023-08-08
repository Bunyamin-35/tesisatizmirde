


import styles from "./footer.module.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

import {
    InstagramOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    UserOutlined,
    PhoneOutlined,
    MailOutlined

} from "@ant-design/icons"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_body}>
                <div className={styles.grid_container}>
                    <div className={styles.grid_item_1}>
                        <h6>
                            <img src={logo} alt="" />
                        </h6>
                        <p>
                            Müşteri memnuniyeti önceliğimiz.
                        </p>
                    </div>
                    <div className={styles.grid_item_2}>
                        <h6>
                            Hizmetler
                        </h6>
                        <p>
                            <a href="#!">
                                Su Tesisatı
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Kalorifer Tesisatı
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Yerden Isıtma
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Banyo Tadilatı
                            </a>
                        </p>
                    </div>
                    <div className={styles.grid_item_3}>
                        <h6>
                            Useful links
                        </h6>
                        <p>
                            <a href="#!">
                                Pricing
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Settings
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Orders
                            </a>
                        </p>
                        <p>
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                                Help
                            </a>
                        </p>
                    </div>
                    <div className={styles.grid_item_4}>
                        <h6>
                            Contact
                        </h6>
                        <p>
                            <a href="">
                                <HomeOutlined />
                                Karabağlar/İZMİR
                            </a>
                        </p>
                        <p>
                            <a href="mailto:tesisatizmirde@gmail.com">
                                <MailOutlined /> 
                                tesisatizmirde@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+905453992630">
                                <PhoneOutlined />
                                +90 545 399 26 30
                            </a>
                        </p>
                        <p>
                            <a href="tel:+905414164436">
                                <PhoneOutlined />
                                +90 541 416 44 36
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyrights}>
                <span>© 2023 Copyright:All rights reserved</span>
            </div>
        </footer>
    )
}
export default Footer;

// const Footer = () => {
//     return (
//         <section className={styles.footer}>
//             <article className={styles.footer_up}>
//                 <Link to={"/"} className={styles.logo}>
//                     <img src={logo} alt="" />
//                 </Link>
//                 <div className={styles.service_list}>
//                     <div className={styles.service_item}>Kalorifer Tesisatı</div>
//                     <div className={styles.service_item}>Tadilat</div>
//                     <div className={styles.service_item}>Yerden Isıtma</div>
//                     <div className={styles.service_item}>Gömme Rezervuar</div>
//                     <div className={styles.service_item}>Banyo Tadilatı</div>
//                     <div className={styles.service_item}>Mutfak Tadilatı</div>
//                     <div className={styles.service_item}>3D/3 Boyutlu Mimari Çizim</div>
//                     <div className={styles.service_item}>Su Sayaç Kollektör Yenileme/Dizayn</div>
//                     <div className={styles.service_item}>Çoklu Sayaç Dönüşümü</div>
//                 </div>
//             </article>
//             <article className={styles.footer_down}>
//                 <div className={styles.social_media}>
//                     <Link to={"/"}><InstagramOutlined className={`${styles.icon} ${styles.instagram_icon}`} /></Link>
//                     <Link to={"/"}><WhatsAppOutlined className={`${styles.icon} ${styles.whatsapp_icon}`} /></Link>
//                     <Link to={"/"}><WhatsAppOutlined className={`${styles.icon} ${styles.whatsapp_icon}`} /></Link>
//                 </div>
//                 <div className={styles.links}>
//                     <Link className={`${styles.link} ${styles.home}`} to={"/"}>
//                         <span className={styles.link_text}>Anasayfa</span>
//                         <HomeOutlined className={styles.link_icon} />
//                     </Link>
//                     <Link className={`${styles.link} ${styles.about}`} to={"/hakkimizda"}>
//                         <span className={styles.link_text}>Hakkımızda</span>
//                         <UserOutlined className={styles.link_icon} />
//                     </Link>
//                     <Link className={`${styles.link} ${styles.contact}`} to={"/iletisim"}>
//                         <span className={styles.link_text}>İletişim</span>
//                         <PhoneOutlined className={styles.link_icon} />
//                     </Link>
//                 </div>
//                 <div className={styles.developer}>
//                     @2023.All rights reserved.
//                 </div>
//             </article>
//         </section>
//     )
// }

