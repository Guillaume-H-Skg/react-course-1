import React from 'react';
import '../App.css'

interface Props {
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTask = ({ setStatus, }: Props) => {
    return <div className='d-flex justify-content-center mt-3'>
        <div className="input-group">
            <label className="input-group-text">Status</label>
            <select className='form-select' onChange={(e) => setStatus(e.target.value)} name="todos">
                <option value="all">Tous</option>
                <option value="completed">Terminées</option>
                <option value="uncompleted">En cours</option>
            </select>
        </div>
    </div>
};

export default FilterTask;
