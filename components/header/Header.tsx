import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
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
	will-change: transform;
  	transform: scale(0.85);
	margin-left: 1rem;
`;

const HomeContainer = styled.div`
	background-color: ${(props) => props.theme.colors.brand};
	padding: ${props => (props.theme.core.padding * 2).toFixed(2)}rem 0;
`;

export const Header = () => {
	return(
		<HomeContainer>
			<div>
				<HeaderContainerInner>
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
						<Image
							src={"/assets/logo/logo-acronym-white.svg"}
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