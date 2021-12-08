import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// importing components
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Header />} />
          <Fragment>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Fragment>
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
  