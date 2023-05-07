import styles from './Loading.module.scss'

export const Loading = () => {
    return(
        <div className={styles.loading_container_outer}>
            <div className={styles.loading_container_inner}>
                <div className={styles.loading_animation}>
                    <div className={styles.bounce1}></div>
                    <div className={styles.bounce2}></div>
                    <div className={styles.bounce3}></div>
                </div>
            </div>
        </div>
    )
}