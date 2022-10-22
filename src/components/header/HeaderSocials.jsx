import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="#" target="_blank"><BsLinkedin></BsLinkedin></a>
          <a href="#" target="_blank"><BsFacebook></BsFacebook></a>
          <a href="#" target="_blank"><FaInstagramSquare></FaInstagramSquare></a>
        
    </div>
  )
}

export default HeaderSocials