import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from "../../components/About"
import Gallery from "../../components/Gallery"
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Services from '../../components/Services';
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ana Sayfa | Yetgin Tesisat</title>
        <meta name='description' content='anasayfa description Kanalizasyon açma,izmir tesisatçı, izmir tesisat, tıkanık lavabo açma, 24 saat hizmet, su tesisatçı izmir, bostanlı tesisatcı, karşıyaka tesisatcı, çiğli tesisatcı, atakent tesisatçı, karşıyaka tesisatçı, bayraklı tesisatçı,konak tesisatçı, karabağlar tesisatçı'/>
        <link rel="canonical" href="https://www.tesisatizmirde.com/" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      {/* <Comments/> */}
      <Footer />
    </div>
  )
}

export default Home;