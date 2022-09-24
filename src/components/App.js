import React,{ useState } from "react";
import "../style.css"
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const ThemeContext = React.createContext()

const App = () => {
    const [todos,setTodos] = useState ([])
    const [darkTheme,setDarkTheme] = useState (true)
    
    const addTodo = (todo) => {
        setTodos([todo,...todos])
    }

    const toggleTheme = () => {
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }


    return (
      <ThemeContext.Provider value = {darkTheme} >
        <header>
            <Header toggleTheme = {toggleTheme} />
        </header>
          <TodoForm addTodo={addTodo} />
        <main className="container" >
          <TodoList todos = {todos} setTodos = {setTodos} />
        </main>
      </ThemeContext.Provider>
    );
  }
  
  export default App;
  