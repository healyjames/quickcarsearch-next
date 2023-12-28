import React from 'react'
import styled from 'styled-components'

import { AltHeading } from '../heading/AltHeading'
import { Button } from '../button/Button'

const MessageContainer = styled.div`
    margin: 0 auto;
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
`

const DataErrorMessage = () => {
    return (
        <React.Fragment>
            <AltHeading>
                <h1>Look at you, cheap skate</h1>
            </AltHeading>
            <MessageContainer>
                <p>We have no results for a budget that low, too bad.</p>
                <Button as="a" href="/" fullWidth={false} invertedColor={true}>Go home</Button>
            </MessageContainer>
        </React.Fragment>
        
    )
}

const BudgetErrorMessage = () => {
    return (
        <React.Fragment>
            <AltHeading>
                <h1>Well, this sucks...</h1>
            </AltHeading>
            <MessageContainer>
                <p>We can&apos;t retrieve any data for you, maybe try again? Idk...</p>
                <Button as="a" href="/" fullWidth={false} invertedColor={true}>Go home</Button>
            </MessageContainer>
        </React.Fragment>
    )
}

interface NoResultsProps {
    cause: string
}

const NoResults = (props: NoResultsProps) => {
    
    switch(props.cause) {
        case 'data': {
            return <DataErrorMessage />
            break
        }
        case 'budget': {
            return <BudgetErrorMessage />
            break
        }
        default: {
            return <DataErrorMessage />
        }
    }
}

export default NoResults