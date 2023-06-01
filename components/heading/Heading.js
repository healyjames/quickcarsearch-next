import styles from './Heading.module.scss'

export const Heading = (props) => {
    return(
        <div className={styles.heading_container}>
           {props.children}
        </div>
    )
}