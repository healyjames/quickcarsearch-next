import styled from 'styled-components';

const StyledAdOuter = styled.div`
    margin-top: 2em;
`

const StyledAd = styled.div`
    background-color: lightgray;
    height: 100px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 0.6em;
`

export const HorizontalAd = () => {
    return(
        <StyledAdOuter>
            <div>
                <StyledAd />
            </div>
        </StyledAdOuter>
    )
}