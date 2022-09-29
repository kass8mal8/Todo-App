
import Todo from "./Todo";
import { ThemeContext } from "./App";
import {useContext } from "react"

const TodoList = ({todos,setTodos}) => {

    const handleFilterTodo = (id) => {
        const new_todos = todos.filter(todo => todo.id !== id)
        setTodos(new_todos)
    }

    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? 'hsl(234, 11%, 52%)' : 'white',
        color: darkTheme ? ' hsl(0, 0%, 98%)' : ' hsl(235, 19%, 35%)',
        border : darkTheme ? '1px solid hsl(234, 11%, 52%)' : 'none',
        marginTop:'-25px'
    }
    
    const nav_style = {
        listStyle : 'none',
        color : '#ddd',
        display :'grid',
        gridTemplateColumns : '50% 50%',
        fontSize : '13px',
        gap:'30px',
        marginLeft : '10px'
    }

    return ( 
        <div className="card-layout" style={themeStyles}>
            <ul>
            {todos.map(todo => (
                <Todo 
                    handleFilterTodo = {handleFilterTodo}
                    todo = {todo}
                    key = {todo.id} />
            ))}
            </ul>

            <nav style = {nav_style}>
                <li> {todos.length} items left </li>
                <li>Clear completed</li>
            </nav>

        </div>
     );
}
 
export default TodoList;