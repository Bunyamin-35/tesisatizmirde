import { Link, NavLink } from "react-router-dom"
import styles from "./navbar.module.scss"
import {
    InstagramOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    UserOutlined,
    PhoneOutlined
} from "@ant-design/icons"

import { FaTools } from 'react-icons/fa';


import logo from "../../assets/logo.png"
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from "react";

const Navbar = () => {
    const { ref: titleRef, inView: isTitleVisible } = useInView()

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const scrollThreshold = 80; // Adjust this threshold as needed

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            setIsNavbarFixed(true);
        } else {
            setIsNavbarFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navigation_bar}  ${isNavbarFixed && styles.navbar_fixed}`}>
            <Link to={"/"} className={`${isNavbarFixed ? styles.logo_fixed :styles.logo}`}>
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
                <NavLink className={`${styles.link} ${styles.about}`} to={"/hizmetlerimiz"}>
                    <span className={styles.link_text}>Hizmetlerimiz</span>
                    <FaTools className={styles.link_icon} />
                </NavLink>
                <NavLink className={`${styles.link} ${styles.contact}`} to={"/iletisim"}>
                    <span className={styles.link_text}>İletişim</span>
                    <PhoneOutlined className={styles.link_icon} />
                </NavLink>
            </div>
            <div className={styles.social_media}>
                <Link to={"/"}>
                    <InstagramOutlined className={`${styles.icon} ${styles.instagram_icon}`} />
                </Link>
                <a className={`${styles.icon} ${styles.whatsapp_icon}`} href="https://wa.me/+905453992630" target="_blank" rel="noopener noreferrer">
                    <WhatsAppOutlined />
                </a>
                <a className={`${styles.icon} ${styles.phone_icon}`} href="tel:+905453992630" target="_blank" rel="noopener noreferrer">
                    <PhoneOutlined />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;

