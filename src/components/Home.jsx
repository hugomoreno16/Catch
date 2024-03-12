import { HeaderInicio } from './HeaderInicio.jsx'
import { ToGame } from './ToGame.jsx'
import { Rules } from './Rules.jsx'
import { LogIn } from './LogIn.jsx'
import React from 'react'
import Footer from './Footer.jsx'

function Home() {
    return (
        <div>
            <HeaderInicio />
            <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
                <div className="snap-center">
                    <ToGame />
                </div>
                <div className="snap-center">
                    <Rules />
                </div>
                <div className="snap-center">
                    <LogIn />
                </div>
                <Footer></Footer>
            </main>
        </div>
    )
}

export default Home
