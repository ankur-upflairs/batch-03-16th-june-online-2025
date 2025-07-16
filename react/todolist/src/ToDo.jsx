import React, { useState } from "react";

let initialState = [
  {
    task: "wake up 7am",
    isComplete: true,
  },
];
function ToDo() {
  const [todo, setTodo] = useState(initialState);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(null);
  const [editText,setEditText] = useState('')
  function addTask() {
    setTodo([...todo, { task: text, isComplete: false }]);
    setText("");
  }
  function changeStatus(e, i) {
    let newTodo = [...todo];
    newTodo[i].isComplete = e.target.checked;
    setTodo(newTodo);
  }
  function handleEdit(i) {
    setEdit(i)
    setEditText(todo[i].task)
  }
  function handleSave(i){
    let newTodo = [...todo]
    newTodo[i].task = editText 
    setTodo(newTodo)
    setEdit(null)
  }
  function deleteTask(i) {
    let newTodo = [...todo]
    newTodo.splice(i,1)
    setTodo(newTodo)
  }
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button onClick={addTask}>add task</button>
      <ul>
        {todo.map((v, i) => {
          return (
            <li key={i}>
              <input
                onChange={(e) => changeStatus(e, i)}
                type="checkbox"
                checked={v.isComplete}
              />
              {edit == i ? (
                <>
                  <input type="text" onChange={e=>setEditText(e.target.value)}
                  value={editText}  />
                  <button onClick={()=>handleSave(i)}>save</button>
                </>
              ) : (
                <span
                  style={{
                    textDecoration: v.isComplete ? "line-through" : "none",
                  }}
                >
                  {" "}
                  {v.task} {" "}
                  <button onClick={()=>handleEdit(i)}>edit</button>{" "}
                </span>
              )}
              <button onClick={()=>deleteTask(i)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
