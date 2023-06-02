import Image from 'next/image'

import { Layout } from '../../layout/Layout'

import styles from './SlimHeader.module.scss'

export const SlimHeader = (props) => {
	return(
		<Layout>
			<div id={styles.home}>
				<div>
					<div className={styles.header_container_inner}>
						<a href="/" className={styles.logo_container} tabIndex="-1">
						<Image
							src={"/assets/logo/" + props.logo}
							alt="Picture of the author"
							width="30"
							height="25"
							style={{width: '50px', height: 'auto'}}
						/>
						</a>
						<div className={styles.acronym_container}>
						<Image
							src={"/assets/logo/" + props.acronym}
							alt="Picture of the author"
							width="60"
							height="50"
							style={{width: '75px', height: 'auto'}}
						/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}