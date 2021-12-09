import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_CARDS,
  CARD_ERROR
} from './types';
 
// Get Current User's cards
export const getCards = () => async dispatch => {
  try {
    const res = await axios.get('/api/cards');

    dispatch({
      type: GET_CARDS,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: CARD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}