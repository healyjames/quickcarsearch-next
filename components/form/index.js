import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/actions/fetchData';

import { FormItem } from './formItem/FormItem';
import { FormSubmit } from './formSubmit/FormSubmit'
import Loading from '../loading';

import data from '../../data.json'
import styles from './Form.module.scss'

export default function Form() {
    const [budget, setBudget] = useState('');
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            setTimeout(() => {
                const filteredCars = data.results.filter((car) => car.avg_price <= budget);
                setCars(filteredCars);
                dispatch(fetchData(filteredCars))
                router.push("/results")
                setIsLoading(false);
            }, Math.floor(Math.random() * (1200 - 400 + 1) + 500))

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
                    <FormSubmit styles={styles}/>
                </fieldset>
            </form>

            {isLoading && <Loading />}

        </>
        
    )
}