import React, { useState } from 'react'
import "./App.css"
import ShowTodo from "./Components/ShowTodo"
const App = () => {
  const [todos,setTodos]=useState([])
  const [todo,setTodo]=useState("")
  const AddTodo=()=>{
    //add to todo
  }
  const removeTodo=(todoId)=>{    
    //remove todo  
  }
  return (
    <div className='container'>
          <h1 className='title'>Add Your Todo</h1>
        <div className='main'>
          <div className='add_todo'>
          <input data-testid="input" type="text" placeholder='Enter your todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <button className='btn' data-testid="add_btn" onClick={AddTodo}>ADD</button>
          </div>
          <div className='show_todo'>
            <ShowTodo todos={todos} removeTodo={removeTodo}/>
          </div>
        </div>
    </div>
  )
}

export default App