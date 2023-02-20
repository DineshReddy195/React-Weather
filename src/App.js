import './App.css';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.css'
import Cities from './Components/Cities';
import { Context } from './Components/Context';
import { useState } from 'react';

function App() {
  const [details,setDetails]=useState([])
  const [city,setCity]=useState(['London','New York','Los Angeles','Las Vegas'])
  const [search,setSearch]=useState("")
  return (
    <div className="App">
      <Context.Provider value={[details,setDetails,city,setCity,search,setSearch]}>
      <Nav/>
      <Cities/>
      </Context.Provider>
    </div>
  );
}

export default App;
