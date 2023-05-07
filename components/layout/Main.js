import styles from './Layout.module.scss'

export const Main = (props) => {
    return(
        <main className={styles[`${props.page}`]}>
            {props.children}
        </main>
    )
}