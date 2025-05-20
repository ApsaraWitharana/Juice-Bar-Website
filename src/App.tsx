import React from 'react';
import { Header } from './components/Header';
import {Hero} from "./components/Hero.tsx";

function App() {
    return (
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
                <Header />
                {/*added main component.*/}
                <main>
                    <Hero/>
                </main>

            </div>
    );
}

export default App;