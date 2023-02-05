import styles from './Form.module.scss'

export default function Form() {
    <form id="main_form" action="/results" method="GET" aria-label="Set your budget">
        <fieldset>
            <legend className={styles.sr_only}>Description</legend>
            <FormItem />
            <FormSubmit />
        </fieldset>
    </form>
}

const FormItem = () => (
    <div className={styles.form_item}>
        <label for="budget">What's your budget?</label>
        <div className={styles.form_input_item}>
            <span className={styles.currency}>£</span><input type="text" name="budget" id="budget" min="0" maxlength="9" step="10" placeholder="20,000..." pattern="^[0-9,.]*$" required></input>
        </div>
    </div>
);

const FormSubmit = () => (
    <div className={`${styles.form_item} ${submit_item}`}>
        <button type="submit" form="main_form" value="Submit" className={styles.submit_btn}>Search</button>
    </div>
);