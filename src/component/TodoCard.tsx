import React, { useState } from 'react';
import { List, Todo } from './model';
import '../App.css'
import { Draggable } from 'react-beautiful-dnd';


interface Props {
  index: number;
  todo: Todo,
  todos: Todo[],
  lists: List[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

const TodoCard = ({ index, todo, setLists, lists }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const [editAssignTo, setEditAssignTo] = useState<string>(todo.assignTo);
  const [editDate, setEditDate] = useState<string>(todo.date);
  const [editPriority, setEditPriority] = useState<string>(todo.priority);

  const handleDone = (id: string) => {
    setLists(
      lists.map((list: List) => {
          list.items = list.items.map((todo: Todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          );
        return list;
      })
    );
  };

  const handleDelete = (id: string) => {
    setLists(
      lists.map((list: List) => {
          list.items = list.items.filter((todo: Todo) => todo.id !== id)
        return list;
      })
    );
  };

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (editTodo && editAssignTo && editDate && editPriority){
      setLists(
        lists.map((list: List) => {
            list.items = list.items.map((todo: Todo) =>
              todo.id === id ? {
                ...todo,
                todo: editTodo,
                assignTo: editAssignTo,
                date: editDate,
                priority: editPriority,
              } : todo
            );
          return list;
        })
      )
      setEdit(false);
    }else{
      alert("Un ou plusieurs champs sont vides");
    }
  }


  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided) => (
          <form onSubmit={(e) => handleEdit(e, todo.id)}
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
                    <h5 className='card-title'><del>{todo.id} : {todo.todo}</del></h5>

                  ) : (
                    <h5 className='card-title'>{todo.id} : {todo.todo}</h5>
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
                    <input type='text' className='form-control mb-2'
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
                        <span className='btn btn-success btn-sm' onClick={() => handleDone(todo.id)} >Décompléter</span>
                        <span className='btn btn-primary mx-2 disabled btn-sm'>Editer</span>
                        <span className='btn btn-danger btn-sm' onClick={() => handleDelete(todo.id)} >Supprimer</span>
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
                        <span className='btn btn-success btn-sm' onClick={() => handleDone(todo.id)} >Compléter</span>
                        {edit ? (
                          <span className='btn btn-primary mx-2 disabled btn-sm'>Editer</span>
                        ) : (
                          <span className='btn btn-primary mx-2 btn-sm' onClick={() => {
                            if (!edit && !todo.isDone) {
                              setEdit(!edit)
                            }
                          }}>Editer</span>
                        )}
                        <span className='btn btn-danger btn-sm' onClick={() => handleDelete(todo.id)} >Supprimer</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </form>
        )
      }
    </Draggable>)
};

export default TodoCard;
