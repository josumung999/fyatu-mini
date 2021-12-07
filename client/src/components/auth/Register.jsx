import { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {name, email, password, password2} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();
    if(password !== password2) {
      window.alert("Passwords do not match")
    } else {
      console.log(formData)
    }
  }


  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4">Register</h1>
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

export default Register
