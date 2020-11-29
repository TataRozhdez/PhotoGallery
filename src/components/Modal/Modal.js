import React from 'react'
// import plusImg from '../../img/plus.svg'
// import checkedImg from '../../img/checked.svg'
import './Modal.scss'

export const Modal = ({ item }) => {
  // const [favorites, setFavorites] = useState([])

  // const getFavorites = () => {
  //   setFavorites(JSON.parse(localStorage.getItem('photoGallery')))
  // }

  return (
    <div className='modal'>
      <a href={item.download_url} target='_balnk'>
        <img className='item' src={item.download_url} alt={item.author} />
      </a>
    </div>
  )
}

// eslint-disable-next-line no-lone-blocks
{
  /* {favorites && favorites.find((k) => k.id === i.id) ? (
                  <button className='to-favorite-btn'>
                    <img
                      className='to-favorite'
                      src={checkedImg}
                      alt='Add to favorite'
                      onClick={() => addToFavorite(i)}
                    />
                  </button>
                ) : (
                  <button className='to-favorite-btn'>
                    <img
                      className='to-favorite'
                      src={plusImg}
                      alt='Add to favorite'
                      onClick={() => addToFavorite(i)}
                    />
                  </button>
                )} */
}
