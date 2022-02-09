import React from 'react';
import { List, Todo } from './model';
import TodoCard from './TodoCard';
import '../App.css'
import { Droppable } from 'react-beautiful-dnd';

interface Props {
   lists: List[];
   setLists: React.Dispatch<React.SetStateAction<List[]>>;
   todos: Todo[];
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
   filteredTodosList: List[];
}


const TodoList = ({ todos, setTodos, setLists, lists, filteredTodosList }: Props) => {

   return <div className="container my-5 mx-auto">
      <div className="d-flex flex-wrap ref">
         {
            filteredTodosList.map((list) => {
               return (
                  <div key={list.id} className="col list-highlight p-3 mx-2 mt-2 min-w-col">
                     <Droppable droppableId={list.id}>
                        {
                           (provided) => (
                              <div 
                                 ref={provided.innerRef}
                                 {...provided.droppableProps}
                              >
                                 <h4><span className="badge bg-react">{list.title}</span></h4>
                                 <div className="list-group">
                                    {
                                       list.items.map((todo, index ) => {
                                          return <TodoCard
                                             index={index}
                                             todo={todo}
                                             key={todo.id}
                                             todos={todos}
                                             lists={lists}
                                             setLists={setLists}
                                             setTodos={setTodos}
                                          />
                                       }
                                       )
                                    }
                                    {provided.placeholder}
                                 </div>
                              </div>
                           )
                        }
                     </Droppable>
                  </div>
               );
            })
         }
      </div>
   </div>
};

export default TodoList;
