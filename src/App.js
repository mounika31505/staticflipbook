import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Loader from './pages/auth/Fallback';
import About from './pages/auth/About';
import Dashboard from './pages/home/Dashboard';
import AuthLayout from './layouts/AuthLayout';
import Search from './pages/admin/Search';
import SearchPost from './pages/admin/SearchPost';
import Counter from './components/otp/Counter';

import Practice from './pages/admin/Practice';
import ForgotPassword from './pages/auth/ForgotPassword';
import Signup from './pages/auth/Signup';

//import Table from './components/Table';
//import TableAddress from './components/TableAddress';



const Reset = lazy(() => import('./pages/auth/Reset'));
const Success = lazy(() => import('./pages/auth/Success'));
const Landingpage = lazy(() => import('./pages/home/Landingpage'));
const Post = lazy(() => import('./pages/post/Post'));
const PostItem = lazy(() => import('./pages/post/PostItem'));
const Blog = lazy(() => import('./pages/auth/Blog'));
const Contacts = lazy(() => import('./pages/auth/Contacts'));
const Course = lazy(() => import('./pages/course/Course'));


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
        {/* <Link to="/login">Login</Link> 
        <Link to="/signup">Signup</Link> */}

        <Suspense fallback={<Loader />}>
          <Switch>

            <Route path="/auth" component={AuthLayout} />

            <Route path="/post" component={Post} exact />
            <Route path="/post/:slug/:id" component={PostItem} exact />
            <Route path="/reset" component={Reset} exact />
            <Route path="/success" component={Success} exact />

            <Route path="/course" component={Course} exact />
            <Route path="/blog" component={Blog} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/about" component={About} />

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/search" component={Search}/>
            <Route path="/searchpost" component={SearchPost}/>
            <Route path="/counter" component={Counter}/>
           
            <Route path="/practice" component={Practice} />
            <Route path="/forgotpsd" component={ForgotPassword} />
            <Route path="/signup" component={Signup} />

            <Route path="/" exact>
              <Landingpage />
            </Route>

          </Switch>
          </Suspense>
      </Router>
    </div>
    // jsx ends
  );
};


export default App;

