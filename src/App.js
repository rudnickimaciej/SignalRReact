import './App.css';
import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom'
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import FilterablePersonTable from './FilterablePersonTable'
import NewPerson  from './NewPerson';
import Clock  from './Clock';


function App() {
  return (
    <div className="App">
       <Clock/>
       <hr/>
      <FilterablePersonTable
        persons = {PRODUCTS}
      /> 
      <hr/>
      <NewPerson/>
     
     
     </div>
  );
  useEffect(()=>{

  },)
}
const PRODUCTS = [
  {name: 'Maciej', lastName: 'Rudnicki', age: 21, id: 1},
  {name: 'Piotr', lastName: 'Rudnicki', age: 22, id: 2},
  {name: 'Paweł', lastName: 'Białowicz', age: 23, id: 3},
  {name: 'Daniel', lastName: 'Chyliński', age: 24, id: 4},

];


export default App;