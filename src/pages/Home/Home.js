import React, { useContext, useEffect, useState } from 'react'
import ImgContext from '../../context/imgContext'
import { Navbar } from '../../components/Navbar/Navbar'
import { Loader } from '../../components/Loader/Loader'
import leftArrow from '../../img/left.svg'
import rightArrow from '../../img/next.svg'
import InputNumber from 'react-input-number'
import { Modal } from '../../components/Modal/Modal'
import './Home.scss'

export const Home = () => {
  const imgContext = useContext(ImgContext)
  const [openModal, setOpenModal] = useState()

  const {
    loading,
    error,
    images,
    page,
    getImages,
    changeAmount,
    amount,
    getNextPage,
    getPrevPage,
  } = imgContext

  useEffect(() => {
    const fetchData = async () => await getImages()
    fetchData()
    // eslint-disable-next-line
  }, [amount, page])

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
      <Navbar step1='disabled' />
      <div className='home-screen'>
        {loading && <Loader />}
        {error && <h1>Somthing go wrong...</h1>}
        {openModal && <Modal item={openModal} closeModal={setOpenModal} />}
        {images && (
          <>
            {images.map((i) => (
              <div key={i.id} className='grid-images'>
                <button onClick={() => setOpenModal(i)}>
                  <img
                    className='item'
                    src={`https://picsum.photos/id/${i.id}/500`}
                    alt={i.author}
                  />
                </button>
              </div>
            ))}
            <div className='page-btn'>
              {page > 1 && (
                <button onClick={clickPrevPage}>
                  <img src={leftArrow} alt='Previous page' />
                </button>
              )}
              <div className='select'>
                <label htmlFor='number'>Display images on page: </label>
                <InputNumber
                  id='number'
                  step={1}
                  value={amount}
                  min={1}
                  max={50}
                  onChange={changeAmount}
                  enableMobileNumericKeyboard
                />
              </div>
              <button onClick={clickNextPage}>
                <img src={rightArrow} alt='Next page' />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
