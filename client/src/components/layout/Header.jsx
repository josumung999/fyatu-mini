import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div className="landing">
      <div className="jumbotron bg-dark text-light d-flex justify-content-center">
        <div className="container   d-flex flex-column align-items-center justify-content-center">
          <h1 className="x-large">Mini Fyatu</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci error in blanditiis eum numquam vero necessitatibus accusamus. Quae enim ipsam eius doloribus? Voluptatibus quis cum ipsam veniam expedita praesentium corporis!</p>
          <div className="buttons">
            <Link to="/register" className=" btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
