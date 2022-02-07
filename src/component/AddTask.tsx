import React from 'react';

// priority: number;
// date: Date;

interface Props {
    todo: string;
    assignTo: string;
    priority: string;
    date: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setAssignTo: React.Dispatch<React.SetStateAction<string>>;
    setPriority: React.Dispatch<React.SetStateAction<string>>;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => void;
}

const AddTask = ({ todo, assignTo, priority, date, setTodo, setAssignTo, setPriority, setDate, handleAddTask }: Props) => {
    return <form onSubmit={handleAddTask}>
        <div className="card mx-1">
            <div className="card-header">
                <h5>Ajouter une tâche</h5>
            </div>
            <div className="card-body">
                <div className="d-flex align-content-between flex-wrap">
                    <div className="form-floating me-2 mb-3 mx-auto flex-fill">
                        <input className="form-control" placeholder="Ajouter une tâche" type="text"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                        <label htmlFor='title'>Nom de la tâche : </label>
                    </div>
                    <div className="form-floating me-2 mb-3 mx-auto flex-fill">
                        <input className="form-control" placeholder="Attribuer la tâche" type="text"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                        />
                        <label htmlFor='title'>Attribué à : </label>
                    </div>

                    <div className="form-floating me-2 mb-3 mx-auto flex-fill">
                        <input className="form-control" placeholder="Attribuer la date de la tâche" type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label htmlFor='title'>Date : </label>
                    </div>
                    <div className="form-floating me-2 mb-3 mx-auto flex-fill">
                        <input className="form-control" placeholder="Attribuer la priorité de la tâche" type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                        <label htmlFor='title'>Priorité : </label>
                    </div>
                </div>


                <div className="mb-3 text-center">
                    <button className="btn btn-outline-success btn-react" type="submit">Ajouter</button>
                </div>
            </div>
        </div>
    </form>

};

export default AddTask;
