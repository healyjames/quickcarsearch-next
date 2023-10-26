import React, { useState } from 'react'

import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

const ImageTag = styled.div`
    z-index: 1;
    position: absolute;
    right: 1rem;

    a span {
        color: ${props => props.theme.colors.foreground};
        border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} ${props => props.theme.colors.foreground};
    }

    a p i {
        position: relative;
        top: 4px;
        color: ${props => props.theme.colors.foreground};
        font-size: ${props => props.theme.font.size}rem;
        margin-right: 5px;
    }

    a p {
        opacity: 0.5;
    }

    a {
        text-decoration: none;
    }
`

const FeatureImageContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    min-height: ${props => props.theme.breakpoints.md}px;

    img {
        object-fit: cover;
        overflow: hidden;
    }
`

const FeatureImageContainerOuter = styled.div`
    display: flex;
    min-height: 100%;

    picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        .image_tag {
            left: auto;
            right: 1em;
            top: 0.5em;
        }
        .image_container_inner {
            align-items: center;
            height: 100vh;
            max-height: 900px;
            overflow: hidden;
            border-top-left-radius: ${props => props.theme.border.raduis}rem;
            border-bottom-left-radius: ${props => props.theme.border.raduis}rem;
        }
    }
`

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

const FeatureImageSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 10%, #C2C2C2 75%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 2s linear infinite;
`

export const FeatureImage = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    
    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    return(
        <div>
            <FeatureImageContainerOuter>
                <ImageTag>
                    <a href="https://unsplash.com/@martinkatler" target="_blank" rel="noreferrer">
                        <p><i className="fas fa-camera"></i><span>Martin Katler</span></p>
                    </a>
                </ImageTag>

                <FeatureImageContainer>
                    {imageLoaded ? null : <FeatureImageSkeleton />}
                    <Image
                        src="/assets/images/home-image.webp" 
                        fill
                        priority
                        loading="eager"
                        sizes="(max-width: 979px) 100vw,
                            (min-width: 1200px) 50vw"
                        decoding="async" 
                        alt="Orange Lambourghini Huracan parked on the street"
                        onLoad={handleImageLoad}
                        onError={() => setImageLoaded(true)} />
                </FeatureImageContainer>
            </FeatureImageContainerOuter>
        </div>
    )
}