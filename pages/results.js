import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'

import { Layout } from '../components/layout/Layout';
import { Main } from '../components/layout/Main';
import { Header } from '../components/header/Header';

const ResultsPage = () => {

    // Use the 'useSelector' hook to get the data from Redux store
    const data = useSelector((state) => state.data)

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
        if (timer === 0 && !data?.data) {
            router.push('/')
        }
    }, [timer, data])

    return (
        <Main page={"results"}>
            <Layout>
                <Header id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />
                {data && data.data ? (
                    <ul>
                        {data.data.map((car, index) => (
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