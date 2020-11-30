/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import ImgContext from '../../context/imgContext'
import minusImg from '../../img/checked.svg'
import downloadImg from '../../img/download.svg'
import leftArrow from '../../img/left.svg'
import rightArrow from '../../img/next.svg'
import './Favorite.scss'

export const Favorite = () => {
  const imgContext = useContext(ImgContext)
  const [favorites, setFavorites] = useState([])
  const [renderLarge, setRenderLarge] = useState(0)

  const { addToFavorite } = imgContext

  const handleStorage = (item) => {
    addToFavorite(item)
    setFavorites(JSON.parse(localStorage.getItem('photoGallery')))
  }

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('photoGallery')))
  }, [])

  const seteClassName = (i) => {
    let classImg = ['favorite-grid_item']
    i === renderLarge
      ? classImg.push('large-size')
      : (classImg = ['favorite-grid_item'])

    return classImg.join(' ')
  }

  const nextRender = () => {
    const newRender = +renderLarge + 1
    newRender >= favorites.length
      ? setRenderLarge(0)
      : newRender < 0
      ? setRenderLarge(0)
      : setRenderLarge(newRender)
  }

  const prevRender = () => {
    const newRender = +renderLarge - +1

    newRender >= favorites.length
      ? setRenderLarge(0)
      : newRender < 0
      ? setRenderLarge(favorites.length - 1)
      : setRenderLarge(newRender)
  }

  return (
    <>
      <Navbar step2='disabled' />
      <div className='favorite-screen'>
        <h3>Favorite images ♡ </h3>
        {favorites.length > 0 && <p>Total: {favorites.length} items</p>}
        {favorites.length > 0 ? (
          <div className='favorite-grid'>
            {favorites.map((i, index) => (
              <div key={i.id} className={seteClassName(index)}>
                <img
                  className='favorite-image'
                  src={i.download_url}
                  alt={i.author}
                  onClick={() => setRenderLarge(index)}
                />
                <div className='favorite-item_footer'>
                  <a
                    className='favorite_download'
                    href={i.download_url}
                    target='_balnk'
                  >
                    <img src={downloadImg} alt='Download' />
                  </a>
                  <button onClick={() => handleStorage(i)}>
                    <img
                      className='to-favorite'
                      src={minusImg}
                      alt='Add to favorite'
                    />
                  </button>
                </div>
              </div>
            ))}
            <button className='favorite-next' onClick={nextRender}>
              <img src={rightArrow} alt='Next' />
            </button>
            <button className='favorite-prev' onClick={prevRender}>
              <img src={leftArrow} alt='Previous' />
            </button>
          </div>
        ) : (
          <p>
            <Link to='/'>Add any images to your favorites list...</Link>
          </p>
        )}
      </div>
    </>
  )
}
