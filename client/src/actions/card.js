import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_CARDS,
  CARD_ERROR,
  DELETE_CARD,
  ADD_CARD
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

// Add Card
export const addCard = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
		const res = await axios.post('http://localhost:5000/api/cards/', formData, config);

		dispatch({
			type: ADD_CARD,
			payload: res.data
		})

		dispatch(setAlert('Card Created Successfully', 'success'));
	} catch (err) {
		dispatch({
			type: CARD_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		})
	}
}