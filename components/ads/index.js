import styles from './HorizontalAd.module.scss'

export default function HorizontalAd() {
    return(
        <div className={styles.ad_container_outer}>
            <div className={styles.ad_container_inner}>
                <div className={styles.ad}></div>
            </div>
        </div>
    )
}