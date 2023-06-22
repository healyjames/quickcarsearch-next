import styled from 'styled-components'

export const HeadingH1 = styled.h1`
    text-align: left;
    font-size: ${props => (props.theme.font.size * 1.5).toFixed(2)}rem;
    letter-spacing: -1px;
    font-weight: 400;
    span {
        font-weight: 700;
    }
`

export const HeadingH2 = styled.h2`
    font-size: ${props => props.theme.font.size};
    font-weight: 400;
    margin-bottom: ${props => (props.theme.core.margin * 2.5).toFixed(2)};
    color: ${props => props.theme.colors.neutrals.regular};
`

export const Heading = (props) => {
    return(
        <div>
           {props.children}
        </div>
    )
}