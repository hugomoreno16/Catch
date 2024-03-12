import Registro from './components/Registro';
import {Routes, Route} from "react-router-dom";
import Preguntas from './components/VerPreguntas';
import Bienvenida from './components/RepositorioAdmin';
import Home from './components/Home';
import { LogIn } from "./components/LogIn";
import { IntroducirPreguntas } from "./components/IntroducirPreguntas";
import { CrearPartida } from "./components/CrearPartida";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn home="true"/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/bienvenida' element={<Bienvenida/>} />
        <Route path='/preguntas' element={<Preguntas/>} />
        <Route path="/createPregunta" element={<IntroducirPreguntas />} />
        <Route path="/createPartida" element={<CrearPartida />} />
      </Routes>
    </div>
  );
}
export default App;

