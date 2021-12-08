import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


import { setAlert } from '../../actions/alert';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {name, email, password, password2} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit =  async e => {
    e.preventDefault();
    if(password !== password2) {
      setAlert("Passwords do not match", "danger")
    } else {
      console.log("SUCCESS");
    }
  }


  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4"> Register</h1>
        <form onSubmit={e => onSubmit(e)} >
          <div className="form-group mb-3">
              <input
                type="text" 
                className="form-control"
                name="name"
                value={name}
                onChange={e => onChange(e)} 
                placeholder="Your Name"
                required
              />
          </div>
          <div className="form-group mb-3">
            <input
              type="email" 
              className="form-control" 
              placeholder="Enter E-mail"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password" 
              className="form-control" 
              placeholder="Create a Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password" 
              className="form-control" 
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input 
            type="submit"
            className="btn btn-primary"
            value="Register"
          />
        </form>
        <p className="my-2">Already have an account ? <Link to="/login">Login</Link> </p>
      </div>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
