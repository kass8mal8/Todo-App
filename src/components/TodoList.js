
import Todo from "./Todo";
import { ThemeContext } from "./App";
import {useContext } from "react"
import Footer from "./Footer";

const TodoList = ({todos,setTodos}) => {

    const handleFilterTodo = (id) => {
        const new_todos = todos.filter(todo => todo.id !== id)
        setTodos(new_todos)
    }

    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? 'hsl(234, 11%, 52%)' : 'white',
        color: darkTheme ? ' hsl(235, 19%, 35%)' : ' hsl(0, 0%, 98%)',
        border : darkTheme ? '1px solid hsl(234, 11%, 52%)' : 'none',
        marginTop:'-25px'
        
    }
    
    

    return ( 
        <div>
            <div className="card-layout" style={themeStyles}>
                <ul>
                {todos.map(todo => (
                    <Todo 
                        handleFilterTodo = {handleFilterTodo}
                        todo = {todo}
                        key = {todo.id}
                        todos = {todos} />
                ))}
                </ul>

                <nav>
                    <li> {todos.length} items left </li>
                    <li>Clear completed</li>
                </nav>
            </div>
            <Footer/>
        </div>
     );
}
 
export default TodoList;