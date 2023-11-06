import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
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
    margin: 0;

    li:not(:first-child) {
        border-top: ${(props) => props.theme.border.width}px ${(props) => props.theme.border.style} #333;
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

const FilterButton = styled.button`
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    margin: 0 auto;
    padding: ${(props) => (props.theme.core.padding * 2)}rem ${(props) => props.theme.core.margin}rem;
    cursor: pointer;
    border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #333;
    text-align: left;
    font-size: ${props => (props.theme.font.size * 0.8).toFixed(1)}rem;

    &:hover {
        background-color: ${(props) => props.theme.colors.backgroundAlt};
        border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #474747;
    }

    &:focus, &:active {
        background-color: rgba(232, 116, 12, 0.25);
        border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #F4882A;
    }

    p {
        margin: 0;
    }
`

enum filters {
    BHP = 'BHP',
    ACCELERATION = 'ACCELERATION',
    TORQUE = 'TORQUE',
    PRICE = 'PRICE'
}

const ResultsPage = () => {

    const router = useRouter()

    const data = useSelector((state: RootState) => state.data.data)
    const budget = useSelector((state: RootState) => state.budget.budget)

    const [batchSize] = useState(8)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(batchSize)
    const [filter, setFilter] = useState(filters.ACCELERATION)
    const [sortOrderToggle, setSortOrderToggle] = useState(false)

    const formattedBudget = parseFloat(budget).toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0
    })

    const handleFilterChange = (newFilter: filters) => {
        if (newFilter === filter) { 
            setSortOrderToggle(!sortOrderToggle) 
        }
        setFilter(newFilter)
    }

    const sortedData = (data: any) => {
        const sortFunctions = {
          [filters.ACCELERATION]: (a: any, b: any) =>
          sortOrderToggle
              ? parseFloat(a.acceleration) - parseFloat(b.acceleration)
              : parseFloat(b.acceleration) - parseFloat(a.acceleration),
      
          [filters.PRICE]: (a: any, b: any) =>
          sortOrderToggle
              ? parseFloat(a.avg_price) - parseFloat(b.avg_price)
              : parseFloat(b.avg_price) - parseFloat(a.avg_price),
      
          [filters.BHP]: (a: any, b: any) =>
          sortOrderToggle
              ? parseFloat(b.bhp) - parseFloat(a.bhp)
              : parseFloat(a.bhp) - parseFloat(b.bhp),
      
          [filters.TORQUE]: (a: any, b: any) =>
          sortOrderToggle
              ? parseFloat(b.torque) - parseFloat(a.torque)
              : parseFloat(a.torque) - parseFloat(b.torque),
        }
      
        return [...data].sort(sortFunctions[filter])
    }      

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
                                <StyledH1>Here&apos;s what we found</StyledH1>
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
                                    <FilterButton 
                                        className='brand'
                                    >
                                        Filter - All matches
                                    </FilterButton>
                                    <FilterButton 
                                        className='bhp'
                                        onClick={() => handleFilterChange(filters.BHP)}
                                    >
                                        BHP
                                    </FilterButton>
                                    <FilterButton 
                                        className='acceleration'
                                        onClick={() => handleFilterChange(filters.ACCELERATION)}
                                    >
                                        0-60mph
                                    </FilterButton>
                                    <FilterButton 
                                        className='torque'
                                        onClick={() => handleFilterChange(filters.TORQUE)}
                                    >
                                        Torque
                                    </FilterButton>
                                    <FilterButton 
                                        className='price'
                                        onClick={() => handleFilterChange(filters.PRICE)}
                                    >
                                        Price
                                    </FilterButton>
                                </ResultsHead>
                                <ResultsBody>
                                    {sortedData(data.slice(0, endIndex)).map((car: any, index: any) => (
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
                                                    willChange: 'transform',
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