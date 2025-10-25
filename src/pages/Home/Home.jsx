import React from 'react';
import { useLoaderData } from 'react-router';
import Toys from '../Toys/Toys';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Toys data={data}></Toys>
        </div>
    );
};

export default Home;