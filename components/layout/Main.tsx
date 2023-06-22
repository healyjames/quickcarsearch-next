import React from 'react'

import styled from "styled-components"

const Home = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    grid-template-columns: 40% 60%;
  }
`;

export const Main = (props) => {
    return(
        props.page === 'home' ?
            <Home>
                {props.children}
            </Home> 
        :
            <main>
                {props.children}
            </main>
    )
}