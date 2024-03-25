import { useLocation, useNavigate } from "react-router-dom";
import { LogoPuntos, LogoVidas, LogoVol } from "./Icons";
import { useState, useEffect } from "react";

export function CatchIt() {
  const navigate = useNavigate();
  const location = useLocation();
  const codigoSala = location.state?.codigoSala;
  const nickname = location.state?.nickname;
  const [volumen, setVolumen] = useState(10);
  const [vidas, setVidas] = useState(3);
  const [puntos, setPuntos] = useState(1000);
  const [tiempo, setTiempo] = useState(60);

  useEffect(() => {
    if (!codigoSala) {
      navigate("/");
    }
  }, [codigoSala, navigate]);

  const handleVolumen = (event) => {
    setVolumen(event.target.value);
  };

  return (
    <section className="bg-gradient-to-b from-blue-300 to-zinc-300 max-h-screen h-screen">
      <header className="flex justify-between h-2/5">
        <div className="m-3 rounded-md border-black border-2 w-56 h-48 flex flex-col bg-gradient-to-t from-blue-300 to-zinc-300">
          <div className="flex gap-2 m-3">
            <LogoVol />
            <input type="range" min={0} max={10} onChange={handleVolumen} />
            <p>{volumen}</p>
          </div>
          <div className="m-1 font-medium">Codigo de Sala: {codigoSala}</div>
          <div className="m-1 font-medium">
            Nombre: {nickname.toUpperCase()}
          </div>
          <div className="m-1 font-medium flex items-center gap-2"><LogoVidas/>Vidas: {vidas}</div>
          <div className="m-1 font-medium flex items-center gap-2"><LogoPuntos/>Puntos: {puntos}</div>
        </div>
        <div className="border-black border-2 rounded-lg mt-3 flex-grow h-fit flex flex-col items-center justify-around bg-gradient-to-b from-blue-600 to-blue-300">
          <div className="flex mt-3 w-full justify-around">
            <div className="rounded-full border-2 border-green-300 w-10 h-10 flex justify-center items-center font-medium bg-green-600 text-white">1</div>
            <div className="rounded-full border-2 border-green-300 w-10 h-10 flex justify-center items-center font-medium bg-green-600 text-white">2</div>
            <div className="rounded-full border-2 border-red-500 w-10 h-10 flex justify-center items-center font-medium bg-red-200">3</div>
            <div className="rounded-full border-2 border-red-500 w-10 h-10 flex justify-center items-center font-medium bg-red-200">4</div>
            <div className="rounded-full border-2 border-red-500 w-10 h-10 flex justify-center items-center font-medium bg-red-200">5</div>
            <div className="rounded-full border-2 border-red-500 w-10 h-10 flex justify-center items-center font-medium bg-red-200">6</div>
            <div className="rounded-full border-2 border-red-500 w-10 h-10 flex justify-center items-center font-medium bg-red-200">7</div>
            <div className="rounded-full border-2 border-red-500 w-10 h-10 flex justify-center items-center font-medium bg-red-200">8</div>
          </div>
          <div className="p-8 font-medium text-2xl w-full text-center">
            ¿Quién fue el primer presidente de Estados Unidos?
          </div>
          <div className="flex justify-around w-full mb-2 gap-1 m-1">
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white"><div className="font-medium">A</div><div>George Washington</div></div>
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white"><div className="font-medium">B</div><div>Thomas Jefferson</div></div>
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white"><div className="font-medium">C</div><div>John Adams</div></div>
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white"><div className="font-medium">D</div><div>Abraham Lincoln</div></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="ring-white ring-2 shadow-md shadow-azul-oscuro rounded-full m-5 flex flex-col justify-center items-center min-w-20 h-20 font-medium text-white bg-azul-oscuro">
            {tiempo}
          </div>
          <button className="w-24 ring-white ring-2 shadow-md shadow-azul-oscuro bg-azul-oscuro flex justify-center rounded-lg font-thin text-white h-9 items-center">
            TERMINAR
          </button>
        </div>
      </header>
      <main className="flex flex-col justify-center h-3/5">
       <div>
       <div className="flex justify-around font-medium mb-2">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
        </div>
        <div className="flex justify-around flex-grow">
          <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro"></div>
          <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro"></div>
          <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex cenjustifyter shadow-lg shadow-azul-oscuro"></div>
          <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro"></div>
        </div>
       </div>
      </main>
    </section >
  );
}
