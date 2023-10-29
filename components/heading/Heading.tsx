import React from 'react'

import styled from 'styled-components'

export const HeadingH1 = styled.h1`
    text-align: left;
    font-size: ${props => (props.theme.font.size * 1.8).toFixed(1)}rem;
    font-weight: 400;
    span {
        font-weight: 700;
    }
`

export const HeadingH2 = styled.h2`
    font-size: ${props => props.theme.font.size}rem;
    font-weight: 400;
    margin: ${props => (props.theme.core.margin * 3).toFixed(1)}rem 0;
    color: ${props => props.theme.colors.neutrals.regular};
`

interface HeadingProps {
    children: React.ReactNode
}

export const Heading = (props: HeadingProps) => {
    return(
        <div>
           {props.children}
        </div>
    )
}