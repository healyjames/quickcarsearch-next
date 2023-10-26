import React, { useEffect, useState } from 'react'

import Head from "next/head"

import { Header } from "../components/header/Header"
import { Heading, HeadingH1, HeadingH2 } from "../components/heading/Heading"
import { Form } from "../components/form/Form"
import { HorizontalAd } from "../components/ads/HorizontalAd"
import { FeatureImage } from "../components/feature-image/FeatureImage"
import { Main } from "../components/layout/Main"
import { Layout } from "../components/layout/Layout"
// import EngagementModal from '../components/ads/EngagementModal'

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

      <Main page="home">
        <Layout>
            <Header id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />
            <Heading>
              <HeadingH1>Find your next performance car <span>the easy way.</span></HeadingH1>
              <HeadingH2>We make finding your next performance car simple with our easy-to-use, super quick, online search engine.</HeadingH2>
            </Heading>
            <Form />
            <HorizontalAd />
        </Layout>
        {renderFeatureImage && <FeatureImage />}
      </Main>
    </React.Fragment>
  )
}

export default Home