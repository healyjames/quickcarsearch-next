import React, { useState } from 'react'

import Image from 'next/image'
import styled from 'styled-components'

import ImageTag from '../image-tag/ImageTag'
import ImageSkeleton from '../skeletons/image/ImageSkeleton'

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

export const FeatureImage = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    
    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    return(
        <div>
            <FeatureImageContainerOuter>
                <ImageTag
                    name={'Martin Katler'}
                    url={'https://unsplash.com/@martinkatler'}
                />
                <FeatureImageContainer>
                    {imageLoaded ? null : <ImageSkeleton />}
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