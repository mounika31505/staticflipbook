import React from 'react';
import './Table.css';

const Table = (props) => {
    // object distruction
    const {customerinfo,tbheading} = props;
    
    // console.log(props,"-------")
    return (
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h1 style={{color:"white", backgroundColor:"yellow",padding:"2rem", borderRadius:"1rem"}}>{tbheading}</h1>
            </div>
            
            <table align='center'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                </tr>
                {customerinfo.map((mounika, index) => {
                    return (
                        <tr key={index}>
                            <td>{mounika.id}</td>
                            <td>{mounika.name}</td>
                            <td>{mounika.username}</td>
                            <td>{mounika.email}</td>
                        </tr>
                    )
                })}



            </table>
        </div>

    )


}
export default Table