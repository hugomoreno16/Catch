import { LogoHome, LogoAtras } from './Icons'
import { Link, useNavigate } from 'react-router-dom'

export function Sala() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <section className="bg-gradient-to-br from-amber-300 to-yellow-400 h-screen" id="toGame">
                <header className='flex justify-between p-8'>
                <button className='w-10' onClick={goBack} >
                    <LogoAtras />
                </button>
                    <div>
                        <h1 className="font-extrabold animate-flip-down animate-ease-in-out text-5xl">SALA ESPERA</h1>
                    </div>
                    <div className='w-10'>
                        <Link to="/"><LogoHome /></Link>
                    </div>
                </header>
                <main className='flex justify-center mt-32'>
                    <div className="z-10 bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-3xl font-extrabold mb-6 text-center text-black">Empezar a Jugar</h2>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Nombre:</label>
                                <input type="text" id="codigo" name="codigo" placeholder="Introduce un nombre identificativo" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <button id="boton" type="submit" className="w-full px-4 py-2 bg-teal-700 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-white">¡A Jugar!</button>
                        </form>
                    </div>
                </main>
            </section>
        </>
    )
}