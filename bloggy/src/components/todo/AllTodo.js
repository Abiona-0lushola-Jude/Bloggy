import React, {useState} from 'react'
import './todo.css'

const AllTodo = ({todo}) => {
    // console.log(todo)
    const [check, setCheck] = useState(false)

    console.log(check)
  return (
    <div className={check ? 'checked' : 'todo-container'}>
      <p>{todo.title}</p>
      <input 
      type="checkbox" 
      name="check"
       id="check" 
      onChange={()=> setCheck(prevState => !prevState)}/>
    </div>
  )
}

export default AllTodo
