import React from 'react';
import { Todo } from './model';
import TodoCard from './TodoCard';
import '../App.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    filteredTodos: Todo[];

}


const TodoList = ({ todos, setTodos, filteredTodos }: Props) => {
    return <div className="list-group w-50 max-w">
        {
            filteredTodos.map((todo) => (
                <TodoCard 
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            )
            )
        }
    </div>;
};

export default TodoList;
