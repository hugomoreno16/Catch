import {Link, useNavigate} from "react-router-dom";
import {React, useState, useEffect} from 'react'
import { LogoHome } from "./Icons";
import { UseUser } from "../hooks/UseUser";

function Bienvenida() {
    const navigate = useNavigate();
    const{user, setUser} = UseUser();
    const[error, setError] = useState();
    const [filtro, setFiltro] = useState("")
    const [partidasFiltradas, setPartidasFiltradas] = useState([]);
    const cerrarSesion = () =>{
        navigate("/");
        sessionStorage.removeItem("userId");
        setUser();
    }
    useEffect(() =>{
        if(!user){
            navigate("/");
        }else{
            setPartidasFiltradas(user.partidas.filter(partida =>
                partida.nombre.toLowerCase().includes(filtro.toLowerCase())
            ))
        }
    },[])

    const filtrarPartidas = (event) => {
        setFiltro(event.target.value)
    }

    return (
        <>
            {
                user ? (
                    <section className="bg-gradient-to-br from-orange-300 to-rose-600 h-screen">
                <button onClick={cerrarSesion}>Cerrar sesión </button>
                <header className="mt-10">
                    <div className="text-center p-8">
                        <h1 className="font-extrabold animate-flip-down animate-ease-in-out text-5xl">HOLA {user.username.toUpperCase()}, ESTAS SON TUS PARTIDAS</h1>
                    </div>
                    <div className="flex justify-between mx-5">
                        <input className="ms-5 w-3/4 rounded-lg focus:outline-none focus:ring-2 p-4 focus:ring-red-300" type="search" placeholder=" Buscar partida" onChange={filtrarPartidas}/>
                        <div className="flex gap-7 mx-5">
                            <Link to="/createpartida" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">CREAR PARTIDA</Link>
                            <Link to="/createPregunta" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold">INTRODUCIR PREGUNTAS</Link>
                            <Link to="/" className="p-3 bg-red-200 rounded-lg hover:bg-red-300 font-semibold"><LogoHome/>Inicio</Link>
                        </div>
                    </div>
                </header>
                <main className="flex flex-wrap m-10 gap-5">
                    <Link to="/preguntas">
                        <div className="rounded-lg p-10 bg-red-200 w-80 h-52 text-xl hover:bg-red-300 hover:cursor-pointer font-semibold">
                        <h1>VER TODAS LAS PREGUNTAS</h1>
                        </div>
                    </Link>
                    {partidasFiltradas.map(partida => (
                            <div key={partida.id} className="rounded-lg p-10 bg-red-200 w-80 h-52 text-xl hover:bg-red-300 hover:cursor-pointer font-semibold">
                                <h1>{partida.nombre}</h1>
                            </div>
                        ))}
                </main>
            </section>
                ) : (
                    <p>{error}</p>
                )
            }
        </>
    )
}

export default Bienvenida
