import React from 'react'

import styled from 'styled-components'

export const StyledFormItem = styled.div`
    & ~ & {
        margin-top: ${props => props.theme.core.margin / 2}rem;
    }
`

const FormInputItem = styled.div`
    position: relative;

    input::placeholder {
        color: ${props => props.theme.colors.neutrals.regular};
    }

    input[type=text] {
        background-color: ${props => props.theme.colors.backgroundAlt};
        border-radius: ${props => props.theme.border.radius}rem;
        box-sizing: border-box;
        padding: ${props => props.theme.core.padding}rem ${props => (props.theme.core.padding * 0.75).toFixed(2)}rem ${props => props.theme.core.padding}rem ${props => (props.theme.core.padding * 1.5).toFixed(2)}rem;
        font-size: ${props => (props.theme.font.size / 1.2).toFixed(2)}rem;
        width: 100%;
        outline-color: ${props => props.theme.colors.brand};
        border: none;
        transition: all 0.1s ease-in-out;
    }

    
    input:not(:placeholder-shown) + .currency-symbol {
        opacity: 1;
    }

    @media (max-width: ${props => props.theme.breakpoints.lg}px) {
        input:focus ~ .submit-button {
            background-color: rgba(255,255,255,0.2);
        }
        input:not(:placeholder-shown) ~ .submit-button {
            background-color: ${props => props.theme.colors.brand};
        }
    }
`

const Currency = styled.span`
    position: absolute;
    left: 0;
    margin-top: ${props => props.theme.core.padding}rem;
    margin-left: 10px;
    color: ${props => props.theme.colors.foreground};
    font-size: ${props => (props.theme.font.size / props.theme.font.size)}rem;

    opacity: 0;
    transition: opacity 0.1s;
`

const Budget = styled.label`
    margin-bottom: ${props => props.theme.core.margin / 2}rem;
`

interface FormItemProps {
    budget: string
    setBudget: (value: string) => void
    children: React.ReactNode
}

export const FormItem = (props: FormItemProps) => {
    const formatCurrency = (value: string) => {
        const numericValue = parseFloat(value.replace(/[^0-9]/g, ''));
    
        if (!isNaN(numericValue)) {
            return numericValue.toLocaleString('en-GB');
        }
        
        return '';
    };

    return(
        <StyledFormItem>
            {/* <Budget htmlFor="budget">What&apos;s your budget?</Budget>Needs to be hidden visually but avaulable for screen readers */}
            <FormInputItem>
                <input
                    type="text" 
                    name="budget" 
                    id="budget" 
                    min={0} 
                    maxLength={9} 
                    step={10} 
                    placeholder="What's your budget?" 
                    pattern="^[0-9,.]*$"
                    value={formatCurrency(props.budget)} 
                    onChange={(event) => {
                        const formattedValue = formatCurrency(event.target.value);
                        props.setBudget(formattedValue.replace(/[^\d.]/g, ''));
                    }}
                    required />
                    <Currency className="currency-symbol">£</Currency>{/* Should appear once input is focused on */}
                    {props.children}
            </FormInputItem>
        </StyledFormItem>
    )
}