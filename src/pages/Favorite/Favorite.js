import React, { useState, useEffect, useContext } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import ImgContext from '../../context/imgContext'
import minusImg from '../../img/minus.png'
import './Favorite.scss'

export const Favorite = () => {
  const imgContext = useContext(ImgContext)
  const [favorites, setFavorites] = useState([])

  const { addToFavorite } = imgContext

  const getFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem('photoGallery')))
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <>
      <Navbar step2 />
      <div className='favorite-screen'>
        <h3>Favorite images ♡</h3>
        {favorites ? (
          <div className='favorite-grid'>
            {favorites.map((i) => (
              <div key={i.id} className='favorite-grid_item'>
                <a href={i.download_url} target='_balnk'>
                  <img
                    className='favorite-image'
                    src={i.download_url}
                    alt={i.author}
                  />
                </a>

                <img
                  className='to-favorite'
                  src={minusImg}
                  alt='Add to favorite'
                  onClick={() => addToFavorite(i)}
                />
              </div>
            ))}
          </div>
        ) : (
          <h4>Add any images to your favorites list...</h4>
        )}
      </div>
    </>
  )
}
