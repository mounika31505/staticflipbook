export const API_URLS = {
    loginUrl: "/auth/login",
    signupUrl: "/auth/register",
    signupSuccessUrl: "/auth/success",
    verifyUserEmailUrl: "/auth/verifyemail",
    forgotPasswordUrl: "/auth/forgotpasword",
    createBookUrl: "/books/create",
}
export const CONTENT_TYPES = {
    img:"img",
    link:"link",
    a:"href",
    button:"button"
}
export const STATUS_TYPES = {
    success:"success",
    error:"error",
    info:"info"
}
export const JSON_HEADERS = {
    headers:{
       "Content-Type": "application/json",
        accept: "application/json",
    }
    
  }
  export const FORM_HEADERS = {
    headers:{
      "Content-Type": "application/x-www-form-urlencoded",
      // accept: "application/json",
    }
    
  }