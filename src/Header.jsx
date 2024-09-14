import React, { useState } from 'react'

function Header({todos,addTodo,updatecurrent,current,input}) {
    const [add,setAdd] = useState(false);
  return (
    <div className='sidebar p-3'>
      <h2>My Projects</h2>
      <button className='active p-3 m-2' onClick={()=>input(true)}>Add Project</button>
      <ol>
        {todos.map((todo,index)=>(
            <li key={index}><button  className = {`${(index==current)?'active':undefined} p-3`} id={index} onClick={(e)=>{updatecurrent(e);input(false)}}> <h2>{todo.title}</h2> </button></li>
        ))}
      </ol>
      {add && <form >
        <input type='text' name='title' id='title'/> 
        <input onClick={()=>{
            addTodo(pre=>[...pre,{title:document.getElementById('title').value,
              todos:[]
            }]);
            setAdd(false);
            }} type='button' value='Add'/>
      </form> }
    </div>
  )
}

export default Header
