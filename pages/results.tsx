import React, { useState, useEffect } from 'react'
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
    grid-template-columns: 10fr 8fr;
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
    grid-template-columns: 10fr 8fr;

    @media (min-width: ${props => props.theme.breakpoints.md}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .active {
        background-color: rgba(232, 116, 12, 0.25);
        border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #F4882A;
        img {
            opacity: 1 !important;
        }
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

const FilterHeading = styled.button`
    display: block;
    font-weight: bold;
    width: 100%;
    background-color: transparent;
    border: none;
    margin: 0 auto;
    padding: ${(props) => (props.theme.core.padding * 2)}rem ${(props) => props.theme.core.margin}rem;
    border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #333;
    text-align: left;
    font-size: ${props => (props.theme.font.size * 0.8).toFixed(1)}rem;

    p {
        margin: 0;
    }
`

const FilterButton = styled(FilterHeading)`
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.backgroundAlt};
        border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #474747;
    }

    &:focus, &:active {
        background-color: rgba(232, 116, 12, 0.25);
        border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} #F4882A;
    }

    &:focus::after, &:active::after {
        opacity: 1 !important;
    }

    &:hover::after {
        opacity: 0.5;
    }

    &::after {
        opacity: 0;
        content: '';
        background-image: url('/assets/icons/arrow-up-down-solid.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        display: inline-block;
    }
`

const SortByDropdownContainer = styled.div`
    margin-bottom: ${props => (props.theme.core.margin * 2).toFixed(2)}rem;

    select::placeholder {
        color: ${props => props.theme.colors.neutrals.regular};
    }

    select {
        background-color: ${props => props.theme.colors.backgroundAlt};
        border-radius: 0 ${props => props.theme.border.radius}rem ${props => props.theme.border.radius}rem ${props => props.theme.border.radius}rem;
        box-sizing: border-box;
        padding: ${props => props.theme.core.padding}rem;
        margin-top: ${props => (props.theme.core.margin / 2).toFixed(2)}rem;
        font-size: ${props => (props.theme.font.size / 1.2).toFixed(2)}rem;
        width: 100%;
        border: none;
        outline: none;
        transition: all 0.1s ease-in-out;
        color: ${props => props.theme.colors.foreground};
        appearance: none;
        background-image: url('/assets/icons/chevron-down-solid.svg');
        background-repeat: no-repeat;
        background-position: right 0.8rem bottom 50%;
        background-size: 12px 12px;
    }

    select:focus {
        outline-color: ${props => props.theme.colors.brand};
        outline-style: ${props => props.theme.border.style};
        outline-width: ${props => props.theme.border.width}px;
    }
`

const SortByDropdownLabel = styled.label`
    font-size: ${props => (props.theme.font.size * 0.65).toFixed(1)}rem;
    background-color: ${props => props.theme.colors.backgroundAltAlt};
    padding: ${props => (props.theme.core.padding / 2)}rem ${props => props.theme.core.padding}rem;
    border-radius: ${props => props.theme.border.radius}rem ${props => props.theme.border.radius}rem 0 0;
`

const MobileResultItem = styled.div`
    margin-bottom: ${props => props.theme.core.margin}rem;
`

const MobileResultItemHeading = styled.p`
    margin: 0;
`

const MobileResultItemText = styled.p`
    margin: 0;
    font-size: ${props => props.theme.font.size}rem;
    font-weight: bold;
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
    const [hideOnMobile, setHideOnMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
        setHideOnMobile(window.innerWidth > 979)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

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
          !sortOrderToggle
              ? parseFloat(a.acceleration) - parseFloat(b.acceleration)
              : parseFloat(b.acceleration) - parseFloat(a.acceleration),
      
          [filters.PRICE]: (a: any, b: any) =>
          !sortOrderToggle
              ? parseFloat(b.avg_price) - parseFloat(a.avg_price)
              : parseFloat(a.avg_price) - parseFloat(b.avg_price),
      
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
                        {!hideOnMobile && (
                            <SortByDropdownContainer>
                                <SortByDropdownLabel htmlFor='sortByDropdown'>
                                    Sort by
                                </SortByDropdownLabel>
                                <select
                                    value={filter}
                                    onChange={(e) => handleFilterChange(
                                        e.target.value as filters
                                    )}
                                    id='sortByDropdown'
                                >
                                    <option value={filters.BHP}>BHP</option>
                                    <option value={filters.ACCELERATION}>0-60mph</option>
                                    <option value={filters.TORQUE}>Torque</option>
                                    <option value={filters.PRICE}>Price</option>
                                </select>
                            </SortByDropdownContainer>
                        )}

                        <React.Fragment>
                            <ResultsContainer>
                                <ResultsHead>
                                    <FilterHeading 
                                        className='brand'
                                    >
                                        Make &amp; model
                                    </FilterHeading>
                                    {hideOnMobile ?
                                        <React.Fragment>
                                            <FilterButton 
                                                className={filter === filters.BHP ? 'active' : ''}
                                                onClick={() => handleFilterChange(filters.BHP)}
                                            >
                                                BHP
                                            </FilterButton>
                                            <FilterButton 
                                                className={filter === filters.ACCELERATION ? 'active' : ''}
                                                onClick={() => handleFilterChange(filters.ACCELERATION)}
                                            >
                                                0-60mph
                                            </FilterButton>
                                            <FilterButton 
                                                className={filter === filters.TORQUE ? 'active' : ''}
                                                onClick={() => handleFilterChange(filters.TORQUE)}
                                            >
                                                Torque
                                            </FilterButton>
                                            <FilterButton 
                                                className={filter === filters.PRICE ? 'active' : ''}
                                                onClick={() => handleFilterChange(filters.PRICE)}
                                            >
                                                Price
                                            </FilterButton>
                                        </React.Fragment> :
                                        <FilterHeading 
                                            className='brand'
                                        >
                                            Details
                                        </FilterHeading>
                                    }
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
                                                {hideOnMobile ?
                                                    <React.Fragment>
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
                                                    </React.Fragment> :
                                                    <ResultItem className='mobile'>
                                                        <MobileResultItem>
                                                            <MobileResultItemHeading>BHP</MobileResultItemHeading>
                                                            <MobileResultItemText>{car.bhp}</MobileResultItemText>
                                                        </MobileResultItem>
                                                        <MobileResultItem>
                                                            <MobileResultItemHeading>0-60mph</MobileResultItemHeading>
                                                            <MobileResultItemText>{car.acceleration}</MobileResultItemText>
                                                        </MobileResultItem>
                                                        <MobileResultItem>
                                                            <MobileResultItemHeading>Torque</MobileResultItemHeading>
                                                            <MobileResultItemText>{car.torque}</MobileResultItemText>
                                                        </MobileResultItem>
                                                        <MobileResultItem>
                                                            <MobileResultItemHeading>Price</MobileResultItemHeading>
                                                            <MobileResultItemText>{
                                                                parseFloat(car.avg_price).toLocaleString('en-GB', {
                                                                    style: 'currency',
                                                                    currency: 'GBP',
                                                                    minimumFractionDigits: 0
                                                                })
                                                            }</MobileResultItemText>
                                                        </MobileResultItem>
                                                    </ResultItem>
                                                }
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