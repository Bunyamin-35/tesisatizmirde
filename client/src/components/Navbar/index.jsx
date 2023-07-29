import { Link, NavLink } from "react-router-dom"
import styles from "./navbar.module.scss"
import {
    InstagramOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    UserOutlined,
    PhoneOutlined
} from "@ant-design/icons"

const Navbar = () => {

    return (
        <nav className={styles.navigation_bar}>
            <Link to={"/"} className={styles.logo}>tesisatizmirde</Link>
            <div className={styles.links}>
                <NavLink className={`${styles.link} ${styles.home}`} to={"/"}>
                    {window.innerWidth > 768 ? "Anasayfa" : <HomeOutlined />}
                </NavLink>
                <NavLink className={`${styles.link} ${styles.about}`} to={"/hakkimizda"}>
                    {window.innerWidth > 768 ? "Hakkımızda" : <UserOutlined />}
                </NavLink>
                <NavLink className={`${styles.link} ${styles.contact}`} to={"/iletisim"}>
                    {window.innerWidth > 768 ? "İletişim" : <PhoneOutlined />}
                </NavLink>
            </div>
            <div className={styles.social_media}>
                <Link to={"/"}><InstagramOutlined className={`${styles.icon} ${styles.instagram_icon}`} /></Link>
                <Link to={"/"}><WhatsAppOutlined className={`${styles.icon} ${styles.whatsapp_icon}`} /></Link>
            </div>
        </nav>
    )
}

export default Navbar;

