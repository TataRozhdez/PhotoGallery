import {
  GET_IMAGES,
  GET_NEXT_PAGE,
  GET_PREV_PAGE,
  CONNECT_ERROR,
  SET_NEW_AMOUNT,
} from './types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        error: null,
        loading: false,
      }
    case GET_NEXT_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    case GET_PREV_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    case CONNECT_ERROR:
      return {
        ...state,
        loading: false,
        images: [],
        error: action.payload,
      }
    case SET_NEW_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      }
    default:
      return state
  }
}
