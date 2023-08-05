import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../redux/types'

import { Layout } from '../components/layout/Layout'
import { Main } from '../components/layout/Main'
import { SlimHeader } from '../components/header/slim/SlimHeader'
import { Heading } from '../components/heading/Heading'

const ResultsList = styled.ul`
    max-width: 500px;
    margin: 0 auto;
    list-style-type: none;
`

const ResultContainer = styled.li`
    padding: 10px;
    margin: 10px 0;
`

const ResultsPage = () => {

    // Use the 'useSelector' hook to get the data from Redux store
    const data = useSelector((state: RootState) => state.data.data)
    const budget = useSelector((state: RootState) => state.budget.budget)

    console.log(budget)

    return (
        <Main page={"results"}>
            <SlimHeader id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />

            <Layout>
                {data && data.length > 0 ? (
                    <React.Fragment>
                        <Heading>
                            <h1>You're in luck!</h1>
                            <h2>We found these results...</h2>
                            <h4>Budget of {budget}</h4>
                        </Heading>
                        <ResultsList>
                            {data.map((car, index) => (
                                <ResultContainer key={index}>
                                    {car.make} {car.model} (£{car.avg_price})
                                </ResultContainer>
                            ))}
                        </ResultsList>
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