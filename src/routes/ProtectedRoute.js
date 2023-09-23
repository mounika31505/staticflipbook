import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom'

const ProtectedRoute = (prop) => {
    const [loggedIn] = useState(localStorage.getItem("AuthToken") || null);
    return (
        <div> 
            <Route path="/">
                {loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/auth/login" />}
        </Route>
        </div>
    )
}

export default ProtectedRoute