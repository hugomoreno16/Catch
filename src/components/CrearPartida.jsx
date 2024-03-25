import React from 'react';
import { useId } from 'react';
import { LogoHome, LogoAtras } from './Icons';
import { Link, useNavigate } from 'react-router-dom';

export function CrearPartida() {
    const nivel = useId();
    const dificultad = useId();
    const asignatura = useId();
    const rondas = useId();
    const vidas = useId();
    const nombrePartida = useId();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <section className="bg-gradient-to-br from-orange-300 to-rose-600 h-screen">
            <header className="flex justify-between font-extrabold animate-flip-down animate-ease-in-out text-5xl text-center p-10">
                <button className='w-10' onClick={goBack} >
                    <LogoAtras />
                </button>
                <div>
                    <h1>INTRODUCIR PREGUNTAS</h1>
                </div>
                <div className='w-10'>
                    <Link to="/"><LogoHome /></Link>
                </div>
            </header>
            <form>
                <main className='flex flex-col items-center gap-5'>
                    <div>
                        <label className='font-semibold' htmlFor={nombrePartida}>Nombre de la partida: </label><br />
                        <input className='p-3 h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="text" id={nombrePartida} required />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor={nivel}>Nivel De Pregunta: </label><br />
                        <select
                            className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300'
                            id={dificultad}
                            required
                        >
                            <option value="mezcla">Mezcla</option>
                            <option value="1ESO">1 ESO</option>
                            <option value="2ESO">2 ESO</option>
                            <option value="3ESO">3 ESO</option>
                            <option value="4ESO">4 ESO</option>
                            <option value="1BACH">1 BACH</option>
                            <option value="2BACH">2 BACH</option>
                        </select>
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor={dificultad}>Dificultad: </label><br />
                        <select
                            className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300'
                            id={dificultad}
                            required
                        >
                            <option value="mezcla">Mezcla</option>
                            <option value="facil">Fácil</option>
                            <option value="intermedia">Intermedia</option>
                            <option value="dificil">Difícil</option>
                        </select>
                    </div>

                    <div>
                        <label className='font-semibold' htmlFor={asignatura}>Asignatura: </label><br />
                        <select
                            className='h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300'
                            id={dificultad}
                            required
                        >
                            <option value="todo">Todo</option>
                            <option value="Matematicas">Matematicas</option>
                            <option value="Lengua">Lengua</option>
                            <option value="Física">Física</option>
                            <option value="Quimica">Quimica</option>
                            <option value="Biologia">Biologia</option>
                            <option value="Geoolgía">Geoolgía</option>
                            <option value="Inglés">Inglés</option>
                            <option value="Historia">Historia</option>
                            <option value="Francés">Francés</option>
                            <option value="Música">Música</option>
                            <option value="Informatica">Informatica</option>
                            <option value="Plástica">Plástica</option>
                            <option value="Filosofía">Filosofía</option>
                            <option value="Economía">Economía</option>
                        </select>
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor={rondas}>Rondas: </label><br />
                        <input className='p-3 h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="number" id={rondas} required />
                    </div>
                    <div>
                        <label className='font-semibold' htmlFor={vidas}>Vidas: </label><br />
                        <input className='p-3 h-10 w-96 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300' type="number" id={vidas} required />
                    </div>
                </main>
                <div className='flex justify-center mt-10'>
                    <button className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">CREAR PARTIDA</button>
                </div>
            </form>
        </section>
    );
}