/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import ImgContext from '../../context/imgContext'
import minusImg from '../../img/checked.svg'
import leftArrow from '../../img/left.svg'
import rightArrow from '../../img/next.svg'
import './Favorite.scss'

export const Favorite = () => {
  const imgContext = useContext(ImgContext)
  const [favorites, setFavorites] = useState([])
  const [renderLarge, setRenderLarge] = useState(0)

  const { addToFavorite } = imgContext

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
        <h3>Favorite images ♡</h3>
        {favorites ? (
          <div className='favorite-grid'>
            {favorites.map((i, index) => (
              <div key={i.id} className={seteClassName(index)}>
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
            <img
              className='favorite-next'
              src={rightArrow}
              alt='Next'
              onClick={nextRender}
            />
            <img
              className='favorite-prev'
              src={leftArrow}
              alt='Previous'
              onClick={prevRender}
            />
          </div>
        ) : (
          <h4>Add any images to your favorites list...</h4>
        )}
      </div>
    </>
  )
}
