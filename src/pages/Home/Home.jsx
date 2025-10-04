import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import BookHavenChoice from '../../components/BookHavenChoice/BookHavenChoice';
import TestimonialSlider from '../../components/TestimonialSlider /TestimonialSlider ';
import OurMission from '../../components/OurMission/OurMission';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {

    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Books data={data}></Books>
            <BookHavenChoice></BookHavenChoice>
            <OurMission></OurMission>
            <TestimonialSlider></TestimonialSlider>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;