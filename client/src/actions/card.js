import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_CARDS,
  CARD_ERROR,
  DELETE_CARD
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


// Delete Card
export const deleteCard = id => async dispatch => {
	try {
		await axios.delete(`/api/cards/${id}`);

		dispatch({
			type: DELETE_CARD,
			payload: id
		})

		dispatch(setAlert('Card Deleted Successfully', 'success'));
	} catch (err) {
		dispatch({
			type: CARD_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		})
	}
}