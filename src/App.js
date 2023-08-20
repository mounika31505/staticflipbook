import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const handleInterval = () => {
    setInterval(() => {
      setCount((prevstate) => prevstate + 1)
    }, 1000);
  }
  useEffect(() => {
    //to calling the stop watch
    handleInterval()

    return () => {

    }
  }, [])
  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  const handleIncrement = (evnt) => {
    if (evnt.target.name === "increment") {
      setCount(count + 1)
    }
    else {
      if (count > 0) {
        setCount(count - 1)
      }
    }

  }
  return (
    <div className='App'>
      <h2 style={{ color: "white", fontSize: "100px" }}>
        {count}

      </h2>
      <button

        style={{
          
          fontSize: "50px",
          padding: "20px",
          borderRadius: "16px",
          cursor: "pointer",
          border: "5px solid yellow",
          marginRight: "10px",

        }}
        className={isHovering ? "incrementhover" : "increment"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleIncrement}
        name="increment"


      >
        increment
      </button>

      <button

        style={{
          backgroundColor: isHovering ? "white" : "green",
          fontSize: "50px",
          padding: "20px",
          borderRadius: "16px",
          cursor: "pointer",
          border: "5px solid yellow",
          marginRight: "10px",

        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleIncrement}
        name="decrement"


      >
        decrement
      </button>


      <button
         
        
        className ='reset'
        onClick={() => setCount(0)}
      > reset
      </button>


    </div>
  );
};

export default App;
