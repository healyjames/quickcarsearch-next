import React from 'react'

import Image from 'next/image'

import styled from 'styled-components'

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

export const Header = (props) => {
	return(
		<div id={'home'}>
			<div>
				<HeaderContainerInner>
					<a href="/" tabIndex="-1">
						<Image
							src={"/assets/logo/" + props.logo}
							alt="Picture of the author"
							width="60"
							height="50"
							style={{width: '75px', height: 'auto'}}
						/>
					</a>
					<div style={{transform: 'scale(0.85)'}}>
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