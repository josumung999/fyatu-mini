import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCards } from '../../actions/card'


const Dashboard = ({ getCards, card: { cards, loading } }) => {
  useEffect(() => {
    getCards()
  }, [getCards])
  
  
  return (
    <Fragment>
      <div className="dashboard">
        <div className="pt-4 jumbotron bg-dark text-light">
          <div className="container">
            <h1 className="display-3 text-center">Hello World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo, enim aut vel fugiat corporis dolor minima modi reprehenderit animi architecto illum eos maxime repellendus doloribus, quod voluptatibus delectus vero?</p>
            <div className="d-flex flex-wrap my-4">
              <Link to="/create-card" className="mx-3 btn btn-primary"><i className="fab fa-cc-visa"></i> Create a Virtual Card</Link>
              <Link to="/create-card" className="mx-3 btn btn-info">Get Help</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 container">
        <h1 className="display-4">My Cards</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Card Name</th>
              <th scope="col">Card Number</th>
              <th scope="col">Card Secret</th>
              <th scope="col">Issued At</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <th scope="row">1</th>
              <td>John Doe</td>
              <td>4222 3333 444 5555</td>
              <td>800</td>
              <td>13 Dec 2021</td>
              <td>$ 45</td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-secondary">
                    View
                  </button>
                  <button className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCards: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  card: state.card
})


export default connect(mapStateToProps, { getCards })(Dashboard)
