import { v4 as uuidv4 } from 'uuid';
import { useState ,useContext } from "react";
import check from "../images/icon-check.svg"
import { ThemeContext } from "./App"


const TodoForm = ({addTodo}) => {
    const [isSubmitted,setIsSubmitted] = useState(false)

    const [todo,setTodo] = useState ({
        task : ' ',
        id : ' ',
        completed : false
    })

    const handleInputChange = (e) => {
        setTodo({...todo,task:e.target.value})
        setIsSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)

        if (todo.task.trim()) {
            addTodo({...todo,id:uuidv4()})
            setTodo({...todo,task:""})
        }
    }

    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? 'hsl(234, 11%, 52%)' : 'white',
        color: darkTheme ? ' hsl(0, 0%, 98%)' : ' hsl(235, 19%, 35%)',
        border : darkTheme ? '1px solid hsl(234, 11%, 52%)' : 'none',
    }

    const check_style = {
        marginTop:'-7px',
        width:'15px',
        marginLeft:'-5px'
    }

    return ( 
        <form onSubmit={handleSubmit} className = "form" >
            <input 
                type= "text" 
                onChange={handleInputChange}
                placeholder = "Type a new todo..."
                style={themeStyles}/>
            <div>
                {isSubmitted ? 
                <img 
                src={check}
                className="check-icon"
                alt = "close-icon"
                style={check_style} />
                : <nav style={themeStyles}> {""} </nav>
                }
            </div>
        </form>
     );
}
 
export default TodoForm;