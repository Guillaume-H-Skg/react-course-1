import React from 'react';

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAddList: (e: React.FormEvent) => void;
}

const AddList = ({ title, setTitle, handleAddList }: Props) => {
    return <form onSubmit={handleAddList}>
        <div className="card mx-1">
            <div className="card-header">
                <h5>Ajouter une liste</h5>
            </div>
            <div className="card-body">
                <div className="d-flex align-content-between flex-wrap">
                    <div className="mb-3 mx-auto flex-fill">
                        <label htmlFor='title'>Nom de la liste : </label>
                        <input className="form-control form-control-sm" placeholder="Ajouter une liste" type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success btn-react" type="submit">Ajouter</button>
                </div>
            </div>
        </div>
    </form>

}

export default AddList;