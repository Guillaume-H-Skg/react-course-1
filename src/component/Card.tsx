import React from 'react';

//définition de l'interface en TS
interface Card {
    id: number,
    title: string,
    date: Date,
    assignTo: String;
};

//component
const Card = (props: Card) => {

    const { id, title, date, assignTo} = props;

    return (
        <div className="card my-4">
            <div className="card-header">
                <h5 className='card-title'>{id} : {title}</h5>
            </div>
            <div className="card-body">
                <h5 className='card-text'>{date}</h5>
                <h5 className='card-text'>{assignTo}</h5>
            </div>
        </div>
    )

};


//export
export default Card; 