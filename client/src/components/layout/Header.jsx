import {Link, Navigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className="landing">
      <div className="jumbotron bg-dark text-light d-flex justify-content-center">
        <div className="container   d-flex flex-column align-items-center justify-content-center">
          <h1 className="x-large">Mini Fyatu</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci error in blanditiis eum numquam vero necessitatibus accusamus. Quae enim ipsam eius doloribus? Voluptatibus quis cum ipsam veniam expedita praesentium corporis!</p>
          <div className="d-flex flex-wrap">
            <Link to="/register" className="mx-3 btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-info">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Header)
