import styles from './FeatureImage.module.scss'
import Image from 'next/image'

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
                    <Image  src="/assets/images/home-image.jpg" 
                        fill
                        priority
                        loading="eager"
                        size="(max-width: 979px) 100vw,
                            (min-width: 1200px) 50vw"
                        decoding="async" 
                        alt="Orange Lambourghini Huracan parked on the street" />
                </div>

            </div>
        </div>
    )
}