import React from 'react'

import styled from 'styled-components'

export const HeadingH1 = styled.h1`
    text-align: left;
    font-size: ${props => (props.theme.font.size * 1.5).toFixed(2)}rem;
    font-weight: 400;
    span {
        font-weight: 700;
    }
`

export const HeadingH2 = styled.h2`
    font-size: ${props => props.theme.font.size}rem;
    font-weight: 400;
    margin-bottom: ${props => (props.theme.core.margin * 2.5).toFixed(2)}rem;
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