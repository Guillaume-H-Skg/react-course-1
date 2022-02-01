import React, { useState, useEffect } from 'react';

import './bootstrap.min.css'
import './App.css'
import AddTask from './component/AddTask';
import { Todo } from './component/model';
import TodoList from './component/TodoList';
import FilterTask from './component/FilterTask';


//Display Data (pas de props car parent) 
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [assignTo, setAssignTo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const [status, setStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);



  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo && assignTo && date && priority) {
      console.log(todos);
      setTodos([...todos, { id: Math.floor(Math.random() * 100), todo, assignTo, date, priority, isDone: false }])
      setTodo('');
      setAssignTo('');
      setDate('');
      setPriority('');
    }
  }


  

  useEffect(() => {
    const handleFilterTask = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.isDone === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.isDone === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    handleFilterTask();
  }, [todos, status])

  return (
    <div className='row py-5 mx-auto App'>
      <h2 className='text-center mb-2'>To do list React course</h2>
      <AddTask
        todo={todo}
        assignTo={assignTo}
        date={date}
        priority={priority}
        setTodo={setTodo}
        setAssignTo={setAssignTo}
        setDate={setDate}
        setPriority={setPriority}
        handleAddTask={handleAddTask}
      />
      <FilterTask
        isDone
        status={status}
        setStatus={setStatus}
        // handleFilterTask={handleFilterTask}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

//Manipulate Data

export default App;