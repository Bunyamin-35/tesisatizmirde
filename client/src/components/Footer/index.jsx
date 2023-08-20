import styles from "./footer.module.scss"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

import {
    InstagramOutlined,
    WhatsAppOutlined,
    HomeFilled,
    UserOutlined,
    PhoneFilled,
    MailFilled

} from "@ant-design/icons"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_body}>
                <div className={styles.grid_container}>
                    <div className={styles.grid_item_1}>
                        <div className={styles.logo}>
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.grid_item_2}>
                        <h6>
                            Services
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
                                Ana Sayfa
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Hakkımızda
                            </a>
                        </p>
                        <p>
                            <a href="#!">
                                Hizmetlerimiz
                            </a>
                        </p>
                        <p>
                            <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                                İletişim
                            </a>
                        </p>
                    </div>
                    <div className={styles.grid_item_4}>
                        <h6>
                            Contact
                        </h6>
                        <p>
                            <a href="">
                                <HomeFilled />
                                <span>Karabağlar/İZMİR</span>
                            </a>
                        </p>
                        <p>
                            <a href="mailto:tesisatizmirde@gmail.com">
                                <MailFilled />
                                <span>tesisatizmirde@gmail.com</span>
                            </a>
                        </p>
                        <p>
                            <a href="tel:+905453992630">
                                <PhoneFilled />
                                <span>+90 545 399 26 30</span>
                            </a>
                        </p>
                        <p>
                            <a href="tel:+905414164436">
                                <PhoneFilled />
                                <span>+90 541 416 44 36</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyrights}>
                <span>{currentYear} © <a className={styles.copyrights} href="https://www.linkedin.com/in/bulutbunyamin/">Bünyamin BULUT</a>- Tüm Hakları Saklıdır.</span>
            </div>
        </footer>
    )
}
export default Footer;
