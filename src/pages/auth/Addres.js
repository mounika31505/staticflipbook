// import React, { Component } from 'react';

// class LifecycleExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   // Mounting Phase
//   componentDidMount() {
//     console.log('Component did mount');
//   }

//   // Updating Phase
//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component did update');
//   }

//   // Unmounting Phase
//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   // Error Handling Phase
//   componentDidCatch(error, info) {
//     console.log('Component did catch an error');
//   }

//   incrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 2 }));
//   }
//   reset =() => {
//     this.setState((prevState) => ({count: 0}));
//   }

//   render() {
//     console.log('Component is rendering');
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//         <button onClick={this.reset}> reset</button>
//       </div>
//     );
//}
// }
// export default LifecycleExample;


import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useHistory } from "react-router-dom";
const Addresspage = () => {
  const [formvalues, setFormvalues] = useState({
    name: "sun",
    email: "sun@gmail.com",
    address: "space; universe",
    todo: ""
  });

  const InputRef = useRef();
  const foreignbtnRef = useRef(null);
  const history = useHistory();

  const handleOnChange = (e) => {

    setFormvalues({
      ...formvalues,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = useCallback(() => {
    const arr = [...todoList];
    arr.push(formvalues.todo)
    console.log(arr)
    setTodoList(arr)
    // history.push('/');
    //console.log(formvalues,"calling formvalues");
  },[formvalues.todo]);
  useEffect(() => {
    InputRef.current.focus();
    // componentDidMount
    return () => {
      setFormvalues({
        name: '',
        email: '',
        address: '',
      });
      console.log(setFormvalues)
    };
    // componentWillUnmount

  }, []) //componentDidUpdate

  const [todoList, setTodoList] = useState([]);
  const deleteTodo = (todoindx) => {
    const deletedTodos = todoList.filter((val, index) => {
      return index !== todoindx
    });
    setTodoList(deletedTodos)
  }

  return (
    <div className='address'>
      <h3>address form</h3>
      <div>
        <label htmlFor='name'> Name   :</label>
        <input
          value={formvalues.name}
          onChange={handleOnChange}
          id="name"
          type='text'
          autoFocus={true}
          name="name"
          placeholder='name' />
      </div>
      <br />

      <div>
        <label htmlFor='email'>Email   :</label>
        <input
          value={formvalues.email}
          onChange={handleOnChange}
          id="email"
          type='email'
          ref={InputRef}
          name="email"
          placeholder='email' />
      </div>
      <br />
      <div>
        <label htmlFor='address'>Address :</label>
        <textarea 
               style={{ resize: "none" }}
               rows="4" 
               cols="25"
          value={formvalues.address}
          onChange={handleOnChange}
          id="address"
          name="address"
          placeholder='address' />
      </div>
      <div style={{ color: "white" }}>
        <h3 align="left" > <i><u>Entered Info : </u></i></h3>
        <p>Name: {formvalues.name}</p>
        <p>Email: {formvalues.email}</p>
        <p>Address: {formvalues.address}</p>
      </div>
      <div className='address'>
        <Link to="/">Go to Home</Link>
      </div>
      <div>
        <button onClick={() => alert("clicked by remote")} ref={foreignbtnRef}>anonymous triggered</button>
        <button onClick={() => foreignbtnRef.current.click()}>foregin trigger</button>
      </div>
      <br />
      <div>
        <label htmlFor='todo'>Todo list  :</label>
        <input
          value={formvalues.todo}
          onChange={handleOnChange}
          id="todo"
          type='text'
          name="todo"
          autoFocus={true}
          placeholder='enter todo list' />

        <div style={{ color: "white" }}></div>
      </div><button onClick={(handleSubmit)}>Add list</button>
      <p>todo: {formvalues.todo}</p>

      {todoList.map((val, index) => {
        return (
          <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
            <p>{val}</p>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        )
      })}
    </div>
    // </div>
  );
};

export default Addresspage