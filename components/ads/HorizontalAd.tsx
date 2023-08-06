import React from 'react'

import styled from 'styled-components'

const StyledAd = styled.div`
    background-color: lightgray;
    height: 100px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: ${props => props.theme.border.radius}rem;
`

export const HorizontalAd = () => {
    return(
        <div style={{
            marginTop: '2em'
        }}>
            <div>
                <StyledAd />
            </div>
        </div>
    )
}