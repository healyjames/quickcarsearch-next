import styles from './Heading.module.scss'

export default function Heading() {
    return(
        <div className={styles.heading_container}>
            <h1 className={styles.heading}>Find your next performance car <span>the easy way.</span></h1>
            <h2 className={styles.subheading}>We make finding your next performance car simple with our easy-to-use, super quick, online search engine.</h2>
        </div>
    )
}