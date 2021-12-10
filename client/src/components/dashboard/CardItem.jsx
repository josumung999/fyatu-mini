import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'


const CardItem = ({ auth, card: { _id, cardName, cardNumber, cardStatus, cardSecret, createdAt, cardAmount  }, index }) => {
  return (
    <Fragment>
      <tr key={_id}>
        <th scope="row">{index + 1}</th>
        <td><span className="text-light bg-success">{cardStatus}</span> {cardName}</td>
        <td>{cardNumber}</td>
        <td>{cardSecret}</td>
        <td><Moment format='YYYY/MM/DD'>{createdAt}</Moment></td>
        <td>{ !cardAmount ? '$ O' : `$ ${cardAmount}`}</td>
        <td>
          <div className="btn-group">
            <button className="btn btn-info">
              View
            </button>
            <button className="btn btn-danger">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </Fragment>
  )
}

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {  })(CardItem)
