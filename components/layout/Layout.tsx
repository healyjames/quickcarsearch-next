import React from 'react'

import styled from 'styled-components'

const StyledLayout = styled.div`
    padding: ${props => props.theme.core.padding}rem ${props => (props.theme.core.padding * 2).toFixed(2)}rem ${props => (props.theme.core.padding * 2.5).toFixed(2)}rem ${props => (props.theme.core.padding * 2).toFixed(2)}rem;

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        padding: ${props => (props.theme.core.padding * 6).toFixed(2)}rem;
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