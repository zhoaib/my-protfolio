import React from 'react';
import useTitle from '../../hooks/UseTitle';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;