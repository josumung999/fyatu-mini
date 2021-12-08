import { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit =  async e => {
    e.preventDefault();
    console.log('SUCCESS');
  }


  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4"> Login</h1>
        <form onSubmit={e => onSubmit(e)} >
          <div className="form-group mb-3">
            <input
              type="email" 
              className="form-control" 
              placeholder="Enter Email"
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
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input 
            type="submit"
            className="btn btn-primary"
            value="Login"
          />
        </form>
        <p className="my-2">Don't have an account ? <Link to="/register">Sign Up</Link> </p>
      </div>
    </Fragment>
  )
}

export default Login;