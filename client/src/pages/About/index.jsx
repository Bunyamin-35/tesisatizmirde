import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 1)
  }, [])
  return (
    <div>
      <Navbar />
      <div>About</div>
    </div>
  )
}

export default About;