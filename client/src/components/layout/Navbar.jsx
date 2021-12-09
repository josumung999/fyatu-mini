import { Fragment } from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
          <a onClick={logout} className="nav-link" href="#!">
            <i className="fas fa-sign-out-alt"></i>{' '} Logout
          </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
          <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
    </ul>
  );
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          Mini Fyatu
        </Link>
        <div className="d-flex justify-content-end">
          { !loading && (
          <Fragment>
            { isAuthenticated ? authLinks : guestLinks }
          </Fragment>
          ) }
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
 