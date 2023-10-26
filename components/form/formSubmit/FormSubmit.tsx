import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const SubmitButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    border-top-right-radius: ${props => props.theme.border.radius}rem;
    border-bottom-right-radius: ${props => props.theme.border.radius}rem;

    background-color: transparent;
    border: none;
    padding: ${props => props.theme.core.padding}rem;
    margin: 0;

    height: 100%;
    width: 46px;

    transition: background-color 0.1s ease-in-out;

    &:focus, &:hover {
        background-color: ${props => props.theme.colors.brand};
    }
`

export const FormSubmit = () => {
    return(
        <SubmitButton 
            type="submit" 
            form="main_form" 
            value="Search"
            className="submit-button"
        >
            <Image src="/assets/icons/magnifying-glass-solid.svg" alt="Chevron Down" width={16} height={16} />
        </SubmitButton>
    )
}