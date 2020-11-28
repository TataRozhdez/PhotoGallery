import React from 'react'
import { Link } from 'react-router-dom'
import galleryImg from '../../img/attach.svg'
import './Navbar.scss'

export const Navbar = ({ step1, step2, step3 }) => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar_title'>
        <img src={galleryImg} alt='Gallery' />
        <h3> &nbsp;Photo Gallery</h3>
      </Link>

      <div className='navbar_links'>
        <Link to='/' disabled={step1}>
          Home
        </Link>
        <Link to='/favorite' disabled={step2}>
          Favorite
        </Link>
        <Link to='/about' disabled={step3}>
          About
        </Link>
      </div>
    </div>
  )
}
