import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet"

const Services = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1)
  }, [])
  return (
    <div>
      <Helmet>
        <title>Hizmetlerimiz | Yetgin Tesisat</title>
        <link rel="canonical" href="/hizmetlerimiz" />
      </Helmet>
      <Navbar />
      <div>Services</div>
    </div>
  )
}

export default Services;