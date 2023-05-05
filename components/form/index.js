import { useState } from 'react';
import styles from './Form.module.scss'
import FormItem from './formItem/index'
import FormSubmit from './FormSubmit/index'
import data from '../../data.json'

export default function Form() {
    const [budget, setBudget] = useState('');
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            setTimeout(() => {
                const filteredCars = data.results.filter((car) => car.avg_price <= budget);
                setCars(filteredCars);
                setIsLoading(false);
            }, Math.floor(Math.random() * (1500 - 500 + 1) + 500))

        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <form id="main_form" onSubmit={handleSubmit} method="GET" aria-label="Set your budget">
                <fieldset>
                    <legend className={"sr-only"}>Description</legend>
                    <FormItem styles={styles} budget={budget} setBudget={setBudget} />
                    <FormSubmit styles={styles} />
                </fieldset>
            </form>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {cars.map((car, index) => (
                        <li key={index}>
                            {car.make} {car.model} (£{car.avg_price})
                        </li>
                    ))}
                </ul>
            )}

        </>
        
    )
}