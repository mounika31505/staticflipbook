import React from 'react';
import './Table.css';

const TableAddress = (props) => {
    
    
    // console.log(props,"-------")
    return (
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h1 style={{color:"white", backgroundColor:"yellow",padding:"2rem", borderRadius:"1rem"}}>{props.tbheading}</h1>
            </div>
            
            <table align='center'>
                <tr>
                    <th>Address</th>
                    <th>Company</th>
                    <th>Company catch phrase</th>
                    <th>Suite</th>
                    <th>Delete</th>
                </tr>
                {props.addressinfo.map((mounika, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <div>
                                    city and street: {`${mounika.address.city} - ${mounika.address.street}` }<br />
                                    zipcode: {mounika.address.zipcode}
                                    location: {mounika.address.geo.lat} {mounika.address.geo.lng}
                                </div></td>
                            <td>{mounika.company.name}</td>
                            <td>{mounika.company.catchPhrase}</td>
                            <td>
                                <button onClick={()=>alert(mounika.address.suite)}>show suite for me</button>
                            </td>
                            <td>
                                <button onClick={()=>props.deleteRecord(index)}>show suite for me</button>
                            </td>
                        </tr>
                    )
                })}



            </table>
        </div>

    )


}
export default TableAddress