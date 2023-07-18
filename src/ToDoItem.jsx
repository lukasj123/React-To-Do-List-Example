import { useState } from 'react'

    function ToDoItem({ toDoTask, handleDelete }) {
        let myTodoText = toDoTask || 'Untitled To Do'; 

        const [IsCompleted, setIsCompleted] = useState(false);
  
        return (
          <div onClick={() => setIsCompleted(!IsCompleted)} className="row gy-3">
            <div style={IsCompleted ? {backgroundColor: "#90EE90"} : {}}
            className="col-md-8 todo m-auto">
              <div className="row pt-3 text-box">
                {/* Note that we are using an embedded JS expression in our JSX */}
                <p style={IsCompleted ? {textDecoration: 'line-through'} : {}} className="text">{myTodoText}</p>
              </div>
              <div className="row">
                <div className="col-md-2 p-0">
                  <button onClick={handleDelete} className="btn btn-danger w-75 px-0 m-0 my-1">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }

export default ToDoItem