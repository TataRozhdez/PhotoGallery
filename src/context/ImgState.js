import React, { useReducer } from 'react'
import imgReducer from './imgReducer'
import ImgContext from './imgContext'
import axios from 'axios'
import {
  GET_IMAGES,
  CONNECT_ERROR,
  GET_NEXT_PAGE,
  GET_PREV_PAGE,
} from './types'

const ImgState = (props) => {
  const initialState = {
    amount: 15,
    loading: true,
    images: [],
    page: 1,
    error: null,
  }

  const [state, dispatch] = useReducer(imgReducer, initialState)

  // Get Images
  const getImages = async () => {
    try {
      const config = {
        proxyHeaders: false,
        credentials: false,
      }
      const pageString = state.page.toString()

      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${pageString}&limit=20`,
        config
      )

      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: CONNECT_ERROR,
        payload: error,
      })
    }
  }

  // Get next page
  const getNextPage = () => {
    const nextPage = ++state.page

    dispatch({
      type: GET_NEXT_PAGE,
      payload: nextPage,
    })
  }

  // Get prev page
  const getPrevPage = () => {
    if (state.page > 1) {
      const prevPage = +state.page - 1

      dispatch({
        type: GET_PREV_PAGE,
        payload: prevPage,
      })
    }
  }

  //Add to localStorage
  const addToFavorite = (item) => {
    const itemsLocal = localStorage.getItem('photoGallery')
    localStorage.removeItem('photoGallery')

    let likesItems

    itemsLocal && (likesItems = JSON.parse(itemsLocal))

    if (itemsLocal && likesItems.find((i) => i.id === item.id)) {
      likesItems = likesItems.filter((j) => j.id !== item.id)
    } else if (itemsLocal) {
      likesItems = [...likesItems, item]
    } else {
      likesItems = [item]
    }

    localStorage.setItem('photoGallery', JSON.stringify(likesItems))
  }

  return (
    <ImgContext.Provider
      value={{
        loading: state.loading,
        amount: state.amount,
        images: state.images,
        error: state.error,
        page: state.page,
        getImages,
        getNextPage,
        getPrevPage,
        addToFavorite,
      }}
    >
      {props.children}
    </ImgContext.Provider>
  )
}

export default ImgState
