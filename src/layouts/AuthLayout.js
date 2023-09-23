import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Loader from '../pages/auth/Fallback'
import ProtectedRoute from '../routes/ProtectedRoute';
const Login = lazy(() => import('../pages/auth/Login'));
const Signup = lazy(() => import('../pages/auth/Signup'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));

const AuthLayout = () => {
    
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/auth/login" component={Login} exact />
                    <Route path="/auth/signup" component={Signup} exact />
                    <Route path="/auth/forgotpassword/" component={ForgotPassword} exact />
                    <ProtectedRoute />
                </Switch>
            </Suspense>
        </div>
    )
}

export default AuthLayout