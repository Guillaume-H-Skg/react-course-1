import React from 'react';
import Card from './Card';

//définition de l'interface en TS
interface List {
  id: number,
  title: string,
  items: any[],
};

//component
const List = (props: List) => {

  //destructuration de props
  const { id, title, items } = props;
  console.log(id, title);

  return (

    <div className="list-group">
      <h5>{title}</h5>
      {items.map((currentElement) => <li className="list-group-item" key={currentElement.id}>
        <Card  
          id={currentElement.id} 
          title={currentElement.title} 
          date={currentElement.date}
          assignTo={currentElement.assignTo}
        />
      </li>)}

    </div>

  )
}

//export
export default List; 