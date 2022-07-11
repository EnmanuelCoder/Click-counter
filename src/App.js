import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logo from "./img/logo.png";
import { useState } from "react";


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <figure className="freecodecamp-logo-contenedor">
        <img className='freecodecamp-img' src={logo} alt="Lofo de freecodecamp" />
      </figure>
      <div className='contenedor-principal'>
        <Contador numeroClics={numClics} />
        <Boton 
          texto="Clic"
          esBotonDeClic={ true }
          manejarClic={manejarClic}
        />
        <Boton 
          texto="Reiniciar"
          esBotonDeClic={ false }
          manejarClic={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
