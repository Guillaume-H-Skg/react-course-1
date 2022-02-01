import React from 'react';

// priority: number;
// date: Date;

interface Props {
    todo: string;
    assignTo: string;
    priority: string;
    date: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    setAssignTo:React.Dispatch<React.SetStateAction<string>>;
    setPriority:React.Dispatch<React.SetStateAction<string>>;
    setDate:React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e:React.FormEvent) =>void;
}

const AddTask = ({todo, assignTo, priority, date, setTodo, setAssignTo, setPriority, setDate, handleAddTask}: Props) => {
    return <form onSubmit={handleAddTask}>
        <div className="form-floating mb-3 w-50 mx-auto">
            <input className="form-control" placeholder="Ajouter une tâche" type="text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            />
            <label htmlFor='title'>Nom de la tâche : </label>
        </div>
        <div className="form-floating mb-3 w-50 mx-auto">
            <input className="form-control" placeholder="Attribuer la tâche" type="text"
            value={assignTo}
            onChange={(e)=>setAssignTo(e.target.value)}
            />
            <label htmlFor='title'>Attribué à : </label>
        </div>
        <div className="form-floating mb-3 w-50 mx-auto">
            <input className="form-control" placeholder="Attribuer la date de la tâche" type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            />
            <label htmlFor='title'>Date : </label>
        </div>
        <div className="form-floating mb-3 w-50 mx-auto">
            <input className="form-control" placeholder="Attribuer la priorité de la tâche" type="text"
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}
            />
            <label htmlFor='title'>Priorité : </label>
        </div>
        <div className="text-center my-3">
            <button className="btn btn-success" type="submit">Ajouter</button>
        </div>
    </form>;
};

export default AddTask;
