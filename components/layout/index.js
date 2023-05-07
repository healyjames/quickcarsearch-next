import styles from './Layout.module.scss'

export const Layout = (props) => {
    return(
        <main className={styles.layout}>
            {props.children}
        </main>
    )
}