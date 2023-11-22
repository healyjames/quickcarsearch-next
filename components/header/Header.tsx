import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components'

import { Sidebar } from '../sidebar/Sidebar';
import { Overlay, NavOpenButton } from './styles'

const HeaderContainerInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 0 ${props => props.theme.core.padding}rem;

	@media (min-width: ${props => props.theme.breakpoints.lg}px) {
        justify-content: space-between;
    }
`

const AcronymContainer = styled.div`
	display: none;
	will-change: transform;
  	transform: scale(0.85);
	margin-left: 1rem;

	@media (min-width: ${props => props.theme.breakpoints.lg}px) {
        display: block;
    }
`;

const HomeContainer = styled.div`
	background-color: ${(props) => props.theme.colors.brand};
	padding: ${props => (props.theme.core.padding * 1.5).toFixed(2)}rem 0;
`

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: none;
	gap: ${props => props.theme.core.grid.gap}rem;
	align-items: center;
`

export const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	}
	
	return(
		<HomeContainer>
			<HeaderContainerInner>
			<NavOpenButton onClick={toggleSidebar}>
				<Image
					src={"/assets/icons/bars-solid.svg"}
					alt="Navigation open icon"
					width={26}
					height={26}
				/>
			</NavOpenButton>
				<LogoContainer>
					<Link href="/" tabIndex={-1}>
						<Image
							src={"/assets/logo/logo-icon-white.svg"}
							alt="Picture of the author"
							width="30"
							height="25"
							style={{width: '50px', height: 'auto'}}
						/>
					</Link>
					<AcronymContainer>
						<Link href="/" tabIndex={-1}>
							<Image
								src={"/assets/logo/logo-acronym-white.svg"}
								alt="Picture of the author"
								width="60"
								height="50"
								style={{width: '75px', height: 'auto'}}
							/>
						</Link>
					</AcronymContainer>
				</LogoContainer>
			</HeaderContainerInner>
			<Overlay show={sidebarOpen} onClick={toggleSidebar} />
			<Sidebar open={sidebarOpen} close={toggleSidebar} />
		</HomeContainer>
	)
}