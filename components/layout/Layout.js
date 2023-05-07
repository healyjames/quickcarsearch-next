import styles from './Layout.module.scss'

export const Layout = (props) => {
    return(
        <div className={styles.layout}>
            {props.children}
        </div>
    )
}