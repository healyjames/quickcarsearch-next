import React from "react"
import styled, { keyframes } from "styled-components"

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

const StyledImageSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 10%, #C2C2C2 75%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 2s linear infinite;
`

const ImageSkeleton = () => {
    return(
        <StyledImageSkeleton />
    )
}

export default ImageSkeleton