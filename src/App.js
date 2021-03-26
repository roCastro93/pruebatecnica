import React, { useState, useEffect } from 'react';
import Vista from './components/Vista';
import Axios from 'axios';

function App() {
  //hook a utilizar
  const [resultado, setResultado] = useState({});
  const [precio, setPrecio] = useState({});
  const [descripcion, setDescription] = useState({});
  const [garantia, setGaratia] = useState({});


//funcion de llamado a la API
  const consultarApi = async () => {

    const url = (`https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763`
    );
    const resultado = await Axios.get(url);
    //Set de hooks
    setResultado(resultado.data[0]);
    setPrecio(resultado.data[0].prices);
    console.log(resultado.data[0].prices);
  }

  useEffect(() => {
    consultarApi();
  }, [descripcion])



  return (
    <div className="App">
      <Vista
        resultado={resultado}
        precio={precio}
      />
    </div>
  );
}

export default App;
