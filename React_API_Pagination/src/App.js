import React, { useState, useEffect,Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Countries from './components/Countries';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setData(response.data)
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })

  }, []);

  return (
    <Fragment>
      <Header title="React pagination" />
      <div className="container px-2">
        <Countries 
          data={data} 
          itemsPerPage={10} 
          searchByData={[
            { label: 'Search by country', value: 'name' },
            { label: 'Search by capital', value: 'capital' },
            { label: 'Search by region', value: 'region' },
            { label: 'Search by subregion', value: 'subregion' },
        
          ]} 
        />
       
      </div>
    </Fragment>
  );
}

export default App;
