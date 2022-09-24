
import Todo from "./Todo";
import { ThemeContext } from "./App";
import {useContext } from "react"

const TodoList = ({todos,setTodos}) => {

    const handleFilterTodo = (id) => {
        todos.filter(todo => todo.id !== id)
    }

    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? 'hsl(234, 11%, 52%)' : 'white',
        color: darkTheme ? ' hsl(0, 0%, 98%)' : ' hsl(235, 19%, 35%)',
        marginTop:'15px'
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
        </div>
     );
}
 
export default TodoList;