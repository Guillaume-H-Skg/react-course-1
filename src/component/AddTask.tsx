import React from 'react';
import { List } from './model';

interface Props {
    listId:string;
    lists: List[];
    todo: string;
    assignTo: string;
    priority: string;
    date: string;
    setListId:React.Dispatch<React.SetStateAction<string>>;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setAssignTo: React.Dispatch<React.SetStateAction<string>>;
    setPriority: React.Dispatch<React.SetStateAction<string>>;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => void;
}

const AddTask = ({ todo, assignTo, priority, date, setTodo, setAssignTo, setPriority, setDate, handleAddTask, listId, setListId, lists}: Props) => {
    return <form onSubmit={handleAddTask}>
        <div className="card mx-1">
            <div className="card-header">
                <h5>Ajouter une tâche</h5>
            </div>
            <div className="card-body">
                <div className="d-flex align-content-between flex-wrap">
                    <div className="me-2 mb-3 mx-auto flex-fill">
                        <label htmlFor='title'>Nom de la tâche : </label>
                        <input className="form-control form-control-sm" placeholder="Ajouter une tâche" type="text"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>
                    <div className="me-2 mb-3 mx-auto flex-fill">
                        <label htmlFor='title'>Attribué à : </label>
                        <input className="form-control form-control-sm" placeholder="Attribuer la tâche" type="text"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                        />
                    </div>
                    <div className="me-2 mb-3 mx-auto flex-fill">
                        <label htmlFor='title'>Date : </label>
                        <input className="form-control form-control-sm" placeholder="Attribuer la date de la tâche" type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="me-2 mb-3 mx-auto flex-fill">
                        <label htmlFor='title'>Priorité : </label>
                        <input className="form-control form-control-sm" placeholder="Attribuer la priorité de la tâche" type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </div>
                    <div className=" mb-3 mx-auto flex-fill">
                        <label htmlFor='title'>Choix de la liste</label>
                        <select className="form-select form-select-sm"
                            value={listId}
                            onChange={(e) => setListId(e.target.value)}
                        >
                            <option defaultValue={''}>Selectionner une liste</option>
                            {
                                lists.map((list) => {
                                    return (
                                        <option key={list.id} value={list.title}>{list.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success btn-react" type="submit">Ajouter</button>
                </div>
            </div>
        </div>
    </form>
};

export default AddTask;
