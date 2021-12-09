import {
  GET_CARDS,
  CARD_ERROR
} from '../actions/types'

const initialState = {
  cards: [],
  card: null,
  loading: true,
  error: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_CARDS:
      return {
        ...state,
        cards: payload,
        loading: false
      }
      case CARD_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        }
      default:
        return state
  }
}

