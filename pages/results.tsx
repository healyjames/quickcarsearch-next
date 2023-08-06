import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../redux/types'

import { Main } from '../components/layout/Main'
import { SlimHeader } from '../components/header/slim/SlimHeader'
import { Heading } from '../components/heading/Heading'

const ResultsList = styled.ul`
    max-width: ${(props) => props.theme.breakpoints.md}px;
    margin: 0 auto;
    list-style-type: none;
    padding: 0;
`

const ResultContainerInner = styled.a`
    display: grid;
    grid-template-columns: 1fr 9fr 1fr;
    padding: ${(props) => props.theme.core.padding}rem 0;
`

const ResultContainerOuter = styled.li`
    background-color: ${(props) => props.theme.colors.neutrals.darkest};
    border-radius: 12px;
    padding: 0 ${(props) => (props.theme.core.padding)}rem;
    margin: 10px 0;
    transition: background-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 0.2s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.neutrals.dark};
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: ${props => props.theme.breakpoints.sm}px) {
        padding: 0 ${(props) => props.theme.core.padding * 2}rem;
    }
`

const ResultItem = styled.span`
    margin: 0 ${(props) => props.theme.core.margin}rem;
`

const ResultsPageContainer = styled.div`
    padding: ${(props) => (props.theme.core.padding / 2)}rem ${(props) => (props.theme.core.padding * 2)}rem ${(props) => (props.theme.core.padding * 2)}rem ${(props) => (props.theme.core.padding * 2)}rem;
`

const ResultsPage = () => {

    // Use the 'useSelector' hook to get the data from Redux store
    const data = useSelector((state: RootState) => state.data.data)
    const budget = useSelector((state: RootState) => state.budget.budget)

    console.log(budget)

    return (
        <Main page={"results"}>
            <SlimHeader id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />

            <ResultsPageContainer>
                {data && data.length > 0 ? (
                    <React.Fragment>
                        <Heading>
                            <h1>You're in luck!</h1>
                            <h2>We found these results...</h2>
                            <h4>Budget of {budget}</h4>
                            <p>Number of results: </p>
                        </Heading>
                        <ResultsList>
                            {data.map((car, index) => (
                                <ResultContainerOuter key={index}>
                                    <ResultContainerInner href="/" style={{textDecoration: 'none'}}>
                                        <ResultItem>{car.make}</ResultItem>
                                        <ResultItem>{car.model}</ResultItem>
                                        <ResultItem>£{car.avg_price}</ResultItem>
                                    </ResultContainerInner>
                                </ResultContainerOuter>
                            ))}
                        </ResultsList>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Heading>
                            <h1>DANGER DANGER! EMERGENCY</h1>
                            <h2>Just kidding, there's no danger. But you have stumbled upon an error. Maybe try again? Idk, you're on your own kid.</h2>
                        </Heading>
                        <a href="/">Take me to safety</a>
                    </React.Fragment>
                )}
            </ResultsPageContainer>
        </Main>
    )
}

export default ResultsPage