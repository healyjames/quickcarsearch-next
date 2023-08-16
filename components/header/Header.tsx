import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

interface HeaderProps {
	id: string
	logo: string
	acronym: string
}

const HeaderContainerInner = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
	border-bottom: ${props => props.theme.border.width}px ${props => props.theme.border.style} ${props => props.theme.colors.neutrals.lightest};
	padding-bottom: ${props => props.theme.core.padding}rem;
	margin-bottom: ${props => (props.theme.core.margin * 2).toFixed(2)}rem;

	@media (min-width: ${props => props.theme.breakpoints.lg}px) {
		border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 0;
	}
`

export const Header = (props: HeaderProps) => {
	return(
		<div id={'home'}>
			<div>
				<HeaderContainerInner>
					<Link href="/" tabIndex={-1}>
						<Image
							src={"/assets/logo/" + props.logo}
							alt="Picture of the author"
							width="60"
							height="50"
							style={{width: '75px', height: 'auto'}}
						/>
					</Link>
					<div style={{transform: 'scale(0.85)', willChange: 'transform'}}>
						<Image
							src={"/assets/logo/" + props.acronym}
							alt="Picture of the author"
							width="60"
							height="50"
							style={{width: '75px', height: 'auto'}}
						/>
					</div>
				</HeaderContainerInner>
			</div>
		</div>
	)
}