import styles from './Loading.module.scss'

export default function Loading() {
    return(
        <div className={styles.loading_container_outer}>
            <div className={styles.loading_container_inner}>
                <div class={styles.loading_animation}>
                    <div class={styles.bounce1}></div>
                    <div class={styles.bounce2}></div>
                    <div class={styles.bounce3}></div>
                </div>
            </div>
        </div>
    )
}