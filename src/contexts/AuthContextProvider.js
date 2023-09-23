import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";

export const AuthStateContext = createContext(); //initializaton of context

const initialState = { //default state
    islogin: false,
    loading: true,
    userDetails: {}
};

export const AuthContextProvider = ({ children }) => { //whole app
    const [loggedin, setLoggedin] = useState(false)
    const [users, setUsers] = useState([]);
    const [post , setPost]= useState([]);
    const [values, setValues] = useState({
        a:10,
        b:20



    })
    const setUserData=(value)=> {
        setUsers(value)
    

    }

    const setPostinfo=(value) =>{
        setPost(value)
    }

    const toggleLogin = useCallback(() => {
        console.log("calling toggle Login")
        setLoggedin(!loggedin)
    },[])

    const setToken=(value)=>{
        console.log("calling token")
        localStorage.setItem("AuthToken",value)
    }

    const logOut = () => {
        setLoggedin(false)
        localStorage.removeItem("AuthToken")
    }

    useEffect(() => {
        setLoggedin(localStorage.getItem("AuthToken")?true:false)
    }, [])

    const randomToken = useMemo(() => {        
        return Math.random()
    },[values])
    

    return (
        <AuthStateContext.Provider value={{
            loggedin, toggleLogin, setToken, logOut, randomToken,setUserData,users,post,setPostinfo
        }}>
            {children} {/* whole application */}
        </AuthStateContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthStateContext);
