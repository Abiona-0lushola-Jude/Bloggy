import React, {useState} from 'react'


const TodoForm = () => {

    const [todo, setTodo] = useState({
        title:''
    })

    function handleChange(event){
        const {name, value} = event.target
        setTodo(prevState=>{
            return{
                ...prevState,
                [name]:value
            }
        })
    }


    function handleSubmit (event){
        event.preventDefault()
        console.table(todo)
    }

  return (
    <div>
        <form action="/create/todo" method="post">
            <label htmlFor="title">Title: </label>
            <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder='Title'
            value={todo.title}
            onChange={handleChange}
             />
             <div className="btn">
                <button type='reset' onClick={()=> setTodo(prev=> prev.title=" ")}>Cancel</button>
                <button type="submit" onClick={handleSubmit}>Add Todo</button>
             </div>
        </form>
    </div>
  )
}

export default TodoForm
