import React from 'react'
import TodoForm from './TodoForm'
import '../form.css'
import TodoList from './TodoList'

const todo = () => {
  return (
    <div className='form-container'>
      <h1>Todo Section</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default todo
