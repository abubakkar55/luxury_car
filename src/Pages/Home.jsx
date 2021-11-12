import React from 'react';
import Banner from './../components/Banner/Banner';
import Products from './../components/Products/Products';

const Home = () => {
    return (
        <div>
            <main>
                <section><Banner /></section>
                <section><Products /></section>
            </main>
        </div>
    )
}

export default Home
