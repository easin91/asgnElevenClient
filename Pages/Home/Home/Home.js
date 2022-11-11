import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import About from './About/About';
import Heart from './About/Heart';
import Services from './Services/Services';

const Home = () => {

    useTitle('Home');
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Heart></Heart>
        </div>
    );
};

export default Home;