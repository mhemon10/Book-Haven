import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import BookHavenChoice from '../../components/BookHavenChoice/BookHavenChoice';

const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Books data={data}></Books>
            <BookHavenChoice></BookHavenChoice>
        </div>
    );
};

export default Home;