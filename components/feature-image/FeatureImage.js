import Image from 'next/image'
import styled from 'styled-components';

import styles from './FeatureImage.module.scss'

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
    height: 100%;
    min-height: ${props => props.theme.breakpoints.md}px;

    img {
        object-fit: cover;
        overflow: hidden;
    }
`

const FeatureImageContainerOuter = styled.div`
    display: flex;

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
    return(
        <div>
            <FeatureImageContainerOuter>
                <ImageTag>
                    <a href="https://unsplash.com/@martinkatler" target="_blank">
                        <p><i className="fas fa-camera"></i><span>Martin Katler</span></p>
                    </a>
                </ImageTag>

                <FeatureImageContainer>
                    <Image
                        src="/assets/images/home-image.jpg" 
                        fill
                        priority
                        loading="eager"
                        sizes="(max-width: 979px) 100vw,
                            (min-width: 1200px) 50vw"
                        decoding="async" 
                        alt="Orange Lambourghini Huracan parked on the street" />
                </FeatureImageContainer>
            </FeatureImageContainerOuter>
        </div>
    )
}