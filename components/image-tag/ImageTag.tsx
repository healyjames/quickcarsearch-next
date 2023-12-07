import React from "react"
import Image from "next/image"
import styled from "styled-components"

const StyledImageTag = styled.div`
    z-index: 1;
    position: absolute;
    right: 1rem;
    top: 1rem;

    background-color: ${(props) => props.theme.colors.neutrals.darkest};
    filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.5));
    border-radius: ${(props) => props.theme.border.radius}rem;
    transition: all .1s ease-in-out;
    opacity: 0.75;

    &:hover {
        opacity: 1;
        background-color: ${(props) => props.theme.colors.accent};
        filter: drop-shadow(0px 3px 5px rgba(113, 90, 255, 0.5));
    }

    a div {
        display: flex;
        flex-direction: row;
        text-decoration: none;
        align-items: center;
        gap: ${props => (props.theme.core.grid.gap / 2)}rem;
        padding: ${(props) => (props.theme.core.padding / 2).toFixed(1)}rem ${(props) => props.theme.core.padding}rem;
    }

    a span {
        color: ${props => props.theme.colors.foreground};
    }

    a p {
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`

interface ImageTagProps {
    name: string
    url: string
}

const ImageTag = (props: ImageTagProps) => {
    return (
        <StyledImageTag>
            <a href={props.url} target="_blank" rel="noreferrer">
                <div>
                    <Image
                        src="/assets/icons/camera-solid.svg"
                        alt="Camera icon"
                        width={14}
                        height={14} 
                    />
                    <p>{props.name}</p>
                </div>
            </a>
        </StyledImageTag>
    )
}

export default ImageTag