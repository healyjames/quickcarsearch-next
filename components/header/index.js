import styles from './Header.module.scss'
import Image from 'next/image'

export default function Header(props) {
	return(
		<div id={props.id}>
			<div>
				<div className={styles.header_container_inner}>
					<a href="/" className={styles.logo_container} tabIndex="-1">
					<Image
						src={"/assets/logo/" + props.logo}
						alt="Picture of the author"
						width="60px"
						height="50px"
						style={{width: '75px', height: 'auto'}}
					/>
					</a>
					{/* <div className={styles.menu_container}>
					<Image
						src={"/assets/logo/" + props.logo}
						alt="Picture of the author"
						width="60px"
						height="50px"
						style={{width: '75px', height: 'auto'}}
					/>
					</div> */}
				</div>
			</div>
		</div>
	)
}