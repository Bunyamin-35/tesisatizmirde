import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from "../../components/About"
import Gallery from "../../components/Gallery"
import Comments from '../../components/Comments';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About />
        <Gallery />
        <Comments/>
    </div>
  )
}

export default Home;