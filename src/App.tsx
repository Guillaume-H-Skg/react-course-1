import React, { useState } from 'react';
import List from './component/List';
import './bootstrap.min.css'

//Create Data
const card = {
  id: 0,
  title: 'todo1',
  description: 'todo1',
  date:'12-23-2024',
  assignTo:'Roger'
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

const [title, setTitle] = useState();
const [Description, setDescription] = useState();


const handleSubmit= (e:any) => {

  list.items.push(card);
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
  </div>
  );
}


//Manipulate Data


export default App;