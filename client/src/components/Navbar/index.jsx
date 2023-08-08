import { Link, NavLink } from "react-router-dom"
import styles from "./navbar.module.scss"
import {
    InstagramOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    UserOutlined,
    PhoneOutlined
} from "@ant-design/icons"

import logo from "../../assets/logo.png"

const Navbar = () => {

    return (
        <nav className={styles.navigation_bar}>
            <Link to={"/"} className={styles.logo}>
                <img src={logo} alt="" />
            </Link>
            <div className={styles.links}>
                <NavLink className={`${styles.link} ${styles.home}`} to={"/"}>
                    <span className={styles.link_text}>Anasayfa</span>
                    <HomeOutlined className={styles.link_icon} />
                </NavLink>
                <NavLink className={`${styles.link} ${styles.about}`} to={"/hakkimizda"}>
                    <span className={styles.link_text}>Hakkımızda</span>
                    <UserOutlined className={styles.link_icon} />
                </NavLink>
                <NavLink className={`${styles.link} ${styles.contact}`} to={"/iletisim"}>
                    <span className={styles.link_text}>İletişim</span>
                    <PhoneOutlined className={styles.link_icon} />
                </NavLink>
            </div>
            <div className={styles.social_media}>

                <Link to={"/"}><InstagramOutlined className={`${styles.icon} ${styles.instagram_icon}`} /></Link>
                <a className={`${styles.icon} ${styles.whatsapp_icon}`} href="https://wa.me/+905453992630" target="_blank" rel="noopener noreferrer"><WhatsAppOutlined /></a>
            </div>
        </nav>
    )
}

export default Navbar;

