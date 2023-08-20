import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },1)
  },[])
  return (
    <div>
        <Navbar/>
        <div>Contact</div>
    </div>
  )
}

export default Contact;