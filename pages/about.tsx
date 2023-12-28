import React from "react"
import Head from "next/head"
import styled from "styled-components"

import { Header } from "../components/header/Header"
import { Layout } from "../components/layout/Layout"
import { ResultItem as CarHistoryItem } from "./results"
import { AltHeading } from "../components/heading/AltHeading"

const CarHistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props => (props.theme.core.grid.gap * 2).toFixed(1)}rem;

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        flex-direction: row;
        gap: ${props => (props.theme.core.grid.gap * 3).toFixed(1)}rem;
    }
`

const About = () => {
    return(
        <React.Fragment>
            <Head>
                <title>About | Quick Car Search</title>
            </Head>

            <Header />
            
            <AltHeading>
                <h1>About</h1>
                <h3 style={{fontWeight: 'normal'}}>Welcome to quickcarsearch.io, the free online tool for finding for your next performance car!</h3>
            </AltHeading>

            <main>
                <Layout>
                    <p>Before you read on, a quick note from me, James (owner/maintainer of this project): I just wanted to say a big thanks for visiting the site and reading this - Just by being here, you&apos;re helping support the journey of quickcarsearch.io and are helping to keep this project going!</p>
                    <p>We blend a love for cars with cutting-edge tech, and bring users lightning-fast searches with no hassle — just results in the blink of an eye. No fuss, no overcomplicated UI and total transparency with what I&apos;m trying to acheive here. I want to help you find the absolute fastest possible car for whatever budget you have. Simple.</p>
                    <p>Working on quickcarsearch.io gets me to think about how I can best implement and really perfect important web development concepts like <a href="https://mailchimp.com/marketing-glossary/seo/" target="_blank" rel="noreferrer">SEO</a>, <a href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer">Core Web Vitals</a> and <a href="https://developers.google.com/speed" target="_blank" rel="noreferrer">site performance</a> as well as giving me the chance to use some of the latest and greatest technologies on offer. So not only can a I build a tool that folks really love, but I get to learn and develop my skils along the way.</p>
                    <p>I built this site using the latest version of <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJS</a> (which runs with <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a> under the hood). Its hosted with GoDaddy and deployed with AWS amplify. There really is not much more to it - which is key principle I have when it comes to building this project out: <strong>simplicity is king</strong>.</p>
                    <p>Anyway, less of that boring stuff, go and enjoy the site! Its still a work in progress with plenty of features soon to be released but if you like it, you can donate here to help me out: <a href="https://www.paypal.com/donate/?hosted_button_id=W24KWDR9GV7FJ" target="_blank" rel="noreferrer">https://www.paypal.com/donate</a></p>
                    <p>Cheers</p>
                    <p style={{marginBottom: 0}}>James</p>
                </Layout>
                <hr style={{marginTop: '2rem', marginBottom: '2rem'}} />
                <Layout>
                    <CarHistoryWrapper>
                        <h3 style={{margin: 0}}>My Car History</h3>
                        <CarHistoryItem>
                            <p className={'model_year'} style={{margin: 0}}>2008</p>
                            <p className={'make'} style={{margin: 0}}>1.1L Citreon C2 Cool</p>
                            <p style={{margin: 0}}>[Black]</p>
                        </CarHistoryItem>
                        <CarHistoryItem>
                            <p className={'model_year'} style={{margin: 0}}>2015</p>
                            <p className={'make'} style={{margin: 0}}>1.6L Turbo Mk7 Ford Fiesta ST</p>
                            <p style={{margin: 0}}>[Spirit Blue]</p>
                        </CarHistoryItem>
                        <CarHistoryItem>
                            <p className={'model_year'} style={{margin: 0}}>2018</p>
                            <p className={'make'} style={{margin: 0}}>3.7L Nissan 370z Nismo</p>
                            <p style={{margin: 0}}>[Diamond Black]</p>
                        </CarHistoryItem>
                    </CarHistoryWrapper>
                </Layout>
            </main>
        </React.Fragment>
    )
}

export default About