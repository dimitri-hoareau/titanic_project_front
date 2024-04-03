import React, { useState, useEffect } from 'react';
import DataTable from './DataTable'
import {fakeData} from './fakeData.js'
import './App.css'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/passengers/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 
  
  console.log(data)

  return (
    <>
  <DataTable data={data} />
    </>
  )
}

export default App
