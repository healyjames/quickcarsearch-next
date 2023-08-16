import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../redux/types'

import { Main } from '../components/layout/Main'
import { SlimHeader } from '../components/header/slim/SlimHeader'
import { Heading } from '../components/heading/Heading'
import NoResults from '../components/no-results/NoResults'

const ResultsContainer = styled.div`
    margin: 0 auto;
`

const ResultsBody = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;

    li {
        border-top: ${(props) => props.theme.border.width}px solid #333;
    }
`

const ResultContainerInner = styled.a`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: ${(props) => (props.theme.core.padding * 2)}rem 0;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`

const ResultItem = styled.span`
    margin: 0 ${(props) => props.theme.core.margin}rem;

    .model_year {
        font-size: ${(props) => (props.theme.font.size / 1.5)}rem;
    }
    .make {
        font-size: ${(props) => props.theme.font.size}rem;
        font-weight: bold;
    }
`

const ResultsPageContainer = styled.div`
    max-width: ${(props) => (props.theme.breakpoints.md - 25)}px;
    margin: ${(props) => (props.theme.core.margin * 3)}rem auto;
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
    grid-template-columns: 2fr 1fr;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`

export const HeadingContainerOuter = styled.div`
    background-color: ${(props) => props.theme.colors.brand};
	padding-bottom: ${props => (props.theme.core.padding * 2)}rem;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        padding: ${props => (props.theme.core.padding * 12)}rem 0 ${props => (props.theme.core.padding * 2)}rem 0;
    }
`

export const HeadingContainerInner = styled.div`
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

export const StyledH1 = styled.h1`
    font-size: ${(props) => (props.theme.font.size * 3).toFixed(2)}rem;
    font-weight: 100;
    margin: 0;
`

const Container = styled.div`
    .bhp, .acceleration, .torque {
        display: none;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        .bhp, .acceleration, .torque {
            display: block;
        }
    }
`

const LoadMoreButton = styled.button`
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    margin: 0 auto;
    padding: ${props => (props.theme.core.padding * 1)}rem ${props => (props.theme.core.padding * 4)}rem;
    cursor: pointer;

    p {
        margin: 0;
    }
`

const ResultsPage = () => {

    const router = useRouter();

    // Use the 'useSelector' hook to get the data from Redux store
    const data = useSelector((state: RootState) => state.data.data)
    const budget = useSelector((state: RootState) => state.budget.budget)

    const [batchSize] = useState(8);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(batchSize);

    const formattedBudget = parseFloat(budget).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0
    });

    return (
        <Main page={"results"}>  
            <SlimHeader id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />

            {!budget && (
                <NoResults cause={'budget'} />
            )}

            {data && data.length > 0 ? (
                <Container>
                    <HeadingContainerOuter>
                        <HeadingContainerInner>
                            <Heading>
                                <StyledH1>Here's what we found</StyledH1>
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
                                    <div className='brand'>Filter - All matches</div>
                                    <div className='bhp'>BHP</div>
                                    <div className='acceleration'>0-60mph</div>
                                    <div className='torque'>Torque</div>
                                    <div className='price'>Price</div>
                                </ResultsHead>
                                <ResultsBody>
                                    {data.slice(0, endIndex).map((car, index) => (
                                        <li key={index + startIndex}>
                                            <ResultContainerInner href="/" style={{textDecoration: 'none'}}>
                                                <ResultItem className='brand'>
                                                    <div className='model_year'>{car.model_year}</div>
                                                    <div className='make'>{car.make}</div>
                                                    <div className='model'>{car.model} {car.variant}</div>
                                                </ResultItem>
                                                <ResultItem className='bhp'>{car.bhp}</ResultItem>
                                                <ResultItem className='acceleration'>{car.acceleration}</ResultItem>
                                                <ResultItem className='torque'>{car.torque}</ResultItem>
                                                <ResultItem className='price'>{
                                                    parseFloat(car.avg_price).toLocaleString('en-GB', {
                                                        style: 'currency',
                                                        currency: 'GBP',
                                                        minimumFractionDigits: 0
                                                    })
                                                }</ResultItem>
                                            </ResultContainerInner>
                                        </li>
                                    ))}
                                </ResultsBody>
                                {endIndex < data.length && (
                                    <LoadMoreButton
                                        onClick={() => {
                                            setStartIndex(startIndex + batchSize);
                                            setEndIndex(endIndex + batchSize);
                                        }}>
                                        <div>
                                            <p>Load More</p>
                                            <Image src="/assets/icons/chevron-down-solid.svg" alt="Chevron Down" width={12} height={12} />
                                        </div>
                                    </LoadMoreButton>
                                )}
                                {/* End of results message... */}
                                {endIndex >= data.length && (
                                    <LoadMoreButton
                                        onClick={() => {
                                            router.push('/')
                                        }}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            flexWrap: 'nowrap',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}>
                                            <Image 
                                                src="/assets/icons/chevron-down-solid.svg" 
                                                alt="Chevron Down" 
                                                width={12} 
                                                height={12}
                                                style={{
                                                    transform: 'rotate(90deg)'
                                                }}
                                                 />
                                            <p>End of results - Go home</p>
                                        </div>
                                    </LoadMoreButton>
                                )}
                            </ResultsContainer>
                        </React.Fragment>
                    </ResultsPageContainer>
                </Container>
                ) : budget && (
                    <React.Fragment>
                        <NoResults cause={'data'} />
                    </React.Fragment>
                )}
            
        </Main>
    )
}

export default ResultsPage