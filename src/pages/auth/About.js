import React from 'react'
import CompanyDetails from '../../components/CompanyDetails'

const About = ({ from, text, description, style }) => {
  // const { text, styles } = props;
  return (
    <div style={style}>
      <h1>{text}</h1>
      <h4>{description}</h4>
      {/* Just have to pass applicable on p tag or compnaydetails only */}
      <CompanyDetails info="JaVascript company" style={{color:"white"}}>
        <div>
          <button style={{backgroundColor:"white", padding:"1rem"}}>Childbutton</button>
        </div>
      </CompanyDetails>
    </div>
  )
}

export default About