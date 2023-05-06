import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/actions/fetchData';
import styles from './Form.module.scss'
import FormItem from './formItem/index'
import FormSubmit from './FormSubmit/index'
import Loading from '../loading';
import data from '../../data.json'

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
                setIsLoading(false);
                dispatch(fetchData(filteredCars))
                router.push("/results")
            }, Math.floor(Math.random() * (2000 - 1000 + 1) + 500))

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