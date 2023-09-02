import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)//creating setdata
    //setCount has the updates the value nd store it count
    const [msg, setMsg] = useState(null)
    // var setval;
    useEffect(() => {
        // per request 8 records 
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((username) => {
                return username.json()//changing data into json formate
            }).then((res) => {
                console.log(res)//code chain
                setData(res)

            })
        //fetching frm local sever 3500
        fetch("http://localhost:3500/")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                setMsg(res)

            })



    }, [])/*when we give any value in array it renders everytime when code update
  otherwise it renders only single time*/
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

    const handleInterval = () => {

        const setval = setInterval(() => {
            //       if (count>=5){
            //     setCount(0)
            //  setvalue.clearInterval()
            // }
            // else
            // {

            setCount((prevstate) => {
                if (prevstate < 5) {
                    return prevstate + 1
                } else {
                    clearInterval(setval);//it dlts set interval
                    return 0
                }
            })


            // }
            console.log(count)

        }, 1000);


    }
    useEffect(() => {
        //to calling the stop watch
        handleInterval()

        return () => {

        }
    }, [])
    return (
        <div> <div style={{ float: "right", marginLeft: "auto", marginRight: "10px" }}>

            <h3 style={{
                fontFamily: "sans-serif",
                color: "white",

            }}>
                {msg && msg.Message}<br />
                {data.length > 0 && data[5].email}
            </h3>
        </div>
            <h2 style={{ color: "white", fontSize: "100px" }}>
                {count}
            </h2>
            <button

                style={{

                    fontSize: "50px",
                    padding: "20px",
                    borderRadius: "16px",
                    cursor: "pointer",
                    border: "5px solid black",
                    marginRight: "10px",

                }}
                className={isHovering ? "incrementhover" : "increment"}
                onMouseEnter={handleMouseEnter} //p
                onMouseLeave={handleMouseLeave}
                onClick={handleIncrement}
                name="increment"


            >
                increment
            </button>

            <button

                style={{
                    backgroundColor: isHovering ? "white" : "gold",
                    fontSize: "50px",
                    padding: "20px",
                    borderRadius: "16px",
                    cursor: "pointer",
                    border: "5px solid black",
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
                className='reset'
                onClick={() => setCount(0)}
            > reset
            </button></div>
    )
}

export default Counter