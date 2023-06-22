import React from 'react'

import styled, { css } from "styled-components"

export const StyledFormItem = styled.div`
    & ~ & {
        margin-top: ${props => props.theme.core.margin / 2}rem;
    }
`

const FormInputItem = styled.div`
    input::placeholder {
        color: ${props => props.theme.colors.neutrals.regular};
    }

    input[type=text] {
        border: ${props => props.theme.border.width}px ${props => props.theme.border.style} ${props => props.theme.colors.foreground};
        border-radius: ${props => props.theme.border.radius}rem;
        box-sizing: border-box;
        padding: ${props => props.theme.core.padding}rem ${props => (props.theme.core.padding * 0.75).toFixed(2)}rem ${props => props.theme.core.padding}rem ${props => (props.theme.core.padding * 1.5).toFixed(2)}rem;
        background: transparent;
        font-size: ${props => props.theme.font.size}rem;
        width: 100%;
        margin-top: ${props => props.theme.core.padding / 2}rem;
        outline-color: ${props => props.theme.colors.brand};

        ${(props) => css`
            transition: all 0.1s ease-in-out;
        `}
    }
`

const Currency = styled.span`
    position: absolute;
    margin-top: 21px;
    margin-left: 10px;
    color: ${props => props.theme.colors.foreground};
    font-size: ${props => props.theme.font.size}rem;
`

const Budget = styled.label`
    margin-bottom: ${props => props.theme.core.margin / 2}rem;
`

export const FormItem = (props) => {
    return(
        <StyledFormItem>
            <Budget htmlFor="budget">What's your budget?</Budget>
            <FormInputItem>
                <Currency>£</Currency>
                <input
                    type="text" 
                    name="budget" 
                    id="budget" 
                    min="0" 
                    maxLength="9" 
                    step="10" 
                    placeholder="20,000..." 
                    pattern="^[0-9,.]*$"
                    value={props.budget} 
                    onChange={
                        (event) => props.setBudget(
                            event.target.value
                        )
                    } 
                    required />
            </FormInputItem>
        </StyledFormItem>
    )
}