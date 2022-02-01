import React from 'react';

interface Props {
    isDone:boolean;
    status:string;
    setStatus:any;
    // handleFilterTask:() =>void;
}

const FilterTask = ({setStatus,}:Props) => {
    return <div>
        <select onChange={(e)=>setStatus(e.target.value)} name="todos">
            <option value="all">Tous</option>
            <option value="completed">Terminées</option>
            <option value="uncompleted">En cours</option>
        </select>
    </div>;
};

export default FilterTask;
