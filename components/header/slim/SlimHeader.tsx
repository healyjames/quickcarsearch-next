import React from 'react'

import Image from 'next/image'

import { Layout } from '../../layout/Layout'

import styled from 'styled-components'


const HeaderContainerInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	border-bottom: ${props => `${props.theme.border.width}px ${props.theme.border.style} ${props.theme.colors.neutrals.lightest}`};
	padding-bottom: ${props => props.theme.core.padding}rem;
	margin-bottom: ${props => (props.theme.core.margin * 2).toFixed(2)}rem;

	@media (min-width: ${props => props.theme.breakpoints.lg}px) {
        justify-content: flex-end;
    }
`;

const AcronymContainer = styled.div`
  	transform: scale(0.85);
	margin-left: 1rem;
`;

const HomeContainer = styled.div`
padding: ${props => (props.theme.core.padding * 2).toFixed(2)}rem ${props => (props.theme.core.padding * 2).toFixed(2)}rem ${props => (props.theme.core.padding / 2).toFixed(2)}rem ${props => (props.theme.core.padding * 2).toFixed(2)}rem;
`;


interface SlimHeaderProps {
	id: string
	logo: string
	acronym: string
}

export const SlimHeader = (props: SlimHeaderProps) => {
	return(
		<HomeContainer>
			<div>
				<HeaderContainerInner>
					<a href="/" tabIndex={-1}>
					<Image
						src={"/assets/logo/" + props.logo}
						alt="Picture of the author"
						width="30"
						height="25"
						style={{width: '50px', height: 'auto'}}
					/>
					</a>
					<AcronymContainer>
						<Image
							src={"/assets/logo/" + props.acronym}
							alt="Picture of the author"
							width="60"
							height="50"
							style={{width: '75px', height: 'auto'}}
						/>
					</AcronymContainer>
				</HeaderContainerInner>
			</div>
		</HomeContainer>
	)
}