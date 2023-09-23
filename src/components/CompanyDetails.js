import React from 'react';



const CompanyDetails = (props) => {
    const { info, children, ...rest } = props; //i prefer this
    return (
        <p {...rest}>

                {`CompanyDetails: ${info}`}

            {children}
        </p>
    )
}


export default CompanyDetails