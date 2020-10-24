import styles from './form.module.css'

const OrderForm = props => (
        <form name="order" method="POST" className={styles.form} data-netlify="true">
            <input type="hidden" name="form-name" value="order" />
            <p>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" name="name" id="name" />
            </p>
            <p>
                <label htmlFor="email">
                    Email
                </label> 
                <input type="email" name="email" id="email" />
            </p>
            <p>
                <label htmlFor="notes">
                    Notes
                </label>
                <textarea name="notes" id="notes" rows="4"></textarea>
            </p>
            <p>
                <button type="submit" className="d-flex mx-auto btn btn-primary">Send</button>
            </p>
        </form>
);

export default OrderForm;