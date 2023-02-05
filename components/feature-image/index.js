import styles from './FeatureImage.module.scss'

export default function FeatureImage() {
    return(
        <div>
            <div className={styles.image_container_inner}>

                <div className={styles.image_tag}>
                    <a href="https://unsplash.com/@martinkatler" target="_blank">
                        <p><i className="fas fa-camera"></i><span>Martin Katler</span></p>
                    </a>
                </div>

                <div className={styles.image_container}>
                    <picture>
                        <source srcSet="/assets/images/home-image.webp" alt="Orange Lambourghini Huracan parked on the street" type="image/webp" />
                        <img src="/assets/images/home-image.jpg" decoding="async" alt="Orange Lambourghini Huracan parked on the street" width="500" height="500" />
                    </picture>
                </div>

            </div>
        </div>
    )
}