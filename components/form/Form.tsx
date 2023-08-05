import React, { useState, FormEvent  } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { FormItem } from './formItem/FormItem'
import { FormSubmit } from './formSubmit/FormSubmit'
import { Loading } from '../loading/Loading'
import { setBudget } from '../../redux/reducers/budgetReducer'
import data from '../../data.json'

export const Form = () => {
  const [budget, setBudgetValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      setTimeout(() => {
        const filteredCars = data.results.filter((car) => car.avg_price <= budget)
        dispatch({
          type: 'SET_DATA',
          payload: filteredCars,
        })

        router.push('/results')
        setIsLoading(false)
      }, Math.floor(Math.random() * (1200 - 400 + 1) + 500))
      dispatch(setBudget(budget))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form id="main_form" onSubmit={handleSubmit} method="GET" aria-label="Set your budget">
        <fieldset>
          <legend className={'sr-only'}>Description</legend>
          <FormItem budget={budget} setBudget={setBudgetValue} />
          <FormSubmit />
        </fieldset>
      </form>

      {isLoading && <Loading />}
    </>
  )
}
