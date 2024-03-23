import { useLocation } from "react-router-dom";
import { LogoVol } from "./Icons";
import { useState } from "react";

export function CatchIt() {
  const location = useLocation();
  const codigoSala = location.state?.codigoSala;
  const nickname = location.state?.nickname;
  const [volumen, setVolumen] = useState(10);

  const handleVolumen = (event) => {
    setVolumen(event.target.value);
  };

  return (
    <section>
      <header className="flex justify-between">
        <div className="m-3 rounded-md border-black border-2 w-56 h-36 flex flex-col">
          <div className="flex gap-2 m-3">
            <LogoVol />
            <input type="range" min={0} max={10} onChange={handleVolumen} />
            <p>{volumen}</p>
          </div>
          <div className="m-2 font-medium">
            Nombre: {nickname.toUpperCase()}
          </div>
          <div className="m-2 font-medium">Codigo de Sala: {codigoSala}</div>
        </div>
        <div className="border-black border-2 rounded-md mt-3 flex-grow h-72 flex flex-col items-center">
          <div>
            ¿Pregunta?
          </div>
          <div className="flex justify-around gap-3">
            <div>Respuesta 1</div>
            <div>Respuesta 2</div>
            <div>Respuesta 3</div>
            <div>Respuesta 4</div>
          </div>
        </div>
        <div className="border-black border-2 rounded-full m-5 flex flex-col justify-center items-center w-20 h-20 font-medium">
          <div>
            60
          </div>
          {/* //Hacer skip */}
        </div>
      </header>
      <main></main>
    </section>
  );
}
