import React, { useState }  from 'react';
import "../styles/Calc.css";

const Calc = () => {
   const[result, setResult] =useState("");
   const handleClick = (e) => {
        setResult(result.concat(e.target.name));
   }
   const clear =() => {
setResult("");

   }
   const backspace =() =>{
  setResult(result.slice(0, -1)); //or -1
   }
   const calculate =() =>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
     setResult("Error")
    }
    

   }
  return (
    
    <div className="calculator">
    <div className="calc-container">
      <form >
        <input   className='calc-inpts' type="text" value={result}></input>
      </form>
          <div className="calc-keypad">
          <button className='highlight' onClick={clear}id="clear">AC</button>
          <button className='highlight' onClick={backspace} id="backspace">DEL</button>
          <button className='highlight' name="/" onClick={handleClick}>&divide;</button>
          <button className='calc-btn' name="7" onClick={handleClick}>7</button>
          <button className='calc-btn' name="8" onClick={handleClick}>8</button>
          <button className='calc-btn' name="9" onClick={handleClick}>9</button>
          <button className='highlight' name="*" onClick={handleClick}>&times;</button>
          <button className='calc-btn'  name="4" onClick={handleClick}>4</button>
          <button className='calc-btn' name="5" onClick={handleClick}>5</button>
          <button className='calc-btn' name="6" onClick={handleClick}>6</button>
          <button className='highlight' name="-" onClick={handleClick}>&ndash;</button>
          <button className='calc-btn'   name="1" onClick={handleClick}>1</button>
          <button className='calc-btn'  name="2"  onClick={handleClick}>2</button>
          <button className='calc-btn' name="3"  onClick={handleClick}>3</button>
          <button className='highlight'  name="+"  onClick={handleClick}>+</button>
          <button className='calc-btn' name="0"  onClick={handleClick}>0</button>
          <button className='calc-btn' name="."  onClick={handleClick}>.</button>
          <button className='highlight'  onClick={calculate} id="result">=</button>
        </div>
    </div>
    </div>
    
  )
}

export default Calc