import styles from './form.module.css'

const ContactForm = props => (
        <form name="contact" method="POST" className={styles.form} data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
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
                <label htmlFor="message">
                    Message
                </label>
                <textarea name="message" id="message" rows="4"></textarea>
            </p>
            <p>
                <button type="submit" className="d-flex mx-auto btn justify-content-center">Send</button>
            </p>
        </form>
);

export default ContactForm;