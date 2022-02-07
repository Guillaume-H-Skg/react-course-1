import React from "react";

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAddList: (e: React.FormEvent) => void;
}

const AddList = ({ title, setTitle, handleAddList }: Props) => {
    return <form onSubmit={handleAddList}>
        <div className="d-flex align-content-between flex-wrap">
            <div className="form-floating me-1 mb-3 mx-auto min-w-input flex-fill">
                <input className="form-control" placeholder="Ajouter une liste" type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor='title'>Nom de la liste : </label>
            </div>
        </div>

        
        <div className="mb-3 text-center">
            <button className="btn btn-outline-success" type="submit">Ajouter</button>
        </div>
    </form>

}

export default AddList;