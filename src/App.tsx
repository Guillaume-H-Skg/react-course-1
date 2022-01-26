import React, { useState } from 'react';
import List from './component/List';
import './bootstrap.min.css'

//Create Data
const card = {
  // id: 0,
  title: 'todo1',
  description: 'todo1',
  // date: '12-23-2024',
  // assignTo: 'Roger'
}

const list = {
  id: 0,
  title: 'Title 1',
  items: [card],
}

// const list2 = {
//   id: 0,
//   title: 'Title 2',
//   items: [card],
// }


// const data = [list, list2];


//Display Data (pas de props car parent) 
const App = () => {

  const [data, setData] = useState([list]);

  const [title, setTitle] = useState('');
  const [Description, setDescription] = useState('');


  const handleSubmit = (e: any) => {
    let card3 = {
      // id: 0,
      title: title,
      description: Description,
      // date: '12-23-2024',
      // assignTo: 'Roger'
    }
    list.items.push(card3);
    setData([list]);

    e.preventDefault();
  }



  return (
    <div className='row py-5 mx-auto'>
      {
        data.map((currentElement) => <div className='col-6'><List
          id={currentElement.id}
          title={currentElement.title}
          items={currentElement.items} /></div>
        )
      }
      <div className="row mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom de la tâche : </label>
            <input className="form-control" type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description de la tâche : </label>
            <textarea
              value={Description}
              onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
          </div>
          <p>{title}</p>
          <p>{Description}</p>
          <button className='btn btn-primary'>Add Card</button>
        </form>
      </div>
    </div>
  );
}


//Manipulate Data


export default App;