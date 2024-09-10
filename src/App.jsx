import { useState } from "react";
import Header from "./Header";
import Todo from "./componenrt/Todo";

function App() {
  const [todo,setTodo] = useState([]);
  const[curruntTodo,setCurrentTodo] = useState(0);
  function handleChange(e){
    setCurrentTodo(e.currentTarget.id)
  }
  return (
    <>
    <Header todos={todo} updatecurrent={handleChange}  addTodo={setTodo} />
    <Todo todos={todo} current={curruntTodo} todo={(todo)&&todo[curruntTodo]} addTodo={setTodo}/>
    </>
  );
}

export default App;
