import React, { useRef } from 'react'
import logo from './logo.png'


function Input({input,addTodo}) {
    const title = useRef();
    const dis = useRef();
    const date = useRef();
    function handleSubmit(e){
        e.preventDefault();
        let x= {
            id:Date.now(),
            title:title.current.value,
            discription:dis.current.value,
            date:date.current.value,
            todos:[]
        }
        input(false);
        addTodo(pre=>[...pre,x]);
    }
  return (
    <div className='input-field'>
        <div className="header-field flex flex-col items-center">
            <img src={logo} alt='Logo' width='200px' />
            <h2>Create Post</h2>
        </div>
        <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
            <label className='p-3 m-2' htmlFor="title">Project Name</label>
            <input ref={title} className='p-3 m-2' name="title" id='title' type='text' required />
            <label className='p-3 m-2' htmlFor="discription">Project Discription</label>
            <input ref={dis} className='p-3 m-2' name="discription" id='discription' type='text' required/>
            <label className='p-3 m-2' htmlFor="Date">Date</label>
            <input ref={date} className='p-3 m-2' name="date" id='date' type='date' required/>
            <div className='p-3'>
                <input className='p-3 m-2' id='save' type='submit'  value='Save'/>
                <input className='p-3 m-2' id='cancel' type='button' onClick={()=>input(false)}  value='Cancel'/>
            </div>
        </form>
    </div>
  )
}

export default Input
