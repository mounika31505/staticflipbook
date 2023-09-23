import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Loader from '../auth/Fallback'
import User from '../admin/User'
import About from '../auth/About'
import Post from '../post/Post'

const Dashboard = () => {
  return (
    <div>    
        <Suspense fallback={<Loader />}>
          <Switch>          
            <Route path={`/dashboard/user`} component={User} exact />
            <Route path={`/dashboard/post`} component={Post} exact />
            <Route path={`/`} component={About} />
          </Switch>
        </Suspense>
    </div>
  )
}

export default Dashboard