import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const SocialIconWrapper = styled.div`
    margin: ${(props) => props.theme.core.margin}rem 0;
    padding: ${(props) => props.theme.core.margin}rem 0;

    @media (max-width: ${props => props.theme.breakpoints.lg}px) {
        border-top: ${(props) => props.theme.border.width}px ${(props) => props.theme.border.style} ${(props) => props.theme.colors.foreground};
        margin: ${(props) => props.theme.core.margin}rem 0 0 0;
        padding: ${(props) => props.theme.core.margin}rem 0 0 0;
    }
`

const SocialIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 200px;
    margin: 0 auto;

    @media (max-width: ${props => props.theme.breakpoints.lg}px) {
        padding: ${(props) => props.theme.core.padding}rem 0;
    }
`

const IconContainer = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => (props.theme.core.padding / 3).toFixed(1)}rem;
    border-radius: 100%;
    transition: all .1s ease-in-out;
    width: 24px;
    height: 24px;

    &:hover {
        background-color: ${props => props.theme.colors.brand};
        opacity: 1;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        opacity: 0.5;
    }
`

export const SocialIcons = () => {
    return(
        <SocialIconWrapper>
            <SocialIconContainer>
                <IconContainer 
                    href={'https://www.pinterest.co.uk/quickcarsearch/'}
                >
                    <Image 
                        src="/assets/icons/social/pinterest.svg" 
                        alt="Pinterest social icon" 
                        width={22} 
                        height={22}
                        />
                </IconContainer>
                <IconContainer 
                    href={'#'}
                >
                    <Image 
                        src="/assets/icons/social/instagram.svg" 
                        alt="Instagram social icon" 
                        width={22} 
                        height={22}
                        />
                </IconContainer>
                <IconContainer 
                    href={'https://twitter.com/quickcarsearch'}
                >
                    <Image 
                        src="/assets/icons/social/x-twitter.svg" 
                        alt="X (Twitter) social icon" 
                        width={22} 
                        height={22}
                        />
                </IconContainer>
                <IconContainer 
                    href={'#'}
                >
                    <Image 
                        src="/assets/icons/social/facebook.svg" 
                        alt="Facebook social icon" 
                        width={22} 
                        height={22}
                        />
                </IconContainer>
            </SocialIconContainer>
        </SocialIconWrapper>
    )
}