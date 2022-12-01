import React,{ useState } from "react";
import "../styles/app.css"
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'

export const ThemeContext = React.createContext()

const App = () => {
    const [todos,setTodos] = useState ([
      {task:'Complete online JavaScript course', id:uuidv4(), completed:false},
      {task:'Jog around the park 3x', id:uuidv4(), completed:false},
      {task:'10 minutes meditation', id:uuidv4(), completed:false},
      {task:'Read for 1 hour', id:uuidv4(), completed:false},
      {task:'Pick up groceries', id:uuidv4(), completed:false},
      {task:'Complete Todo App on Frontend Mentor', id:uuidv4(), completed:false}
    ])
    const [darkTheme,setDarkTheme] = useState (false)
    
    const addTodo = (todo) => {
        setTodos([todo,...todos])
    }

    const toggleTheme = () => {
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


    return (
      <ThemeContext.Provider value = {darkTheme} >
          <Header toggleTheme = {toggleTheme} />
          <TodoForm addTodo={addTodo} />
          <main className="container" >
            <TodoList todos = {todos} setTodos = {setTodos} />
          </main>
      </ThemeContext.Provider>
    );
  }
  
  export default App;
  