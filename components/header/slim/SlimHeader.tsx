import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'


const HeaderContainerInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 0 ${props => props.theme.core.padding}rem;

	@media (min-width: ${props => props.theme.breakpoints.lg}px) {
        justify-content: flex-end;
    }
`;

const AcronymContainer = styled.div`
  	transform: scale(0.85);
	margin-left: 1rem;
`;

const HomeContainer = styled.div`
	background-color: ${(props) => props.theme.colors.brand};
	padding: ${props => (props.theme.core.padding * 2).toFixed(2)}rem 0;
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