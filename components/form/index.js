import { useState } from 'react';
import styles from './Form.module.scss'
import FormItem from './formItem/index'
import FormSubmit from './FormSubmit/index'
import data from '../../data.json'

const handleSubmit = (event) => {
    event.preventDefault();
    const filteredCars = data.results.filter((car) => car.avg_price <= budget);
    setCars(filteredCars);
};

export default function Form() {
    const [budget, setBudget] = useState('');
    const [cars, setCars] = useState([]);

    return(
        <>
        <form id="main_form" onSubmit={handleSubmit} method="GET" aria-label="Set your budget">
            <fieldset>
                <legend className={"sr-only"}>Description</legend>
                <FormItem styles={styles} />
                <FormSubmit styles={styles} />
            </fieldset>
        </form>
        <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.make} {car.model} (${car.price})
          </li>
        ))}
        </ul>
        </>
        
    )
}