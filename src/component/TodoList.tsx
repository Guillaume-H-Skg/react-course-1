import React from 'react';
import { Todo } from './model';
import TodoCard from './TodoCard';
import '../App.css'
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    
    filteredTodos: Todo[];
    filteredCompletedTodos:Todo[];

    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}


const TodoList = ({ todos, setTodos, filteredTodos, filteredCompletedTodos, completedTodos, setCompletedTodos,  }: Props) => {
    return (<div className="container my-5 mx-auto">

        <div className="d-flex flex-wrap">
            <Droppable droppableId="TodoList">
                {
                    (provided) => (
                        <div className="col list-highlight p-3 mx-2 mt-2"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <h4><span className="badge bg-react">TO DO 1</span></h4>
                            <div className="list-group">
                                {
                                    filteredTodos?.map((todo, index) => (
                                        <TodoCard
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={todos}
                                            setTodos={setTodos}
                                        />
                                    )
                                    )
                                }
                                {provided.placeholder}
                            </div>
                        </div>

                    )
                }
            </Droppable>
            <Droppable droppableId="TodoRemove">
                {
                    (provided) => (
                        <div className="col list-highlight p-3 mx-2 mt-2"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <h4><span className="badge bg-react">TO DO 2</span></h4>
                            <div className="list-group">
                                {
                                    filteredCompletedTodos?.map((todo, index) => (
                                        <TodoCard
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={completedTodos}
                                            setTodos={setCompletedTodos}
                                        />
                                    )
                                    )
                                }
                                {provided.placeholder}
                            </div>
                        </div>

                    )
                }
            </Droppable>

        </div>


    </div>);
};

export default TodoList;
