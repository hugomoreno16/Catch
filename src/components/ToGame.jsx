export function ToGame() {
    return (
        <>
            <section className="bg-gradient-to-br from-amber-300 to-yellow-400 h-screen flex items-center justify-center" id="toGame">
                <div className="z-10 bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md animate-flip-up animate-delay-1000 animate-ease-in-out">
                    <h2 className="text-3xl font-extrabold mb-6 text-center text-black">Unirse a sala</h2>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Codigo de la sala:</label>
                            <input type="text" id="codigo" name="codigo" placeholder="123456ABC" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button id="boton" type="submit" className="w-full px-4 py-2 bg-teal-700 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-white">¡A Jugar!</button>
                    </form>
                </div>
            </section>
        </>
    )
}