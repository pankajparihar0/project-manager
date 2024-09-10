import React, { useState } from 'react'

function Header({todos,addTodo,updatecurrent}) {
    const [add,setAdd] = useState(false);
  return (
    <div className='sidebar'>
      <h2>My Todo List</h2><span><button onClick={()=>setAdd(true)}>+</button></span><hr></hr>
      <ol>
        {todos.map((todo,index)=>(
            <li key={index}><button id={index} onClick={(e)=>updatecurrent(e)}> <h2>{todo.title}</h2> </button></li>
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
