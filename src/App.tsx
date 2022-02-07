import React, { useState, useEffect } from 'react';

import './bootstrap.min.css'
import './App.css'
import AddTask from './component/AddTask';
import { Todo } from './component/model';
import TodoList from './component/TodoList';
import FilterTask from './component/FilterTask';
import AddList from './component/AddList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [assignTo, setAssignTo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const [status, setStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  // const [title, setTitle] = useState<string>('');

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [filteredCompletedTodos, setFilteredCompletedTodos] = useState<Todo[]>([]);


  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo && assignTo && date && priority) {
      console.log(todos);
      setTodos([...todos, { id: Date.now(), todo, assignTo, date, priority, isDone: false }])
      setTodo('');
      setAssignTo('');
      setDate('');
      setPriority('');
    }else{
      alert('Un ou plusieurs champs sont vides.');
    }
  };

  // const handleAddList = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if(title){
  //     setTitle('');
  //   }
  // }




  useEffect(() => {
    const handleFilterTask = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.isDone === true));
          setFilteredCompletedTodos(completedTodos.filter(completedTodos => completedTodos.isDone === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.isDone === false));
          setFilteredCompletedTodos(completedTodos.filter(completedTodos => completedTodos.isDone === false));
          break;
        default:
          setFilteredTodos(todos);
          setFilteredCompletedTodos(completedTodos);
          break;
      }
    }
    handleFilterTask();
  }, [todos, completedTodos, status])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    
    if(status === 'completed' || status === 'uncompleted'){
        alert("Vous devez mettre le filtre en 'tous' pour pouvoir déplacer les tâches.")
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let completed = completedTodos;

    if (source.droppableId === 'TodoList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodoList') {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);

    }
    setCompletedTodos(completed);
    setTodos(active)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='background-img'>

        <h5 className='bar'>To do list React course</h5>

        <div className='py-2 mx-auto App'>

          <div className="d-flex justify-content-center flex-wrap">
            <div className="p-2">
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
              {/* <AddList
               title={title}
               setTitle={setTitle}
               handleAddList={handleAddList}
              /> */}

              <div className="p-2 mt-2">
                <FilterTask
                  // isDone
                  // status={status}
                  setStatus={setStatus}
                // handleFilterTask={handleFilterTask}
                />

              </div>

              <TodoList
                todos={todos}
                setTodos={setTodos}

                filteredTodos={filteredTodos}
                filteredCompletedTodos={filteredCompletedTodos}

                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
              />

            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}



export default App;