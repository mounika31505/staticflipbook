import React, { useState } from 'react';

function TodoInbox({ tasks, deleteTask }) {
    const [editIndex, setEditIndex] = useState(-1);
  const [editedDetails, setEditedDetails] = useState('');

  const startEdit = (index, details) => {
    setEditIndex(index);
    setEditedDetails(details);
  };

    const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].details = editedDetails;
    setEditIndex(-1);
  };
    return (
      <div id="task-list">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <span>
              Date: {task.date}<br />
              Time: {task.time}<br />
              Details: {index === editIndex ? (
              <input
                type="text"
                value={editedDetails}
                onChange={(e) => setEditedDetails(e.target.value)}
              />
            ) : task.details}
          </span>
          <span className={`edit ${index === editIndex ? 'save' : ''}`} 
          onClick={() => index === editIndex ? saveEdit(index) : startEdit(index, task.details)}>
            {index === editIndex ? 'Save' : 'Edit'}
          </span>
         <span className="delete" onClick={() => deleteTask(index)}>
              Delete
            </span>
          </div>
        ))}
      </div>
    );
  }

export default TodoInbox


