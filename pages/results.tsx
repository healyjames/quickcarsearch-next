import React from 'react'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'

import { Layout } from '../components/layout/Layout';
import { Main } from '../components/layout/Main';
import { SlimHeader } from '../components/header/slim/SlimHeader';
import { Heading } from '../components/heading/Heading';
import { RootState } from '../redux/types'; // Import the RootState type

interface ResultsProps {
    budget: string
}

const ResultsPage = (props: ResultsProps) => {

    // Use the 'useSelector' hook to get the data from Redux store
    const data = useSelector((state: RootState) => state.data.data);
    console.log("data: ", data)
    console.log("test")

    return (
        <Main page={"results"}>
            <SlimHeader id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />
                
            <Layout>
                <Heading>
                    <h1>This is what we found</h1>
                    <h2>Budget of {props.budget}</h2>
                </Heading>
            </Layout>

            <Layout>
                {data && data.length > 0 ? (
                    <ul>
                        {data.map((car, index) => (
                            <li key={index}>
                            {car.make} {car.model} (£{car.avg_price})
                            </li>
                        ))}
                    </ul>
                    ) : (
                    <>
                        <p>Whoops!</p>
                        <p>No data found</p>
                        <a href="/">go home</a>
                    </>
                )}
            </Layout>
        </Main>
    )
}

export default ResultsPage