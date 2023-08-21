import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet"

const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1)
  }, [])
  return (
    <div>
      <Helmet>
        <title>Hakkımızda | Yetgin Tesisat</title>
        <link rel="canonical" href="/hakkimizda" />
      </Helmet>
      <Navbar />
      <div>About</div>
    </div>
  )
}

export default About;