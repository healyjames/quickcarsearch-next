export const FormItem = (props) => {
    return(
        <div className={props.styles.form_item}>
            <label className={props.styles.budget} htmlFor="budget">What's your budget?</label>
            <div className={props.styles.form_input_item}>
                <span className={props.styles.currency}>£</span>
                <input
                    type="text" 
                    name="budget" 
                    id="budget" 
                    min="0" 
                    maxLength="9" 
                    step="10" 
                    placeholder="20,000..." 
                    pattern="^[0-9,.]*$"
                    value={props.budget} 
                    onChange={
                        (event) => props.setBudget(
                            event.target.value
                        )
                    } 
                    required />
            </div>
        </div>
    )
}