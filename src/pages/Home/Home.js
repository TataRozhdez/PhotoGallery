import React, { useEffect, useContext, useState } from 'react'
import ImgContext from '../../context/imgContext'
import { Navbar } from '../../components/Navbar/Navbar'
import { Loader } from '../../components/Loader/Loader'
import leftArrow from '../../img/left.png'
import rightArrow from '../../img/right.png'
import plusImg from '../../img/plus.png'
import minusImg from '../../img/minus.png'
import './Home.scss'

export const Home = () => {
  const imgContext = useContext(ImgContext)
  const [favorites, setFavorites] = useState([])

  const {
    loading,
    error,
    images,
    page,
    getImages,
    getNextPage,
    getPrevPage,
    addToFavorite,
  } = imgContext

  const getFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem('photoGallery')))
  }

  useEffect(() => {
    getImages()
    getFavorites()
  }, [getImages])

  const clickNextPage = (e) => {
    e.preventDefault()
    getNextPage()
  }
  const clickPrevPage = (e) => {
    e.preventDefault()
    getPrevPage()
  }

  return (
    <>
      <Navbar step1 />
      <div className='home-screen'>
        {loading && <Loader />}
        {error && <h1>Somthing go wrong...</h1>}
        {images && (
          <>
            {images.map((i) => (
              <div key={i.id} className='grid-images'>
                <a href={i.download_url} target='_balnk'>
                  <img className='item' src={i.download_url} alt={i.author} />
                </a>
                {favorites && favorites.find((k) => k.id === i.id) ? (
                  <img
                    className='to-favorite'
                    src={minusImg}
                    alt='Add to favorite'
                    onClick={() => addToFavorite(i)}
                  />
                ) : (
                  <img
                    className='to-favorite'
                    src={plusImg}
                    alt='Add to favorite'
                    onClick={() => addToFavorite(i)}
                  />
                )}
              </div>
            ))}
            <div className='page-btn'>
              {page > 1 && (
                <img
                  src={leftArrow}
                  alt='Previous page'
                  onClick={clickPrevPage}
                />
              )}
              <img src={rightArrow} alt='Next page' onClick={clickNextPage} />
            </div>
          </>
        )}
      </div>
    </>
  )
}
