import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"
import { useState } from "react";


const Todo = ({todo,handleFilterTodo}) => {
    const [isClicked,setIsClicked] = useState(false)
  
    return ( 
        <div >
            <li><img src={check} alt = "check-icon" className="check-icon"/></li>
            <li className="task"> {todo.task} </li>
            <li><img 
                src={cross}
                alt = "close-icon" 
                className="close-icon"
                onClick={() => handleFilterTodo(todo.id)}/></li>
        </div>
     );
}
 
export default Todo;