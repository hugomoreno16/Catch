import Registro from './components/Registro';
import {Routes, Route } from "react-router-dom";
import VerPreguntas from './components/VerPreguntas';
import Repositorio from './components/RepositorioAdmin';
import Home from './components/Home';
import { LogIn } from "./components/LogIn";
import { IntroducirPreguntas } from "./components/IntroducirPreguntas";
import { Sala } from "./components/Sala";
import { CrearPartida } from './components/CrearPartida';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn home="true"/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/bienvenida' element={<Repositorio/>} />
        <Route path='/preguntas' element={<VerPreguntas/>} />
        <Route path="/createPregunta" element={<IntroducirPreguntas />} />
        <Route path="/sala" element={<Sala />} />
        <Route path="/createpartida" element={<CrearPartida />} />
      </Routes>
    </div>
  );
}
export default App;

