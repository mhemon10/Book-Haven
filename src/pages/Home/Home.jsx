import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Books data ={data}></Books>
        </div>
    );
};

export default Home;