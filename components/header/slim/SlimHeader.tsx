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
`;

const AcronymContainer = styled.div`
  	transform: scale(0.85);
`;

const HomeContainer = styled.div`
	.menu_container {
		margin-top: 0;
	}

  	${HeaderContainerInner} {
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
  	}
`;


export const SlimHeader = (props) => {
	return(
		<Layout>
			<HomeContainer>
				<div>
					<HeaderContainerInner>
						<a href="/" tabIndex="-1">
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
		</Layout>
	)
}