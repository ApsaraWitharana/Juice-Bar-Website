import React from 'react';
import { Header } from './components/Header';
import {Hero} from "./components/Hero.tsx";
import {FeaturedProducts} from "./components/FeaturedProducts.tsx";
import {CartProvider} from "./context/CartContext.tsx";
import {About} from "./components/About.tsx";
import {Nutrition} from "./components/Nutrition.tsx";
import {Testimonials} from "./components/Testimonials.tsx";
import {StoreLocator} from "./components/StoreLocator.tsx";

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
                <Header />
                {/*added main component.*/}
                <main>
                    <Hero/>
                    <FeaturedProducts/>
                    <About/>
                    <Nutrition/>
                    <Testimonials/>
                    <StoreLocator/>
                </main>

            </div>
        </CartProvider>
    );
}

export default App;