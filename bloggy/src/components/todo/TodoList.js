import React,{useState, useEffect} from 'react'
import axios from 'axios'
import AllTodo from './AllTodo'

const TodoList = () => {
  const [allTodo, setAllTodo] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5001/get/todo')
    .then(res => setAllTodo(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {allTodo.map(element => {
        return(
           <AllTodo todo={element} key={element.title}/>
        )
      })}
    </div>
  )
}

export default TodoList
