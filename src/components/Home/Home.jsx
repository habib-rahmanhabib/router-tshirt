import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    console.log(tshirt)
    return (
       <h1>this is home page: {tshirt.length}</h1>
    );
};

export default Home;