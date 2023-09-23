// import { Link } from "react-router-dom/cjs/react-router-dom"

// const capitalize = (a) => {
//     if (typeof (a) === "string") {
//         return a.toUpperCase()
//     }
//     return 400
// }
// const linkWraper = (linkValue) => {
//     let comp = ""
//     switch (linkValue.type) {
//         case "link":
//             comp = <Link>hello</Link>;
//             break;
//         case "button":
//             comp = <button>hello</button>;
//             break;
//         case "anchor":
//             comp = "";
//             break;
//         default:
//             comp = "";
//             break;

//     }
//     return comp;
// }




// export {
//     capitalize
// }

import {toast ,Toastontainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


export const loginform = () => {
    const mockEmail = 'mouni@gmail.com';
    const mockPassword = 'Mouni@123';
    return {mockEmail, mockPassword};    
}

export const validationcheck = (formvalues,mockCreds) => {

    if (formvalues.email === mockCreds.mockEmail && formvalues.password === mockCreds.mockPassword) {
       
        return "login successfull"
    
       // toast.success("Login successful!"); 
    } else {
    
      toast.error("Login failed!!");
    }
  };
      
