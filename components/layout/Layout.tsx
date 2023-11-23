import React from 'react'

import styled from 'styled-components'

const StyledLayout = styled.div`
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

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return(
        <StyledLayout>
            {props.children}
        </StyledLayout>
    )
}