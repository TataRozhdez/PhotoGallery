import React, { useState, useContext, useEffect } from 'react'
import ImgContext from '../../context/imgContext'

import downloadImg from '../../img/download.svg'
import plusImg from '../../img/plus.svg'
import checkedImg from '../../img/checked.svg'
import './Modal.scss'

export const Modal = ({ item, closeModal }) => {
  const [favorites, setFavorites] = useState([])

  const imgContext = useContext(ImgContext)
  const { addToFavorite } = imgContext

  const getFromStorage = () => {
    setFavorites(JSON.parse(localStorage.getItem('photoGallery')))
  }

  const handlerToStorage = (item) => {
    addToFavorite(item)
    getFromStorage()
  }

  useEffect(() => {
    getFromStorage()
  }, [])

  return (
    <div className='modal'>
      <div className='modal-container'>
        <button className='close-modal-btn' onClick={() => closeModal()}>
          X
        </button>
        <img
          className='modal-image'
          src={item.download_url}
          alt={item.author}
        />
        <div className='modal-footer'>
          <a href={item.download_url} target='_balnk'>
            <img src={downloadImg} alt='Download' />
          </a>
          {favorites && favorites.find((k) => k.id === item.id) ? (
            <button
              className='to-favorite-btn'
              onClick={() => handlerToStorage(item)}
            >
              <img
                className='to-favorite'
                src={checkedImg}
                alt='Remove from favorite'
              />
            </button>
          ) : (
            <button
              className='to-favorite-btn'
              onClick={() => handlerToStorage(item)}
            >
              <img
                className='to-favorite'
                src={plusImg}
                alt='Add to favorite'
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
