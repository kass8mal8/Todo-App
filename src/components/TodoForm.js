import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import check from "../images/icon-check.svg"

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

    const check_style = {
        marginTop:'-7px',
        width:'15px',
        marginLeft:'-5px'
    }

    return ( 
        <form onSubmit={handleSubmit} className = "form">
            <input 
                type= "text" 
                onChange={handleInputChange}
                placeholder = "Type a new todo..."/>
            <button>
                {isSubmitted ? 
                <img 
                src={check}
                className="check-icon"
                alt = "close-icon"
                style={check_style} />
                : <nav> {""} </nav>
                }
            </button>
        </form>
     );
}
 
export default TodoForm;