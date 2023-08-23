import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from "../../components/About"
import Gallery from "../../components/Gallery"
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import Services from '../../components/Services';
import { Helmet } from "react-helmet"

const ServicesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hizmetlerimiz | Yetgin Tesisat</title>
        <link rel="canonical" href="/hizmetlerimiz" />
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

export default ServicesPage;