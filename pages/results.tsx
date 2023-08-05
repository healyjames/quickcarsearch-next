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

    console.log(props.budget)

    return (
        <Main page={"results"}>
            <SlimHeader id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />

            <Layout>
                {data && data.length > 0 ? (
                    <React.Fragment>
                        <Heading>
                            <h1>You're in luck!</h1>
                            <h2>We found these results...</h2>
                            <h4>Budget of {props.budget}</h4>
                        </Heading>
                        <ul>
                            {data.map((car, index) => (
                                <li key={index}>
                                {car.make} {car.model} (£{car.avg_price})
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Heading>
                            <h1>DANGER DANGER! EMERGENCY</h1>
                            <h2>Jokes, there's no danger. But you have stumbled upon an error. Maybe try again? Idk, you're on your own kid.</h2>
                        </Heading>
                        <a href="/">Take me to safety</a>
                    </React.Fragment>
                )}
            </Layout>
        </Main>
    )
}

export default ResultsPage