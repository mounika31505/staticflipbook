import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
//import Table from './components/Table';
//import TableAddress from './components/TableAddress';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Reset from './pages/auth/Reset';
import Success from './pages/auth/Success';

const App = () => { 
  // const [data, setData] = useState([])
 // const [currentpage, setCurrentpage] = useState(1)
 
// const handleDelete = (recordindex) => {
    // const updateData = data.filter((val, index) => index !== recordindex);
    // setData(updateData)
  // }

  return ( //Html (JSX) handles.
    // jsx starts
    <div className='App'>
           {/* once clicks, it updates the count value */}
      {/* its a child component add accepts props customerinfo @state:data */}

      {/* <Table customerinfo={data} tbheading="Its customer data" />
      <TableAddress addressinfo={data} tbheading="Customer address details" deleteRecord={handleDelete} /> */}
      <Router>
        <Link to="/login">Login</Link> 
        <Link to="/signup">Signup</Link>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </div>
    // jsx ends
  );
};


export default App;

