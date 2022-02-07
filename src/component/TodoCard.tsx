import React, { useState } from 'react';
import { Todo } from './model';
import '../App.css'
import { Draggable } from 'react-beautiful-dnd';


interface Props {
    index: number;
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ index, todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const [editAssignTo, setEditAssignTo] = useState<string>(todo.assignTo);
    const [editDate, setEditDate] = useState<string>(todo.date);
    const [editPriority, setEditPriority] = useState<string>(todo.priority);



    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    // const handleDone = (id: number) => {
    //     setTodos(
    //         todos.map((item) => {
    //             if (item.id === id) {
    //                 return {
    //                     ...item,
    //                     isDone: !item.isDone,
    //                 };
    //             }
    //             return item;
    //         })
    //     );
    // };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (
                todo.id === id ? {
                    ...todo,
                    todo: editTodo,
                    assignTo: editAssignTo,
                    date: editDate,
                    priority: editPriority,
                } : todo
            ))
        );
        setEdit(false);
    }

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (

                    <form
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >

                        <div className="card my-4">
                            <div className="card-header">
                                {edit ? (
                                    <div>
                                        <label>Modifier le titre : </label>
                                        <input className='form-control'
                                            value={editTodo}
                                            onChange={(e) => setEditTodo(e.target.value)} />
                                    </div>
                                ) : (
                                    todo.isDone ? (
                                        <h5 className='card-title'><del>{todo.todo}</del></h5>

                                    ) : (
                                        <h5 className='card-title'>{todo.todo}</h5>
                                    ))
                                }
                            </div>
                            <div className="card-body">
                                {edit ? (
                                    <div className='form-group'>
                                        <label>Assigné  à :</label>
                                        <input type='text' className='form-control'
                                            value={editAssignTo}
                                            onChange={(e) => setEditAssignTo(e.target.value)} />
                                        <label className='mt-2'>Date : </label>
                                        <input type='date' className='form-control mb-2'
                                            value={editDate}
                                            onChange={(e) => setEditDate(e.target.value)} />
                                        <label>Priorité : </label>
                                        <input type='text' className='form-control'
                                            value={editPriority}
                                            onChange={(e) => setEditPriority(e.target.value)} />
                                        <div className='text-center'>
                                            <button className='btn btn-primary my-3'>Savegarder les changements</button>
                                        </div>
                                    </div>
                                ) : (
                                    todo.isDone ? (
                                        <div>
                                            <div className='text-center'>
                                                <h4 className='card-title'><del>Attribué à : {todo.assignTo}</del></h4>
                                            </div>
                                            <div>
                                                <h5 className='card-text mt-3'><del>Date : {todo.date}</del></h5>
                                                <h5 className='card-text mb-3'><del>Priorité : {todo.priority}</del></h5>
                                            </div>
                                            <div className='d-flex flex-row-reverse'>

                                                <span className='btn btn-success' onClick={() => handleDone(todo.id)} >Completed</span>
                                            
                                                 <span className='btn btn-primary mx-2 disabled'>Edit</span>
                    
                                                <span className='btn btn-danger' onClick={() => handleDelete(todo.id)} >Delete</span>
                                            </div>
                                        </div>

                                    ) : (
                                        <div>
                                            <div className='text-center'>
                                                <h4 className='card-title'>Attribué à : {todo.assignTo}</h4>
                                            </div>
                                            <div>
                                                <h5 className='card-text mt-3'>Date : {todo.date}</h5>
                                                <h5 className='card-text mb-3'>Priorité : {todo.priority}</h5>
                                            </div>
                                            <div className='d-flex flex-row-reverse'>

                                                <span className='btn btn-success' onClick={() => handleDone(todo.id)} >Completed</span>
                                                {edit ? (
                                                    <span className='btn btn-primary mx-2 disabled'>Edit</span>
                                                ) : (
                                                    <span className='btn btn-primary mx-2' onClick={() => {
                                                        if (!edit && !todo.isDone) {
                                                            setEdit(!edit)

                                                        }
                                                    }}>Edit</span>
                                                )}
                                                <span className='btn btn-danger' onClick={() => handleDelete(todo.id)} >Delete</span>
                                            </div>
                                        </div>
                                    )
                                )}

                            </div>
                        </div>
                    </form>
                )
            }


        </Draggable>);
};

export default TodoCard;
