import React from "react"
import styled from "styled-components"
import Image from "next/image"

const SidebarWrapper = styled.nav`
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

interface SidebarProps {
    open: boolean
    close: () => void
}

export const Sidebar = (props: SidebarProps) => {
    return (
        <SidebarWrapper 
            style={{ 
                width: props.open ? '250px' : '0' 
            }}
            aria-label="Main navigation menu"
        >
            <NavCloseButton onClick={props.close}>
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
        </SidebarWrapper>
    )
}