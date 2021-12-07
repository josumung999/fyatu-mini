import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          Mini Fyatu
        </Link>
        <div className="d-flex justify-content-end">
        <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
 