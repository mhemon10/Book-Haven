import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Books></Books>
        </div>
    );
};

export default Home;