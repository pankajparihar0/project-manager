import React, { useState } from 'react'

function Todo({todos,addTodo,current}) {
    const[addlist,setAddlist] = useState(false);
    const[load,setLoad] =  useState(0);
    function handleChecked(){
       
    }
    function handleAddTodo(){
        setAddlist(false);
        let x = todos;
        x[current] = {
            title:x[current].title,
            todos:[...todos[current].todos,{
                checked:false,
                todo:document.getElementById('todo').value,
                id:Date.now()
            }]
        }
        addTodo(x);
        console.log(todos);
    }

    function handleDelete(id){
        let x = todos;
        x[current] = {
            title:x[current].title,
            todos:todos[current].todos.filter((todo)=>todo.id != id)
        }
        addTodo(x);
        setLoad((pre)=>pre+10);
    }
    
(todos[current])&&console.log(todos)
  return (
    <div>
        <h2>{todos[current]&&todos[current].title}</h2>
       {todos[current] && <button onClick={()=>{setAddlist(true)}}>+</button>} 
        {addlist&& <><input id='todo' type='text'/>
        <input type='button' value='Add' onClick={handleAddTodo}/></>}
        <div>
        {(todos[current])&&todos[current].todos.map((list)=>(
            <>
            <input type='checkbox' onChange={handleChecked} checked={list.checked}/>
            <input type='text' value={list.todo} disabled />
            <input type='button' value='Delete' onClick={()=>handleDelete(list.id)} id={list.id}/>
            </>
            ))}
      </div>
    </div>
  )
}

export default Todo
