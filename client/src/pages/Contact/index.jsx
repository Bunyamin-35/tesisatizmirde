import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet"

const Contact = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1)
  }, [])
  return (
    <div>
      <Helmet>
        <title>İletişim | Yetgin Tesisat</title>
        <link rel="canonical" href="/iletisim" />
      </Helmet>
      <Navbar />
      <div>Contact</div>
    </div>
  )
}

export default Contact;