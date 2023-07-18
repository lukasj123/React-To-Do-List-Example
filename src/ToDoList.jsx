import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import ToDoItem from './ToDoItem';
import { useState, useRef } from 'react'

function ToDoList() {

  const [ToDoItems, setToDoItems] = useState([]);
  const inputRef = useRef();


  function handleDelete(id) { // 
    setToDoItems(
      ToDoItems.filter((ToDoItem) => {
        if(ToDoItem.id === id) {
          return ToDoItem.id !== id;
        }
      })
    )
  }

  function handleAdd() {
    setToDoItems([...ToDoItems, {
      text: inputRef.current.value,
      id: Date.now()}
    ])
    console.log(inputRef.current.value) // Check current value
    inputRef.current.value = '' // This line clears the input menu
  }

  return (
    <>
      <div className="container board mt-3">
        <div className="row text-center">
          <h1>To Do List:</h1>
          <p>
            Click 'Add' to add a new to do and click a todo to cross it off!
          </p>
        </div>
        <div className="row justify-content-center text-center">
          {/* To Do Items will go here later */}
          {
            ToDoItems.map( (ToDoItems) => {
              return(
                <ToDoItem key={ToDoItems.id} toDoTask={ToDoItems.text} handleDelete={() => handleDelete(ToDoItem.id)}/>
              )
            })
          }

        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write ToDo Task here..."
                aria-label="ToDoInput"
                ref={inputRef}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary h-100 m-0"
                  type="button"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
