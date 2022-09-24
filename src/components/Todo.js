import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"


const Todo = ({todo,handleFilterTodo}) => {

    const todoStyles = {
        marginTop:'25px',
        justifyContent:'center',
        alignItems:'center',
        borderBottom :'1px solid hsl(236, 33%, 92%)'
    }
  
    return ( 
        <div style={todoStyles} >
            <li><img src={check} alt = "check-icon" className="check-icon"/></li>
            <li className="task">{todo.task} </li>
            <li><img 
                src={cross}
                alt = "close-icon" 
                className="close-icon"
                onClick={() => handleFilterTodo(todo.id)}/></li>
        </div>
     );
}
 
export default Todo;