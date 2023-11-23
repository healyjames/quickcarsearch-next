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

const Terms = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Terms &amp; Conditions</title>
            </Head>
            <Header />
            <main>
                <Layout>

                    <h1>Terms &amp; Conditions</h1>
                    <h2>Welcome to <u>{KEYS.BRAND}</u></h2>

                    <p>By using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.</p>
                    <OrderedList>
                        <li>
                            <h3>Acceptance of Terms</h3>
                            <p>By accessing or using {KEYS.BRAND}, you agree to be bound by these terms and conditions of use. If you do not agree to all of the terms and conditions, you may not access the website or use any services.</p>
                        </li>

                        <li>
                            <h3>Use of the Website</h3>
                            <OrderedList type="a">
                                <li><p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p></li>
                                <li><p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Privacy and Cookies</h3>
                            <OrderedList type="a">
                                <li><p>{KEYS.BRAND} does not collect or store personal data from users.</p></li>
                                <li><p>A cookie is set for minor functionality to enhance your experience. By using the website, you consent to the use of cookies in accordance with our privacy policy.</p></li>
                                <li><p><a style={{color: '#FFFFFF'}} href="/privacy" target="_blank" rel="noreferrer">View full privacy policy here</a> <a style={{color: '#FFFFFF'}} href="/cookies" target="_blank" rel="noreferrer">View full cookie policy here</a></p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Advertising</h3>
                            <OrderedList type="a">
                                <li><p>{KEYS.BRAND} may display advertisements through Google AdSense or other advertising platforms. These advertisements may be personalized based on your browsing behavior. We do not endorse the products or services advertised.</p></li>
                                <li><p>Third-party advertisers, including Google AdSense, may use cookies to serve ads based on your prior visits to our website and other websites. You can opt-out of personalized advertising by visiting the Google Ad Settings page.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Intellectual Property</h3>
                            <OrderedList type="a">
                                <li><p>This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Limitations of Liability</h3>
                            <OrderedList type="a">
                                <li><p>{KEYS.BRAND} is provided "as is" and makes no representations or warranties of any kind, express or implied.</p></li>
                                <li><p>{KEYS.BRAND} shall not be liable for any indirect, special, consequential, or incidental damages, including without limitation, lost profits or revenues, costs of replacement goods, loss or damage to data arising out of the use or inability to use this website.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Governing Law</h3>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of {KEYS.COUNTRY}, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of the {KEYS.COUNTRY}.</p>
                        </li>

                        <li>
                            <h3>Changes to Terms</h3>
                            <p>{KEYS.BRAND} may revise these terms and conditions at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms and conditions.</p>
                        </li>

                        <li>
                            <h3>Contact Information</h3>
                            <p>If you have any questions or concerns about our terms &amp; conditions, <a style={{color: '#FFFFFF'}} href="mailto:jameshealydesign@gmail.com">please contact us at via email</a>.</p>
                        </li>
                    </OrderedList>

                    <p>Thanks for using {KEYS.BRAND}!</p>

                </Layout>
            </main>
        </React.Fragment>
    )
}

export default Terms