import { useEffect, useState } from "react";
import Header from "./Header";
import Todo from "./componenrt/Todo";
import Input from "./componenrt/Input";

function App() {
  const [todo,setTodo] = useState(JSON.parse(localStorage.getItem('todo'))||[]);
  const [input,setinput] = useState(false);
  const[curruntTodo,setCurrentTodo] = useState(null);
  function handleChange(e){
    setCurrentTodo(e.currentTarget.id)
  }
  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(todo));
  },[todo])
  return (
    <>
    <Header input={setinput} todos={todo} current={curruntTodo} updatecurrent={handleChange}  addTodo={setTodo} />
    {!input&&<Todo todos={todo} updateCurrent={setCurrentTodo} current={curruntTodo} todo={(todo)&&todo[curruntTodo]} addTodo={setTodo}/>}
    {input &&<Input addTodo={setTodo} input={setinput} />}
    </>
  );
}

export default App;
