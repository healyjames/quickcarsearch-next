import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

import { Sidebar } from '../../sidebar/Sidebar'

const HeaderContainerInner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Overlay = styled.div<{
	show: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Adjust the overlay color and opacity as needed */
  z-index: 2;
  display: ${(props) => (props.show ? 'block' : 'none')};
`

const NavOpenButton = styled.button`
	display: flex;
    justify-content: center;
    align-items: center;
	padding: ${props => (props.theme.core.padding / 2).toFixed(2)}rem;
	background-color: transparent;
	border-radius: ${props => (props.theme.border.radius)}rem;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => (props.theme.colors.backgroundAlt)};
	}
`

export const FeatureHeader = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	}

	return(
		<div id={'home'}>
			<div>
				<HeaderContainerInner>
					<NavOpenButton onClick={toggleSidebar}>
						<Image
							src={"/assets/icons/bars-solid.svg"}
							alt="Navigation open icon"
							width={26}
							height={26}
						/>
					</NavOpenButton>
					<Link href="/" tabIndex={-1}>
						<Image
							src={"/assets/logo/logo-icon-white.svg"}
							alt="Quick Car Search car logo icon"
							width="60"
							height="50"
							style={{width: '65px', height: 'auto'}}
						/>
					</Link>
				</HeaderContainerInner>
				<Overlay show={sidebarOpen} onClick={toggleSidebar} />
				<Sidebar open={sidebarOpen} close={toggleSidebar} />
			</div>
		</div>
	)
}