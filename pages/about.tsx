import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"

import { Header } from "../components/header/Header"
import { Layout } from "../components/layout/Layout"
import ImageTag from "../components/image-tag/ImageTag"

const ImageContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    min-height: 100vh;

    img {
        object-fit: cover;
        overflow: hidden;
    }
`

const CarHistoryContainer = styled.div`
    padding: ${props => (props.theme.core.padding * 2).toFixed(1)}rem;
    border-radius: ${props => props.theme.border.radius}rem;
    background-color: ${props => props.theme.colors.brand};
    filter: drop-shadow(0px 3px 5px rgba(232, 116, 12, 0.5));
    h3 {
        margin: 0;
    }
    p:last-child {
        margin-bottom: 0;
    }
    hr {
        border: 1px ${props => props.theme.border.style} ${props => props.theme.colors.foreground};
        width: 30%;
        margin: ${props => props.theme.core.margin}rem 0;
    }
`

const CarHistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${props => props.theme.breakpoints.lg}px) {
        flex-direction: row;
        gap: ${props => (props.theme.core.grid.gap * 3).toFixed(1)}rem;
    }
`

const About = () => {
    const [hideOnMobile, setHideOnMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
        setHideOnMobile(window.innerWidth > 979)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>About | Quick Car Search</title>
            </Head>
            <Header backgroundColor="#131416" />
            <ImageContainer>
                <ImageTag
                    name={'Bailey Mahon'}
                    url={'https://unsplash.com/@baileymahon'}
                />
                {hideOnMobile 
                    ?
                    <Image
                        src="/assets/images/about-image-lg.webp"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={1600}
                        height={1000}
                        loading="lazy"
                        decoding="async" 
                        alt="Orange Lambourghini Huracan parked on the street"
                        placeholder="blur"
                        blurDataURL="/assets/images/about-image-lg.webp"
                    />
                    :
                    <Image
                        src="/assets/images/about-image.webp"
                        fill
                        loading="lazy"
                        decoding="async" 
                        alt="Orange Lambourghini Huracan parked on the street"
                        placeholder="blur"
                        blurDataURL="/assets/images/about-image-lg.webp"
                    />
                }
            </ImageContainer>
            <main>
                <Layout>
                    <h1>About</h1>
                    <p>Hey, welcome to quickcarsearch.io! I'm James, the person behind this project - a big fan of anything with four wheels and an engine with a background is in software development, user experience and graphic design. quickcarsearch.io is a project of mine which is the result of all the skills and knowledge I've picked up over the years. Before you read on, I just wanted to say a big thanks for visiting the site and reading this! Just by being here, you're helping support my journey and helping keep this project going.</p>
                    <p>The main aim of this project is to create something that helps your average petrolhead find out how quick they can go on a budget. No fuss, no overcomplicated UI and total transparency with what I'm doing here. I want to help you find the absolute fastest possible car for whatever budget you have.</p>
                    <p>I started this project for fun. I enjoy cars and I enjoy writing code so I put the two together, simple as that. It gives myself the opportunity to hone my dev skills and it allows me to really explore how to make a seriously fast, user friendly, good-looking and (maybe most importantly) useful website. Every decision I make here, I try and ask myself "does the user find any value in this?". Working on quickcarsearch.io gets me to think about how I can best implement and really perfect important web development concepts like <a href="https://mailchimp.com/marketing-glossary/seo/" target="_blank" rel="noreferrer">SEO</a>, <a href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer">Core Web Vitals</a> and <a href="https://developers.google.com/speed" target="_blank" rel="noreferrer">site performance</a> as well as giving me the chance to use some of the latest and greatest technologies on offer.</p>
                    <p>Quickly, while we're on the subject, for any techies out there reading this and wondering, I built this site using the latest version of <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJS</a> (which runs with <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a> under the hood). Its hosted with GoDaddy and deployed with AWS amplify. There really is not much more to it - which is key principle I have when it comes to building this project out: simplicity is king. Don't overwhelm the user. Don't pump rubbish into the codebase. Don't make life difficult for yourself! </p>
                    <p>What really sets this apart from the rest is the lightning-fast search functionality I've created. To be totally transparent about how we achieve lightning fast search results; we preload all the data before you make your search, so your searches are instantaneous. No lag, no waiting – results as soon as you need them. We don't bother with API calls or really anything external to the site; it all comes down to how fast your browser can render the results!</p>
                    <CarHistoryWrapper>
                        <div>
                            <p>Anyway, less of that boring stuff, go and enjoy the site! If you like it, you can donate to my fund here: <a href="https://www.paypal.com/donate/?hosted_button_id=W24KWDR9GV7FJ" target="_blank" rel="noreferrer">https://www.paypal.com/donate</a></p>
                            <p>Cheers</p>
                            <p>James</p>
                        </div>
                        <CarHistoryContainer>
                            <h3>My Car History</h3>
                            <hr />
                            <p>2008 1.1L Citreon C2 Cool [Black]</p>
                            <p>2015 1.6L Turbo Mk7 Ford Fiesta ST [Spirit Blue]</p>
                            <p>2018 3.7L Nissan 370z Nismo [Diamond Black]</p>
                        </CarHistoryContainer>
                    </CarHistoryWrapper> 
                </Layout>
            </main>
        </React.Fragment>
    )
}

export default About