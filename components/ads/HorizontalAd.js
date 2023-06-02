import styled from 'styled-components';

const StyledAd = styled.div`
    background-color: lightgray;
    height: 100px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 0.6em;
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