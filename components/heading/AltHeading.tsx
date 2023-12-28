import React from "react"
import styled from "styled-components"

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

    h1 {
        font-size: ${(props) => (props.theme.font.size * 3).toFixed(2)}rem;
        font-weight: 100;
        margin: 0;
    }
`

interface AltHeadingProps {
    children: React.ReactNode
}

export const AltHeading = (props: AltHeadingProps) => {
    return(
        <HeadingContainerOuter>
            <HeadingContainerInner>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    gap: '8px'
                }}>
                    {props.children}
                </div>
            </HeadingContainerInner>
        </HeadingContainerOuter>
    )
}