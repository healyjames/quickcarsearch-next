import styled, { css } from "styled-components"

import { StyledFormItem } from "../formItem/FormItem"

const SubmitButton = styled.button`
    border: none;
    background-color: ${props => props.theme.colors.brand};
    color: ${props => props.theme.colors.foreground};
    padding: ${props => props.theme.core.padding}rem  ${props => (props.theme.core.padding * 0.75).toFixed(2)}rem;
    font-size: ${props => props.theme.font.size}rem;
    font-weight: bold;
    cursor: pointer;
    outline-color: ${props => props.theme.colors.foreground};
    width: 100%;
    margin-top: .25em;
    border-radius: ${props => props.theme.border.radius}rem;
    ${(props) => css`
        transition: all .15s ease-in-out;
    `}

    &:hover {
        background-color: ${props => props.theme.colors.foreground};
        text-decoration: underline;
        color: ${props => props.theme.colors.background};
    }

    &:focus {
        background-color: ${props => props.theme.colors.foreground};
        color: ${props => props.theme.colors.background};
        text-decoration: underline;
        outline-offset: -6px;
        outline-width: 2px;
        outline-color: ${props => props.theme.colors.background};
        outline-style: solid;
    }
`

export const FormSubmit = () => {
    return(
        <StyledFormItem>
            <SubmitButton 
                type="submit" 
                form="main_form" 
                value="Submit"
            >
                Search
            </SubmitButton>
        </StyledFormItem>
    )
}