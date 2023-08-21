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
        <meta name='description' content='anasayfa description'/>
        <link rel="canonical" href="/" />
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