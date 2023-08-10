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
                        <div className={styles.logo}>
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        {/* <p>
                            Müşteri memnuniyeti önceliğimiz.
                        </p> */}
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

{/* <div
  class="mx-auto h-80 max-w-lg overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
  style="background-image:url('https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp');">
  <div class="mt-40">
    <div class="bg-white p-4 sm:p-8">
      <div
        class="font-inter text-2xl font-extrabold tracking-tight text-black">
        Majestic peaks, nature's embrace.
      </div>
      <div class="mt-1 text-sm font-medium text-slate-500">
        Adventure calls, conquer mountain trails.
      </div>
      <p class="mt-4 leading-7 text-slate-500">
        In the realm of towering mountains, where the air is crisp and
        the vistas stretch endlessly, one finds solace, exhilaration,
        and a profound connection with the untamed beauty of the natural
        world.
      </p>
      <p class="mt-4 leading-7 text-slate-500">
        As the sun rises over the rugged peaks, casting a golden glow on
        the majestic landscape, a sense of awe fills the heart,
        reminding us of the grandeur and power that reside in the
        mountains.
      </p>
    </div>
  </div>
</div> */}