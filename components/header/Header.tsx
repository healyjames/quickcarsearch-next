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
							style={{width: '65px', height: 'auto'}}
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