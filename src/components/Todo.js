import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"
import { useState, useContext } from "react"
import '../styles/todo.css'
import { ThemeContext } from "./App"


const Todo = ({todo, handleFilterTodo}) => {

    const [isCompleted,setIsCompleted] = useState (false)

    const completeStyles = {
        textDecoration: isCompleted ? 'line-through' : 'none',
        color:'#ccc'
    }

    const darkTheme = useContext(ThemeContext)
    const themeStyles = { color: darkTheme ? ' hsl(0, 3%, 81%)' : ' hsl(235, 19%, 35%)', }

    const handleCompleted = () => { 
        setIsCompleted({...todo,completed:true}) 
        console.log(todo.completed);
    }
  
    return ( 
        <div className = "todo-content" style={themeStyles}>
            {isCompleted && 
                <li>
                    <img 
                        src={check} 
                        alt = "check-icon" 
                        className="check-icon"/>
                </li>
            }
            <li 
                className="task" 
                onClick={handleCompleted}
                style = {completeStyles}> {todo.task} 
            </li>
            <li>
                <img 
                    src={cross}
                    alt = "close-icon" 
                    className="close-icon"
                    onClick={() => handleFilterTodo(todo.id)}/>
            </li>
        </div>
     );
}
 
export default Todo;