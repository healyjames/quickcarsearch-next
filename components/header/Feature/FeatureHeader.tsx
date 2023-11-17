import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

import { Sidebar } from '../../sidebar/Sidebar'
import { Overlay, NavOpenButton } from '../styles'

const HeaderContainerInner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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