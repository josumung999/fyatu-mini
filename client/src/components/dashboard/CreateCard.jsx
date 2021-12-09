import { Fragment } from 'react';

const CreateCard = props => {
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
        <form >
          <div className="form-group mb-3">
            <input
              type="text" 
              className="form-control" 
              placeholder="Enter Card Name"
              name="email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="number" 
              className="form-control" 
              placeholder="Enter Amount"
              name="email"
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

export default CreateCard
