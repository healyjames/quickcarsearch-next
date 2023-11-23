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

const Cookies = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Header />
            <main>
                <Layout>

                    <h1>Cookie Policy</h1>
                    <h2><u>{KEYS.BRAND}</u></h2>

                    <p>This Cookie Policy explains how {KEYS.BRAND} uses cookies on our website. By using our website, you consent to the use of cookies in accordance with this policy.</p>
                    <OrderedList>
                        <li>
                            <h3>What Are Cookies?</h3>
                            <OrderedList type="a">
                                <li><p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to enhance your browsing experience, remember your preferences, and provide anonymous tracking data to website owners.</p></li>
                                <li><p>You can use tools like this <a  style={{color: '#FFFFFF'}} href="https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm?pli=1" target="_blank" rel="noreferrer">Cookie Editor chrome extension</a> to check what cookies are set on a website.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>How We Use Cookies</h3>
                            <OrderedList type="a">
                                <li><p><strong>Functional Cookies:</strong> We use a single cookie for minor functionality purposes. This cookie helps enhance your experience on the website by remembering if you have closed the pop up which tells you the release version of the website. This is the only cookie we set.</p></li>
                                <li><p><strong>Third-Party Cookies:</strong> {KEYS.BRAND} may use third-party services, such as Google Analytics, that also use cookies to collect anonymous information about how visitors use our website. This information is used to compile reports and help us improve the site.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Managing Your Cookie Preferences</h3>
                            <OrderedList type="a">
                                <li><p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website's functionality.</p></li>
                                <li><p>To manage your cookie preferences for third-party advertising, you can visit the opt-out pages of major ad networks, such as the Network Advertising Initiative (NAI) opt-out page or the Digital Advertising Alliance (DAA) opt-out page.</p></li>
                            </OrderedList>
                        </li>

                        <li>
                            <h3>Changes to This Cookie Policy</h3>
                            <p>{KEYS.BRAND} may update this cookie policy from time to time. We will notify you of any changes by posting the new cookie policy on this page.</p>
                        </li>

                        <li>
                            <h3>Contact Information</h3>
                            <p>If you have any questions or concerns about our cookie policy, <a style={{color: '#FFFFFF'}} href="mailto:jameshealydesign@gmail.com">please contact us at via email</a>.</p>
                        </li>
                    </OrderedList>

                    <p>Thanks for using {KEYS.BRAND}!</p>

                </Layout>
            </main>
        </React.Fragment>
    )
}

export default Cookies