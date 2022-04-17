import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Articles/>
        </div>
    );
};

export default Home;