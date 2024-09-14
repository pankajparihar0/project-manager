import React, { useRef, useState } from 'react'
import logo from './logo.png'

function Todo({todos,addTodo,current,updateCurrent}) {
    const tk=useRef()
    const[addlist,setAddlist] = useState(false);
    const[load,setLoad] =  useState(0);
    console.log(todos);
    function handleChecked(id){
        let x= todos;
        x[current] = {...x[current],
            todos:todos[current].todos.map((todo)=>(todo.id == id)?{...todo,checked:!todo.checked}:todo)
        }
        //console.log(x);
        addTodo(x);
        localStorage.setItem('todo',JSON.stringify(x));
        setLoad((pre)=>pre+10);

    }

    function handleAddTodo(){
        setAddlist(false);
    if(tk.current.value !==""){
            // let x = todos;
            // x[current] = {
            //     ...x[current],todos:[...todos[current].todos,{
            //         checked:false,
            //         todo:tk.current.value,
            //         id:Date.now()
            //     }]
            // }
            // // addTodo(x);
            addTodo(pre=>pre.map((item,index)=>index==current?{...item,todos:[{ checked:false,
                todo:tk.current.value,
                id:Date.now()},...item.todos]}:item))
            //localStorage.setItem('todo',JSON.stringify(x));
            //setLoad((pre)=>pre+10);
            // console.log(todos);
        }
    }

    function handleDelete(id){
        // let x = todos;
        // x[current] = {...x[current],
        //     todos:todos[current].todos.filter((todo)=>todo.id != id)
        // }
        // addTodo(x); 
        addTodo(pre=>pre.map((item,index)=>index==current?{...item,todos:item.todos.filter((todo)=>todo.id != id)}:item))
        //localStorage.setItem('todo',JSON.stringify(x));
        
    }
    function handleDeleteTodo(e){
        console.log(e.currentTarget.id);
        let x= todos.filter(todo=>todo.id != e.currentTarget.id);
        console.log(x)
        updateCurrent(null);
        addTodo(x);
        localStorage.setItem('todo',JSON.stringify(x));
        //addTodo(pre=>pre.filter(todo=>todo.title != e.currentTarget.id));
    }
if(current !=null){
  return (
    <div className='projects p-4'>
        <div className='project-title flex flex-row justify-between'>
            <h2>{todos[current].title}</h2>
            <button id={todos[current].id} onClick={(e)=>handleDeleteTodo(e)}>Delete</button>
        </div>
        <h3>{todos[current].date}</h3>
        <p><b>{todos[current].discription}</b></p>
        
        <div className='mt-4 flex flex-row justify-between' id="task-header">
            <h2>Tasks</h2>
            <button onClick={()=>{setAddlist(true)}}>Add Task</button>
            </div>
        {addlist&& <div className='p-3 m-3'><input ref={tk} className='p-3 m-3' id='todo' type='text'/>
        <button  className='p-3 m-3' onClick={handleAddTodo}>Add</button></div>
        }
        <div className='tasks p-4 items-center'>
        {(todos[current].todos.length !=0)?todos[current].todos.map((list)=>(
            <div className='flex flex-row justify-between'>
             <div>
                <input  type='checkbox' onChange={()=>handleChecked(list.id)} checked={list.checked}/>
                <input className='ml-3'  type='text' value={list.todo} disabled />
            </div>
            <input type='button' value='Clear' onClick={()=>handleDelete(list.id)} id={list.id}/>
            </div>
            )):<h2>No Task Created</h2>}
      </div>
    </div>
  )
}else{
    return (
        <div className='selected flex flex-col justify-center items-center'>
            <img src={logo} alt='Logo' width='200px' />
            <h2>No Post Selected.</h2>
            <p>Select a project or Create One.</p>
           
        </div>
    )
}
}

export default Todo
