import React, { useState, useEffect, Fragment } from 'react';
import Vista from './components/Vista';
import Axios from 'axios';


function App() {

  const consultarApi = async () => {

    const url = `https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763`

    const resultado = await Axios(url);

    console.log(resultado);
  }

  useEffect(() => {
    consultarApi();
  });



  return (
    <div className="App">
      <Vista />
    </div>
  );
}

export default App;
