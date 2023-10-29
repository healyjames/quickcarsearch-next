import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Head from "next/head"

import { Header } from "../components/header/Header"
import { Heading, HeadingH1, HeadingH2 } from "../components/heading/Heading"
import { Form } from "../components/form/Form"
import { HorizontalAd } from "../components/ads/HorizontalAd"
import { FeatureImage } from "../components/feature-image/FeatureImage"
import { SocialIcons } from '../components/social-icons/SocialIcons'
// import EngagementModal from '../components/ads/EngagementModal'

const StyledLayout = styled.div`
    margin: auto 0;
    @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        padding: 0 ${props => (props.theme.core.padding * 3).toFixed(2)}rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}px) {
      padding: 0 ${props => (props.theme.core.padding * 6).toFixed(2)}rem;
  }
`

const ContentWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
    padding: ${props => (props.theme.core.padding * 3).toFixed(2)}rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 300px) {
    padding: ${props => (props.theme.core.padding * 2).toFixed(1)}rem;
  }
`

const HeaderWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
    background-color: ${props => (props.theme.colors.brand)};
    padding: ${props => (props.theme.core.padding).toFixed(2)}rem;
  }
`

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-columns: 40% 60%;
  }
`

const Home = () => {

  // Hide feature image on mobiles
  const [renderFeatureImage, setRenderFeatureImage] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setRenderFeatureImage(window.innerWidth > 979)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Find the Fastest Car for your money - Online and Free</title>
        <meta name="description" content="QuickCarSearch - The platform that makes it easy to find your next sports car, super car or performance car, all within your budget. Convinient and totally free." property="og:title" key="title" />
        <meta charSet="utf-8" property="og:charset" key="charset" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" property="og:edge" key="edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0,user-scalable=yes" property="og:viewport" key="viewport" />
        <meta name="mobile-web-app-capable" content="yes" property="og:mobile_webapp" key="mobile_webapp" />
        <meta name="apple-mobile-web-app-capable" content="yes" property="og:apple_webapp" key="apple_webapp" />
      </Head>

      {/* <EngagementModal /> */}

      <StyledMain>
        <StyledLayout>
          <HeaderWrapper>
            <Header id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />
          </HeaderWrapper>
          <ContentWrapper>
            <Heading>
              <HeadingH1>Find your next performance car <span>the easy way.</span></HeadingH1>
              <HeadingH2>We make finding your next performance car simple with our easy-to-use, super quick, online search engine.</HeadingH2>
            </Heading>
            <Form />
            <HorizontalAd />
          </ContentWrapper>
          <SocialIcons />
        </StyledLayout>
        {renderFeatureImage && <FeatureImage />}
      </StyledMain>
    </React.Fragment>
  )
}

export default Home