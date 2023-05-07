import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'

import Header from '../components/header'

const ResultsPage = () => {
    const data = useSelector((state) => state.data)
    const [timer, setTimer] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
    
        return () => {
            clearInterval(countdown);
        };
    }, []);
    
        useEffect(() => {
            if (timer === 0) {
                router.push('/');
            }
        }, [timer]);

    return (
        <>
            <Header id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />
            <ul>
            {data && data.data ? (
                data.data.map((car, index) => (
                    <li key={index}>
                    {car.make} {car.model} (£{car.avg_price})
                    </li>
                ))
                ) : (
                <>
                    <p>No data found</p>
                    <p>Redirecting to homepage in {timer} seconds</p>
                </>
            )}
            </ul>
        </>
    )
}

export default ResultsPage