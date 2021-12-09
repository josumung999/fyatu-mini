import { Fragment, useEffect } from 'react';
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
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

// CSS
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import CreateCard from './components/dashboard/CreateCard';


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
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
              <Route 
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route 
                path="/create-card"
                element={
                  <PrivateRoute>
                    <CreateCard />
                  </PrivateRoute>
                }
              />
            </Fragment>
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  )
};

export default App;
  