import React from "react"
import Head from "next/head"
import styled from "styled-components"

import { Header } from "../components/header/Header"
import { Layout } from "../components/layout/Layout"

const OrderedList = styled.ol`
    padding-left: ${(props) => (props.theme.core.padding * 1.5).toFixed(2)}rem;

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        padding-left: ${(props) => props.theme.core.padding * 2}rem;
    }
`

enum KEYS {
    BRAND = 'quickcarsearch.io',
    COUNTRY = 'the United Kingdom'
}

const Privacy = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Header />
            <main>
                <Layout>

                    <h1>Privacy Policy</h1>
                    <h2><u>{KEYS.BRAND}</u></h2>

                    <p>This Privacy Policy explains how {KEYS.BRAND} collects, uses, and protects any information that you provide when using our website.</p>
                    <OrderedList>
                        <li>
                            <h3>Information We Collect</h3>
                            <OrderedList type="a">
                                <li><p><strong>Personal Information:</strong> {KEYS.BRAND} does not collect or store any personal information from users. We respect your privacy and ensure that your browsing experience remains anonymous.</p></li>
                                <li><p>Cookies: We use a single cookie for minor functionality purposes. This cookie helps enhance your experience on the website. By using our website, you consent to the use of this cookie in accordance with this privacy policy.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>How We Use Cookies</h3>
                            <OrderedList type="a">
                                <li><p>The cookie used on {KEYS.BRAND} is for minor functionality, and it does not collect or store personal information.</p></li>
                                <li><p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website's functionality.</p></li>
                                <li><p><a style={{color: '#FFFFFF'}} href="/cookies">View full cookie policy here</a></p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Third-Party Advertisements</h3>
                            <OrderedList type="a">
                                <li><p>{KEYS.BRAND} may display advertisements through third-party platforms, such as Google AdSense. These advertisements may use cookies to serve personalized content based on your browsing behavior. We do not have control over these cookies.</p></li>
                                <li><p>You can opt-out of personalized advertising by visiting the Google Ad Settings page or adjusting your browser settings.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Security</h3>
                            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
                        </li>

                        <li>
                            <h3>Changes to This Privacy Policy</h3>
                            <p>{KEYS.BRAND} may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
                        </li>

                        <li>
                            <h3>Contact Information</h3>
                            <p>If you have any questions or concerns about our privacy policy, <a style={{color: '#FFFFFF'}} href="mailto:jameshealydesign@gmail.com">please contact us at via email</a>.</p>
                        </li>
                    </OrderedList>

                    <p>Thanks for using {KEYS.BRAND}!</p>

                </Layout>
            </main>
        </React.Fragment>
    )
}

export default Privacy