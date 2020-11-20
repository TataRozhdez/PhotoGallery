import React from 'react'
import { Link } from 'react-router-dom'
import galleryImg from '../../img/gallery.png'
import './Navbar.scss'

export const Navbar = ({ step1, step2, step3 }) => {
  return (
    <div className='navbar'>
      <div className='navbar_title'>
        <img src={galleryImg} alt='Gallery' />
        <h3> &nbsp;Photo Gallery</h3>
      </div>

      {step1 && (
        <div className='navbar_links'>
          <Link to='/' className='isActive'>
            Home
          </Link>
          <Link to='/favorite'>Favorite</Link>
          <Link to='/about'>About</Link>
        </div>
      )}
      {step2 && (
        <div className='navbar_links'>
          <Link to='/'>Home</Link>
          <Link to='/favorite' className='isActive'>
            Favorite
          </Link>
          <Link to='/about'>About</Link>
        </div>
      )}
      {step3 && (
        <div className='navbar_links'>
          <Link to='/'>Home</Link>
          <Link to='/favorite'>Favorite</Link>
          <Link to='/about' className='isActive'>
            About
          </Link>
        </div>
      )}
    </div>
  )
}
