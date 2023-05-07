// import Home from "../components/app";
import Head from "next/head"
import { Header } from "../components/header/Header"
import Heading from '../components/heading'
import { Form } from "../components/form/Form"
import { HorizontalAd } from "../components/ads/HorizontalAd"
import { FeatureImage } from "../components/feature-image/FeatureImage"

import styles from './Home.module.scss'

const Home = () => (
  <>
		<Head>
			<title>Find the Fastest Car for your money - Online and Free</title>
			<meta name="description" content="QuickCarSearch - The platform that makes it easy to find your next sports car, super car or performance car, all within your budget. Convinient and totally free." property="og:title" key="title" />
			<meta charSet="utf-8" property="og:charset" key="charset" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" property="og:edge" key="edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0,user-scalable=yes" property="og:viewport" key="viewport" />
      <meta name="mobile-web-app-capable" content="yes" property="og:mobile_webapp" key="mobile_webapp" />
      <meta name="apple-mobile-web-app-capable" content="yes" property="og:apple_webapp" key="apple_webapp" />
		</Head>

    <main className={styles.home}>
      <div className={styles.form_container_outer}>
        <div className={styles.form_container_inner}>
          <Header id="home" logo="logo-icon-white.svg" acronym="logo-acronym-white.svg" />
          <Heading />
          <Form />
          <HorizontalAd />
        </div>
      </div>
      <FeatureImage />
    </main>
	</>
)

export default Home;