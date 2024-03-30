import { useLocation, useNavigate } from "react-router-dom";
import { LogoPuntos, LogoSkip, LogoSiVida, LogoNoVida } from "./Icons";
import { useState, useEffect } from "react";

export function CatchIt() {
  const navigate = useNavigate();
  const location = useLocation();
  const codigoSala = location.state?.codigoSala;
  const nickname = location.state?.nickname;
  const [marcadorPuntos, setMarcadorPuntos] = useState(1000);

  useEffect(() => {
    if (!codigoSala) {
      navigate("/");
    }
  }, [codigoSala, navigate]);

  return (
    <section className="bg-gradient-to-b from-blue-300 to-zinc-300 max-h-screen h-screen">
      <header className="flex justify-between h-3/5">
        <div className="mx-5">
          <div className="flex items-center">
            <div className="ring-white ring-2 shadow-md shadow-azul-oscuro rounded-full m-5 flex flex-col justify-center items-center min-w-24 h-24 font-medium text-white bg-azul-oscuro text-5xl animate-pulse animate-infinite animate-ease-in">
              60
            </div>
            <button className="w-14 ring-white ring-2 shadow-md shadow-azul-oscuro bg-azul-oscuro flex justify-center rounded-lg font-thin text-white h-9 items-center">
              <LogoSkip />
            </button>
          </div>
          <div className="flex gap-1 justify-between m-2">
            <LogoSiVida />
            <LogoSiVida />
            <LogoNoVida />
          </div>
          <div className="flex gap-3 justify-start m-3 text-5xl">
            <LogoPuntos />
            {marcadorPuntos}
          </div>
          <div className="flex gap-3 justify-start ms-4 m-3 text-4xl font-medium">
            Ronda: 3/3
          </div>
        </div>
        <div className="h-full border-black border-2 rounded-lg mt-3 me-5 flex-grow flex flex-col items-center justify-around bg-gradient-to-b from-blue-600 to-blue-300">
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
          <div className="p-8 font-medium text-2xl w-full text-center animate-fade-down animate-ease-in">
            ¿Quién fue el primer presidente de Estados Unidos?
          </div>
          <div className="flex justify-around w-full mb-2 gap-1 m-1">
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white animate-fade-down animate-delay-[1500ms] animate-ease-in"><div className="font-medium">A</div><div>George Washington</div></div>
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white animate-fade-down animate-delay-[2500ms] animate-ease-in"><div className="font-medium">B</div><div>Thomas Jefferson</div></div>
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white animate-fade-down animate-delay-[3500ms] animate-ease-in"><div className="font-medium">C</div><div>John Adams</div></div>
            <div className="border-2 border-black rounded-md w-60 h-fit min-h-28 flex flex-col items-center justify-around bg-azul-oscuro text-white animate-fade-down animate-delay-[4500ms] animate-ease-in"><div className="font-medium">D</div><div>Abraham Lincoln</div></div>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center h-2/5">
        <div>
          <div className="flex justify-around font-medium mb-2">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
          </div>
          <div className="flex justify-around flex-grow">
          <div className="flex justify-around w-full mb-2 gap-1 m-1">
      <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro">
        <div className="flex justify-between items-start w-full text-4xl font-semibold mx-2">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro">
        <div className="flex justify-between items-start w-full text-4xl font-semibold mx-2">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro">
        <div className="flex justify-between items-start w-full text-4xl font-semibold mx-2">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className="h-52 w-60 ring-4 ring-azul-oscuro rounded-lg bg-zinc-400 flex shadow-lg shadow-azul-oscuro">
        <div className="flex justify-between items-start w-full text-4xl font-semibold mx-2">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
          </div>
        </div>
      </main>
    </section >
  );
}
