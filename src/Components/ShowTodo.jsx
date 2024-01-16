import React from 'react';
import { MdDelete } from "react-icons/md";
import "./ShowTodo.css"
const ShowTodo = ({todos,removeTodo}) => {
  return (
    <div className='todo_container'>
      {todos&&todos.map((todo, index) =>{
          return (
            <div className="todo_ele" key={index}>
              <h1 className='todo'>{todo.text}</h1>
             <div data-testid="rm_btn1" onClick={()=>removeTodo(todo.id)}>
               <MdDelete size={30} color='#5352ed'/>
             </div>
            </div>
          )
      })}
    </div>
  )
}

export default ShowTodo