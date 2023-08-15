import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../redux/types'

import { Main } from '../components/layout/Main'
import { SlimHeader } from '../components/header/slim/SlimHeader'
import { Heading } from '../components/heading/Heading'

const ResultsContainer = styled.div`
    margin: 0 auto;
`

const ResultsBody = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    list-style-type: none;
    padding: 0;

    li {
        border-top: ${(props) => props.theme.border.width}px solid #333;
    }
`

const ResultContainerInner = styled.a`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: ${(props) => (props.theme.core.padding * 2)}rem 0;
`

const ResultItem = styled.span`
    margin: 0 ${(props) => props.theme.core.margin}rem;
`

const ResultsPageContainer = styled.div`
    max-width: ${(props) => (props.theme.breakpoints.md - 25)}px;
    margin: ${(props) => props.theme.core.margin}rem auto;
    padding: ${(props) => (props.theme.core.padding / 2)}rem ${(props) => (props.theme.core.padding * 2)}rem ${(props) => (props.theme.core.padding * 2)}rem ${(props) => (props.theme.core.padding * 2)}rem;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        max-width: ${(props) => (props.theme.breakpoints.md - 50)}px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        max-width: ${(props) => (props.theme.breakpoints.lg - 100)}px;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}px) {
        max-width: ${(props) => (props.theme.breakpoints.xl - 150)}px;
    }
`

const ResultsHead = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const HeadingContainerOuter = styled.div`
    background-color: ${(props) => props.theme.colors.brand};
	padding: ${props => (props.theme.core.padding * 12)}rem 0 ${props => (props.theme.core.padding * 2)}rem 0;
`

const HeadingContainerInner = styled.div`
    margin: 0 auto;
    padding:  ${(props) => props.theme.core.padding}rem;
    max-width: ${(props) => (props.theme.breakpoints.md - 25)}px;
    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        max-width: ${(props) => (props.theme.breakpoints.md - 50)}px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        max-width: ${(props) => (props.theme.breakpoints.lg - 100)}px;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}px) {
        max-width: ${(props) => (props.theme.breakpoints.xl - 150)}px;
    }

    p {
        text-transform: uppercase;
        font-size: ${(props) => (props.theme.font.size / 1.5)}rem;
    }
`

const StyledH1 = styled.h1`
    font-size: ${(props) => (props.theme.font.size * 3)}rem;
    font-weight: 100;
    margin: 0;
`

const ResultsPage = () => {

    // Use the 'useSelector' hook to get the data from Redux store
    const data = useSelector((state: RootState) => state.data.data)
    const budget = useSelector((state: RootState) => state.budget.budget)

    const formattedBudget = parseFloat(budget).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
      });

    return (
        <Main page={"results"}>  
            <SlimHeader id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />

            {data && data.length > 0 ? (
                <React.Fragment>
                    <HeadingContainerOuter>
                        <HeadingContainerInner>
                            <Heading>
                                <StyledH1>Here is what we found</StyledH1>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    gap: '8px'
                                }}>
                                    <p>Your budget: <span><strong>{formattedBudget}</strong></span></p>
                                    <p>Number of results: <span><strong>{data.length}</strong></span></p>
                                </div>
                            </Heading>
                        </HeadingContainerInner>
                    </HeadingContainerOuter>

                    <ResultsPageContainer>
                        <React.Fragment>
                            <ResultsContainer>
                                <ResultsHead>
                                    <div>Filter - All matches</div>
                                    <div>BHP</div>
                                    <div>0-60mph</div>
                                    <div>Torque</div>
                                    <div>Price</div>
                                </ResultsHead>
                                <ResultsBody>
                                    {data.map((car, index) => (
                                        <li key={index}>
                                            <ResultContainerInner href="/" style={{textDecoration: 'none'}}>
                                                <ResultItem>
                                                    <div>{car.make}</div>
                                                    <div>{car.model} {car.model}</div>
                                                </ResultItem>
                                                <ResultItem>{car.bhp}</ResultItem>
                                                <ResultItem>{car.acceleration}</ResultItem>
                                                <ResultItem>{car.torque}</ResultItem>
                                                <ResultItem>£{car.avg_price}</ResultItem>
                                            </ResultContainerInner>
                                        </li>
                                    ))}
                                </ResultsBody>
                            </ResultsContainer>
                        </React.Fragment>
                    </ResultsPageContainer>
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
            
        </Main>
    )
}

export default ResultsPage