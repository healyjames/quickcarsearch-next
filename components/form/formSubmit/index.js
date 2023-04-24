export default function FormSubmit(props) {
    console.log(props.styles)
    return(
        <div className={`${props.styles["form_item"]} ${props.styles["submit_item"]}`}>
            <button type="submit" form="main_form" value="Submit" className={props.styles.submit_btn}>Search</button>
        </div>
    )
}