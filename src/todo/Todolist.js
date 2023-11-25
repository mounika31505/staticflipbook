import React, { useEffect, useState } from 'react';
import "../styles/Todo.css";
import TodoInbox from './TodoInbox';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');



  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (e) => {
    e.preventDefault();
    if (date && time && details) {
      const newTask = {
        date,
        time,
        details,
      };
      setTasks([...tasks, newTask]);
      setDate('');
      setTime('');
      setDetails('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    console.log(setTasks)
  };

  return (
    <body className='todo-page'>
    <div className="todo-container">
      <h1 className='todo-h1'>Task Notes</h1>
      <form className="todo-form"onSubmit={addTask}>
        <div className="items-wrap">
          <label className='todo-label' htmlFor="task-date">Date: </label>
          <input className='todo-input'
            type="date"
            id="task-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="todo-items-wrap">
          <label className='todo-label' htmlFor="task-time">Time: </label>
          <input className='todo-input'
            type="time"
            id="task-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="todo-items-wrap">
          <label className='todo-label' htmlFor="task-details">Details: </label>
          <textarea className='todo-textarea'
            name=""
            id="task-details"
            placeholder="Write your task details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </div>

        <button className='todo-button'type="submit">ADD TASK</button>
      </form>

      <TodoInbox tasks={tasks} deleteTask={deleteTask} />
    </div>
    </body>
  );
}

export default Todolist










//const Todolist = () => {
  //   const [todos, setTodos] = useState([])
  //   const [todo, setTodo] = useState("")
  //   const [todoEditing, setTodoEditing] = useState(null)
  //   const [editingText, setEditingText] = useState("")
  
    
  //   function handleSubmit(e) {
  //     e.preventDefault()
  
  //     const newTodo = {
  //       id: new Date().getTime(),
  //       text: todo,
  //       completed: false,
  //     };
  //     setTodos([...todos].concat(newTodo));
  //     setTodo("");
  //   }
  //   function deleteTodo(id) {
  //     const updatedTodos = [...todos].filter((todo) => todo.id !== id);
  //     setTodos(updatedTodos);
  //   }
  //   function toggleComplete(id) {
  //     let updatedTodos = [...todos].map((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo
  //     });
  //     setTodos(updatedTodos);
  //     setTodoEditing(null);
  //     setEditingText("")
  //   }
  //   function editTodo(id) {
  //     const updatedTodos = [...todos].map((todo) => {
  //       if (todo.id === id) {
  //         todo.text = editingText
  //       }
  //       return todo
  //     })
  //     setTodos(updatedTodos)
  //     setTodoEditing(null)
  //   }
  //   return (
      
       
  //       <div id="todo-list">
  //          <h1>
  //         To Do List
  //       </h1>
  //       <form onSubmit={handleSubmit}>
  //         <p>Add Task Here</p>
  //         <div>
  //           <input
  //             type="text"
  //             placeholder='Enter The Todo.....'
  //             onChange={(e) => setTodo(e.target.value)}
  //             value={todo}
  //           />
  //           <button type="submit"><i className='fa-thin-plus'></i></button>
  //         </div>
  //       </form>
  
  //       {todos.map((todo) => (
  //         <div key={todo.id} className='todo'>
  //           {todoEditing === todo.id ? (<input
  //             type="text"
  //             onChange={(e) => setEditingText(e.target.value)}
  //             value={editingText}
  //           />) : (<div>{todo.text}</div>)}
  
  //           <button onClick={() => deleteTodo(todo.id)}>c</button>
  //           <input
  //             type="checkbox"
  //             onChange={() => toggleComplete(todo.id)}
  //             checked={todo.completed} />
  //           {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)}
  //           >Submit Edits</button>) : (<button onClick={() => setTodoEditing(todo.id)}>Edit Todo</button>)}
  //         </div>
  //       ))}
  //       </div>
    
  //   );
  // }