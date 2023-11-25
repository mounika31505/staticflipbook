import React,{ useState } from "react";
import { Forgotpassword } from "../../helpers/authServices";
import Alert from "./alerts/Alert"; 
import { STATUS_TYPES } from "../../helpers/constants/Constant";
import { Link } from "react-router-dom/cjs/react-router-dom";
 import "../../styles/Forgot.css"

export const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zindex:1
}
export const OTHER_CONTENT_STYLES ={
position:"relative",
zIndex:2,
backgroundColour: 'red',
padding:'10px'
}

const ForgotForm = (props) => {

  const [formvalues, setformvalues] =useState({
    email:" "

  });

  const [isOpen, setIsOpen] =useState(false);
  const [message, setMessage] =useState({
    info:"Testing is completed",
    variant:null,
    title:null
  });

const handleSubmit =(e) =>{
  e.preventDefault()
  const respData =Forgotpassword(formvalues.email)
  respData.then((res) =>{
    console.log(res,"forgot")
    const {error, message} = res;
    console.log(error,"inside eror")
    if(message){//destration 
      setMessage({ info: message,varient:STATUS_TYPES.success });
      setIsOpen(true)
    } else{
      setMessage({ info: error,varient:STATUS_TYPES.error });
    setIsOpen(true)
    }
    
  }).catch(err => {
    setMessage({ info: err,varient:STATUS_TYPES.error });
    setIsOpen(true)
  })
}
const handleOnChange =(e) =>{
  // console.log(e)
  setformvalues({
    ...formvalues,
    [e.target.name]: e.target.value
  })
}
return(
  <div className="forgotpswd">
      <form className="px-16 pt-6" onSubmit={handleSubmit} autoComplete="off">
        <h2>Forgot Password</h2>
        <div>
          <label htmlFor="email">Email</label><br />
          <input
            value={formvalues.email}
            onChange={handleOnChange}
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
             />
            <div>
              <button las type="submit" size="nd" variant="accent" >Send link </button>
            </div>
            </div>
           
            <div className="px-16 pb-3 pt-2">
              <p className="text-primary text-body2 text-center mt-10">
                Already have an account?
                <Link to="auth/login">login</Link>
              </p>
            </div>
            <div style={BUTTON_WRAPPER_STYLES}>
            <button onClick={() => setIsOpen(true)}>close model</button>           
            
            <Alert open={isOpen} onClose={() => setIsOpen(!isOpen)} message={message}>
              {message.variant === STATUS_TYPES.error ? "Error":"Success"}
            </Alert>
            </div>
            <div style={OTHER_CONTENT_STYLES}>other content</div>
            </form>
          
        </div>
      
)
}
export default ForgotForm
