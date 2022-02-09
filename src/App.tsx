import React, { useState, useEffect } from 'react';
import './bootstrap.min.css'
import './App.css'
import AddTask from './component/AddTask';
import { List, Todo } from './component/model';
import TodoList from './component/TodoList';
import AddList from './component/AddList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import FilterTask from './component/FilterTask';


const App: React.FC = () => {
  //State used for todos
  const [todo, setTodo] = useState<string>('');
  const [assignTo, setAssignTo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  //State used for filtering task
  const [status, setStatus] = useState<string>('all');
  const [filteredTodosList, setFilteredTodosList] = useState<List[]>([]);

  //State used for list
  const [title, setTitle] = useState<string>('');
  const [listId, setListId] = useState<string>('');
  const [lists, setLists] = useState<List[]>([]);

  //Functions
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo && assignTo && date && priority && listId) {
      const newTodo: Todo = {
        id: (Math.random() + 1).toString(36).substring(7),
        todo: todo,
        assignTo: assignTo,
        date: date,
        priority: priority,
        isDone: false
      }
      lists.forEach(list => {
        if (list.title === listId) {
          list.items.push(newTodo);
        }
      });

      setLists([...lists]);
      setTodo('');
      setAssignTo('');
      setDate('');
      setPriority('');
    } else {
      alert("Un ou plusieurs champs sont vides");
    }

  }

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && !lists.find(list => list.title === title)) {
      const newList: List = {
        id: (Math.random() + 1).toString(36).substring(7),
        title: title,
        items: []
      }
      setLists([...lists, newList]);
      setTitle('');
    }
    if(lists.find(list => list.title === title )){
      alert('Ce nom de liste existe déjà');
    }
    if(title===''){
      alert("Le champs est vide");
    }
  }

  useEffect(() => {
    const handleFilterTask = () => {
      switch (status) {
        case 'completed':
          setFilteredTodosList(
            lists.map((list: any) => {
              return {...list, items: list.items.filter((todo: any) => todo.isDone === true)}
            })
          )
          break;
        case 'uncompleted':
          setFilteredTodosList(
            lists.map((list: any) => {
              return {...list, items: list.items.filter((todo: any) => todo.isDone === false)}
            })
          )
          break;
        default:
          setFilteredTodosList(lists);
          break;
      }
    }
    handleFilterTask();
  }, [lists, status])

  //DragEnd logic
  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    console.log("destination", destination, "source", source, "DgId", draggableId)

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const listSource = lists.find(list => list.id === source.droppableId);
    const listDestination = lists.find(list => list.id === destination.droppableId);

    if (listSource && listDestination) {
      const todo = listSource.items.splice(source.index, 1)[0];
      listDestination.items.splice(destination.index, 0, todo);

      setLists([...lists]);
    }
  }

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
                listId={listId}
                setListId={setListId}
                lists={lists}
              />
            </div>
            <div className="p-2">
              <AddList
                title={title}
                setTitle={setTitle}
                handleAddList={handleAddList}
              />
              <FilterTask
                setStatus={setStatus}
              />
            </div>
          </div>
          {lists.length === 0 ?
            <h2 className="mt-5">
              <span className="badge bg-react">Ajouter une liste pour ajouter des tâches</span>
            </h2>
            : ''}
          <TodoList
            lists={lists}
            setLists={setLists}
            todos={todos}
            setTodos={setTodos}
            filteredTodosList={filteredTodosList}
          />
        </div>
      </div>
    </DragDropContext>
  );
}
export default App;