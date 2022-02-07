import React from 'react';
import '../App.css'

interface Props {
    // isDone: boolean;
    // status: string;
    setStatus: any;
    // handleFilterTask:() =>void;
}

const FilterTask = ({ setStatus, }: Props) => {
    return <div className='d-flex justify-content-center'>
        <div className="input-group">
            <label className="input-group-text">Filtre de status</label>
            <select className='form-select w-50 max-w' onChange={(e) => setStatus(e.target.value)} name="todos">
                <option value="all">Tous</option>
                <option value="completed">Terminées</option>
                <option value="uncompleted">En cours</option>
            </select>
        </div>
    </div>
};

export default FilterTask;
