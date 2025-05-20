import React from 'react';
import { Header } from './components/Header';
import {Hero} from "./components/Hero.tsx";
import {FeaturedProducts} from "./components/FeaturedProducts.tsx";
import {CartProvider} from "./context/CartContext.tsx";

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
                <Header />
                {/*added main component.*/}
                <main>
                    <Hero/>
                    <FeaturedProducts/>
                </main>

            </div>
        </CartProvider>
    );
}

export default App;