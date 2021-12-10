import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect  } from 'react-redux';
import { addCard } from '../../actions/card';

const CreateCard = ({ addCard }) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardAmount: 0
  })

  const { cardName,cardAmount } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit =  async e => {
    e.preventDefault();
    addCard(cardName, cardAmount)
  }

  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4"><i className="fab fa-cc-visa text-info"></i> Create a New Card</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sapiente asperiores quis dignissimos error maxime, eos 
          quae quaerat rem voluptatum est porro neque debitis. 
          Sint esse tenetur reiciendis, magnam perspiciatis sunt?
        </p>
        <form onSubmit={e => onSubmit()}>
          <div className="form-group mb-3">
            <input
              type="text" 
              className="form-control" 
              placeholder="Enter Card Name"
              name="cardName"
              value={cardName}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number" 
              className="form-control" 
              placeholder="Enter Amount"
              value={cardAmount}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input 
            type="submit"
            className="btn btn-primary"
            value="Create Card"
          />
        </form>
      </div>
    </Fragment>
  )
}

CreateCard.propTypes = {
  addCard: PropTypes.func.isRequired,
}

export default connect(null, { addCard })(CreateCard)
