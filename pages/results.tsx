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

    // Define state variables for timer and router
    const router = useRouter()
    const [timer, setTimer] = useState(5)

    useEffect(() => {
        // Create a countdown interval that decrements the timer state every 1 second
        const countdown = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000);
    
        // Return a cleanup function that clears the interval when the component is unmounted
        return () => {
            clearInterval(countdown)
        };
    }, []);

    // Implement the redirect effect
    useEffect(() => {
        if (timer === 0 && !data) {
            router.push('/')
        }
    }, [timer, data])

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
                {data ? (
                    <ul>
                        {data.map((car, index) => (
                            <li key={index}>
                            {car.make} {car.model} (£{car.avg_price})
                            </li>
                        ))}
                    </ul>
                    ) : (
                    <>
                        <p>No data found</p>
                        <p>Redirecting to homepage in {timer} seconds</p>
                    </>
                )}
            </Layout>
        </Main>
    )
}

export default ResultsPage