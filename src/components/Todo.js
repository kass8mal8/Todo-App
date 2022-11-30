import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"
import { useState } from "react"


const Todo = ({todo, handleFilterTodo}) => {

    const [isCompleted,setIsCompleted] = useState (false)

    const completeStyles = {
        textDecoration:isCompleted ? 'line-through' : 'none',
        color:'#ccc'
    }

    const todoStyles = {
        marginTop:'25px',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        borderBottom :'1px solid hsl(236, 33%, 92%)'
    }

    const handleCompleted = () => { setIsCompleted(true) }
  
    return ( 
        <div style={todoStyles} className = "todo-content" >
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
                style = {completeStyles}>
                {todo.task} 
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