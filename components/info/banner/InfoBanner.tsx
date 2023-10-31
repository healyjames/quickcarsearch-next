import React from "react"
import styled from "styled-components"
import { Version } from "../Version"

const InfoBannerContainer = styled.div`
    width: 100%;
    padding: ${(props) => (props.theme.core.padding / 2)}rem 0;
    background-color: ${(props) => props.theme.colors.neutrals.darkest};

    p {
        font-size: ${(props) => (props.theme.font.size * 0.6).toFixed(1)}rem;
    }
`

export const InfoBanner = () => {
    return(
        <InfoBannerContainer>
            <Version />
        </InfoBannerContainer>
    )
}