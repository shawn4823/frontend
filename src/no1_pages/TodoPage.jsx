import React, { useState, useContext } from 'react'
import TodoTemplate from '../no2_components/todo/TodoTemplate'
import TodoInsert from '../no2_components/todo/TodoInsert'
import TodoList from '../no2_components/todo/TodoList'
import TodoListChild from '../no2_components/todo/TodoListChild'
import TodoContext from '../no0_context/TodoContext'


const TodoPage = () => {

 
  return (
    <TodoTemplate>
      <TodoInsert />
        <TodoList />
      
    </TodoTemplate>
  )
}

export default TodoPage
