import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1)
  }, [])
  return (
    <div>
      <Navbar />
      <div>Services</div>
    </div>
  )
}

export default Services;