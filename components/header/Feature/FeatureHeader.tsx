import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const HeaderContainerInner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  background-color: ${props => (props.theme.colors.background)};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: ${props => (props.theme.core.padding * 1.5).toFixed(2)}rem;
  z-index: 3;
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

const NavCloseButton = styled.button`
	display: flex;
    justify-content: center;
    align-items: center;
	margin-left: ${props => (props.theme.core.padding).toFixed(2)}rem;
	padding: ${props => (props.theme.core.padding / 4).toFixed(2)}rem;
	background-color: transparent;
	border-radius: ${props => (props.theme.border.radius)}rem;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => (props.theme.colors.brand)};
	}
`

const NavContainer = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: ${props => (props.theme.core.margin * 2).toFixed(2)}rem 0;
	padding: 0;
`

const NavItemInner = styled.li`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	padding: ${props => (props.theme.core.padding)}rem;
	border-bottom: 1px ${props => props.theme.border.style} #333;
	gap: ${props => (props.theme.core.grid.gap)}rem;
`

const NavSubItemConainer = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${props => (props.theme.core.grid.gap / 2).toFixed(2)}rem;
	padding: 0;
`

const NavItem = styled.a`
	text-decoration: none;
	color: ${props => (props.theme.colors.foreground)};
	width: 100%;
	gap: ${props => props.theme.core.grid.gap}rem;
	border-bottom: 1px ${props => props.theme.border.style} #333;

	&:hover {
		background-color: #333;
	}
`

const NavSubItem = styled.a`
	color: ${props => (props.theme.colors.foreground)};
	font-size: ${props => (props.theme.font.size / 1.5).toFixed(2)}rem;
	border-bottom: 2px ${props => props.theme.border.style} transparent;
	text-decoration: none;

	&:hover {
		border-bottom: 2px ${props => props.theme.border.style} ${props => (props.theme.colors.foreground)};
	}
`

const NavSubItemInner = styled.li`
	list-style-type: none;
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
				<Sidebar 
					style={{ 
						width: sidebarOpen ? '250px' : '0' 
					}}
					aria-label="Main navigation menu"
				>
					<NavCloseButton onClick={toggleSidebar}>
						<Image
							src={"/assets/icons/xmark-solid.svg"}
							alt="Navigation close icon"
							width={28}
							height={28}
						/>
					</NavCloseButton>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							flexWrap: 'nowrap',
							alignItems: 'space-between',
							height: '85vh',
							justifyContent: 'space-between'
						}}	
					>
						<NavContainer>
							<NavItem href="/">
								<NavItemInner>
									<Image
										src={"/assets/icons/circle-house-solid.svg"}
										alt="Navigation open icon"
										width={26}
										height={26}
									/>
									<p style={{margin: 0}}>Home</p>
								</NavItemInner>
							</NavItem>
							<NavItem href="/about">
								<NavItemInner>
									<Image
										src={"/assets/icons/circle-info-solid.svg"}
										alt="Navigation open icon"
										width={26}
										height={26}
									/>
									<p style={{margin: 0}}>About</p>
								</NavItemInner>
							</NavItem>
							<NavItem href="/blog">
								<NavItemInner>
									<Image
										src={"/assets/icons/circle-newspaper-solid.svg"}
										alt="Navigation open icon"
										width={26}
										height={26}
									/>
									<p style={{margin: 0}}>Blog</p>
								</NavItemInner>
							</NavItem>
							<NavItem href="/store">
								<NavItemInner>
									<Image
										src={"/assets/icons/circle-store-solid.svg"}
										alt="Navigation open icon"
										width={26}
										height={26}
									/>
									<p style={{margin: 0}}>Store</p>
								</NavItemInner>
							</NavItem>
						</NavContainer>
						<NavSubItemConainer>
							<NavSubItem href="/terms">
								<NavSubItemInner>
									<p style={{margin: 0}}>Terms</p>
								</NavSubItemInner>
							</NavSubItem>
							<NavSubItem href="/privacy">
								<NavSubItemInner>
									<p style={{margin: 0}}>Privacy</p>
								</NavSubItemInner>
							</NavSubItem>
							<NavSubItem href="/cookies">
								<NavSubItemInner>
									<p style={{margin: 0}}>Cookies</p>
								</NavSubItemInner>
							</NavSubItem>
						</NavSubItemConainer>
					</div>
				</Sidebar>
			</div>
		</div>
	)
}